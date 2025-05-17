// /pages/thank-you.js — Post-order Instruction Page
import Head from 'next/head';
import { Box, Container, Typography, Button, Divider, Stack } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You | MilkPrize</title>
        <meta name="description" content="Post-order instructions for breast milk testing kit." />
      </Head>

      <Container maxWidth="md" sx={{ py: 6 }}>
        <Stack spacing={4} alignItems="center" textAlign="center">
          <CheckCircleOutlineIcon sx={{ fontSize: 60, color: 'green' }} />
          <Typography variant="h4" fontWeight="bold">
            Thank You for Your Order!
          </Typography>
          <Typography variant="body1">
            Your MilkPrize kit is on its way. Once you receive it, follow the included instructions to collect your sample and return it to our certified labs using the prepaid shipping label.
          </Typography>
          <Divider sx={{ width: '100%', my: 2 }} />
          <Box textAlign="left" width="100%">
            <Typography variant="h6" gutterBottom>
              What Happens Next:
            </Typography>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>
                <strong>Receive your kit:</strong> Your collection kit will arrive in a few days via tracked shipping.
              </li>
              <li>
                <strong>Collect your sample:</strong> Follow the step-by-step guide inside the box.
              </li>
              <li>
                <strong>Ship it back:</strong> Use the prepaid label to send your sample to our partner lab.
              </li>
              <li>
                <strong>Get your results:</strong> We&apos;ll email you a secure nutrient report within 3–5 business days.
              </li>
            </ul>
          </Box>
          <Typography variant="body2" color="text.secondary">
            Questions? Reach out to us any time at <a href="mailto:support@milkprize.com">support@milkprize.com</a>
          </Typography>
          <Link href="/" passHref>
            <Button variant="contained" size="large" sx={{ mt: 2 }}>
              Back to Home
            </Button>
          </Link>
        </Stack>
      </Container>
    </>
  );
}
