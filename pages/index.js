// pages/index.js — MilkPrize 23andMe-Style Premium Landing Page
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import {
  AppBar,
  Box,
  Toolbar,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Stack,
  useMediaQuery,
  Fab,
  TextField,
  InputAdornment,
  Snackbar,
  Alert,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [email, setEmail] = useState('');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();
          const target = document.querySelector(this.getAttribute('href'));
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        });
      });
    }
  }, []);

  const handleNewsletterSubmit = async () => {
    if (!email || !email.includes('@')) {
      setSnackbarMessage('Please enter a valid email address.');
      setSnackbarOpen(true);
      return;
    }

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok) {
        setSnackbarMessage('Thanks for subscribing!');
        setEmail('');
      } else {
        setSnackbarMessage(data.error || 'Subscription failed.');
      }
    } catch (err) {
      setSnackbarMessage('Something went wrong. Try again later.');
    }
    setSnackbarOpen(true);
  };

  return (
    <>
      <Head>
        <title>MilkPrize | Breast Milk Nutrient Testing</title>
        <meta name="description" content="Science for Mom. Health for Baby." />
      </Head>

      {/* Sticky Nav */}
      <AppBar position="sticky" color="default" elevation={1} sx={{ py: 1 }}>
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box display="flex" alignItems="center">
            <Image src="/logo.png" alt="MilkPrize Logo" width={40} height={40} />
            <Typography variant="h6" fontWeight="bold" ml={1}>MilkPrize</Typography>
          </Box>
          <Box>
            <Button href="/order" component={Link}>Order</Button>
            <Button href="#how-it-works">How It Works</Button>
            <Button href="#trust">Trust</Button>
            <Button href="#testimonials">Reviews</Button>
            <Button href="#footer">Privacy</Button>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Hero Section */}
      <Box sx={{ backgroundColor: '#f9f9f9', py: 10 }}>
        <Container maxWidth="lg" textAlign="center">
          <Image src="/logo.png" alt="MilkPrize Logo" width={100} height={100} />
          <Typography variant="h3" fontWeight="bold" mt={2}>Test Your Breast Milk Nutrients</Typography>
          <Typography variant="h6" color="text.secondary">Science for Mom. Health for Baby.</Typography>
          <Button component={Link} href="/order" variant="contained" size="large" sx={{ mt: 4 }}>Order Your Kit</Button>
        </Container>
      </Box>

      {/* Hero Image */}
      <Box>
        <Image
          src="https://images.unsplash.com/photo-1600718374800-840b29d62fba"
          alt="Mom and Baby"
          width={1600}
          height={600}
          layout="responsive"
        />
      </Box>

      {/* Why MilkPrize */}
      <Container maxWidth="lg" sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>Why Choose MilkPrize?</Typography>
        <Grid container spacing={4}>
          {[
            'Lab-validated testing for peace of mind.',
            'Easy-to-use home collection kits.',
            'HIPAA-compliant privacy & secure handling.',
            'Nutrient reports reviewed by health experts.',
            'Build confidence in your baby’s nutrition.',
            'Trusted by thousands of families nationwide.'
          ].map((text, idx) => (
            <Grid item xs={12} sm={6} key={idx}>
              <Card elevation={2}><CardContent><Typography>{text}</Typography></CardContent></Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* How It Works */}
      <Box id="how-it-works" sx={{ backgroundColor: '#f4f6f8', py: 10 }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>How It Works</Typography>
          <Stack spacing={3} mt={4}>
            <Typography>1. Order your MilkPrize kit online.</Typography>
            <Typography>2. Collect your sample at home.</Typography>
            <Typography>3. Ship it back using the prepaid label.</Typography>
            <Typography>4. Receive your lab report in 3–5 business days.</Typography>
          </Stack>
        </Container>
      </Box>

      {/* Lab Image */}
      <Box>
        <Image
          src="https://images.unsplash.com/photo-1581093588401-ef1cc8218c1b"
          alt="Lab Testing"
          width={1600}
          height={500}
          layout="responsive"
        />
      </Box>

      {/* Trust Section */}
      <Box id="trust" sx={{ py: 10 }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="bold" textAlign="center">Trusted by Moms, Backed by Science</Typography>
          <Typography textAlign="center" color="text.secondary" mb={4}>
            MilkPrize works with certified labs and follows strict clinical protocols.
          </Typography>
          <Grid container spacing={3} justifyContent="center">
            {['SSL Encryption', 'HIPAA Compliant', 'Nationwide Labs', 'Expert Consultation'].map((item, idx) => (
              <Grid item key={idx}>
                <Card><CardContent><Typography textAlign="center">{item}</Typography></CardContent></Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials */}
      <Box id="testimonials" sx={{ backgroundColor: '#fff', py: 10 }}>
        <Container maxWidth="md">
          <Typography variant="h4" fontWeight="bold" textAlign="center" gutterBottom>What Moms Are Saying</Typography>
          <Stack spacing={4} mt={4}>
            {[
              { name: 'Sarah M.', quote: 'MilkPrize gave me peace of mind and clear insight into what I was feeding my baby.' },
              { name: 'Rebecca T.', quote: 'Fast, easy, and professional. The report was beautifully organized.' },
              { name: 'Emily G.', quote: 'As a first-time mom, I felt empowered knowing the nutrients my baby was getting.' }
            ].map((t, idx) => (
              <Card key={idx}><CardContent><Typography>“{t.quote}”</Typography><Typography mt={1} fontWeight="bold">{t.name}</Typography></CardContent></Card>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Newsletter Signup */}
      <Box sx={{ backgroundColor: '#ffffff', py: 10 }}>
        <Container maxWidth="sm" textAlign="center">
          <Typography variant="h5" fontWeight="bold" gutterBottom>Stay Informed</Typography>
          <Typography color="text.secondary" mb={3}>
            Get milk science updates and product news. No spam.
          </Typography>
          <Stack direction={isMobile ? 'column' : 'row'} spacing={2} justifyContent="center">
            <TextField
              fullWidth
              variant="outlined"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button variant="contained" size="large" onClick={handleNewsletterSubmit}>Subscribe</Button>
          </Stack>
        </Container>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="info" variant="filled" sx={{ width: '100%' }}>
          {snackbarMessage}
        </Alert>
      </Snackbar>

      {/* Mobile Floating CTA */}
      {isMobile && (
        <Fab
          color="primary"
          component={Link}
          href="/order"
          variant="extended"
          sx={{ position: 'fixed', bottom: 20, right: 20, zIndex: 1300 }}
        >
          Order Kit
        </Fab>
      )}

      {/* Footer */}
      <Box id="footer" sx={{ backgroundColor: '#f5f5f5', py: 4, textAlign: 'center' }}>
        <Container>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} MilkPrize. All rights reserved.{' '}
            <Link href="/privacy" passHref><Button size="small">Privacy Policy</Button></Link>
          </Typography>
        </Container>
      </Box>
    </>
  );
}
