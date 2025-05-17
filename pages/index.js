// /pages/index.js — MilkPrize Landing Page
import Head from 'next/head';
import { Box, Container, Typography, Button, Stack, Divider } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>MilkPrize | Breast Milk Nutrient Testing</title>
        <meta name="description" content="Test your breast milk nutrients. Science for mom. Health for baby." />
      </Head>

      <Box sx={{ background: '#f3f6f9', py: 10 }}>
        <Container maxWidth="md">
          <Stack spacing={4} textAlign="center">
            <Typography variant="h2" fontWeight="bold" color="primary">
              Test Your Breast Milk Nutrients
            </Typography>
            <Typography variant="h5" color="text.secondary">
              Know exactly what your baby is getting — trusted, secure, and lab-verified.
            </Typography>
            <Link href="/order" passHref>
              <Button variant="contained" size="large">
                Order Your Kit
              </Button>
            </Link>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Why MilkPrize?
          </Typography>
          <ul>
            <li>Professional, lab-validated testing for peace of mind.</li>
            <li>Convenient home collection kits shipped directly to you.</li>
            <li>Safe and secure sample handling with complete privacy.</li>
            <li>Expert nutrition insights tailored to you and baby.</li>
            <li>Trusted by families, health experts, and labs nationwide.</li>
          </ul>
        </Container>
      </Box>

      <Divider />

      <Box sx={{ py: 8, backgroundColor: '#fafafa' }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            How It Works
          </Typography>
          <ol>
            <li>Order your MilkPrize Testing Kit online.</li>
            <li>Collect a small sample of breast milk using our easy kit.</li>
            <li>Ship your sample back to our partnered certified labs.</li>
            <li>Receive a detailed nutrient report via email within days.</li>
            <li>Consult with our experts for personalized baby nutrition advice (optional).</li>
          </ol>
        </Container>
      </Box>

      <Box sx={{ py: 8 }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Benefits for You & Baby
          </Typography>
          <ul>
            <li>Understand your milk’s profile: vitamins, fats, proteins, and more.</li>
            <li>Detect potential deficiencies or imbalances early.</li>
            <li>Make informed decisions to support your baby’s growth.</li>
            <li>Join a community prioritizing evidence-based parenting.</li>
          </ul>
        </Container>
      </Box>

      <Box sx={{ py: 8, backgroundColor: '#e8f0fe' }}>
        <Container maxWidth="md">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Trusted Lab Partners
          </Typography>
          <Typography variant="body1">
            We work exclusively with state-certified laboratories that follow strict protocols for safety and accuracy. MilkPrize handles all logistics, so you receive fast, reliable results without hassle.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: 6, textAlign: 'center', backgroundColor: '#1e4268', color: '#fff' }}>
        <Container>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Ready to Get Started?
          </Typography>
          <Link href="/order" passHref>
            <Button variant="contained" color="secondary" size="large">
              Order Now
            </Button>
          </Link>
        </Container>
      </Box>

      <Box sx={{ py: 4, textAlign: 'center', backgroundColor: '#101820', color: '#fff' }}>
        <Typography variant="body2">
          © {new Date().getFullYear()} MilkPrize. All rights reserved.
        </Typography>
        <Typography variant="body2">
          HIPAA Compliant · Secure Data · Privacy Focused
        </Typography>
      </Box>
    </>
  );
}
