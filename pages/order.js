// /pages/order.js — MilkPrize Order Form with Stripe Integration
import Head from 'next/head';
import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  FormGroup,
  Checkbox,
  FormControlLabel,
  Snackbar,
  Alert,
  Stack,
} from '@mui/material';
import { useRouter } from 'next/router';

export default function OrderPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    kit: 'single',
    agree: false,
  });
  const [loading, setLoading] = useState(false);
  const [snack, setSnack] = useState(false);

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert('Please agree to the privacy policy.');
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.url) {
        window.location.href = data.url; // Redirect to Stripe Checkout
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (err) {
      alert('Error submitting order. Please try again later.');
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Order a Kit | MilkPrize</title>
        <meta name="description" content="Order your breast milk testing kit online" />
      </Head>

      <Container maxWidth="sm" sx={{ py: 6 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Order Your MilkPrize Kit
        </Typography>
        <Typography variant="body1" gutterBottom>
          Securely test your breast milk nutrients. Choose a kit and provide your details below.
        </Typography>

        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
          <Stack spacing={3}>
            <TextField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              fullWidth
            />

            <TextField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              fullWidth
            />

            <TextField
              label="Shipping Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              fullWidth
              multiline
              rows={3}
            />

            <FormControl fullWidth required>
              <InputLabel>Kit Type</InputLabel>
              <Select
                name="kit"
                value={formData.kit}
                onChange={handleChange}
                label="Kit Type"
              >
                <MenuItem value="single">Single Kit — $99</MenuItem>
                <MenuItem value="monthly">Monthly Subscription — $89/month</MenuItem>
                <MenuItem value="family">Family Pack (3 Kits) — $259</MenuItem>
              </Select>
            </FormControl>

            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                    required
                  />
                }
                label="I agree to the privacy policy and terms of service"
              />
            </FormGroup>

            <Button
              type="submit"
              variant="contained"
              size="large"
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Submit & Continue to Payment'}
            </Button>
          </Stack>
        </Box>

        <Snackbar
          open={snack}
          autoHideDuration={3000}
          onClose={() => setSnack(false)}
        >
          <Alert severity="success">Order submitted! Redirecting...</Alert>
        </Snackbar>
      </Container>
    </>
  );
}
