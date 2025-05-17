// /pages/api/order.js
import { createClient } from '@supabase/supabase-js';
import Stripe from 'stripe';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2022-11-15',
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, address, kit } = JSON.parse(req.body);

    // 1. Insert order in Supabase
    const { data, error } = await supabase
      .from('orders')
      .insert([{ name, email, address, kit, status: 'pending' }]);

    if (error) {
      console.error('Supabase Error:', error.message);
      return res.status(500).json({ error: 'Failed to save order' });
    }

    // 2. Create Stripe checkout session
    const prices = {
      single: 'price_1ABCDEF...', // Replace with real Stripe Price IDs
      monthly: 'price_1ABCDEF...',
      family: 'price_1ABCDEF...',
    };

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: prices[kit],
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/thank-you`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/order`,
      customer_email: email,
      metadata: {
        order_name: name,
        kit_type: kit,
      },
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error('Server Error:', err.message);
    res.status(500).json({ error: 'Internal server error' });
  }
}
