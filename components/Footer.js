// components/Footer.js
import { Box, Container, Typography } from '@mui/material';

export default function Footer() {
  return (
    <Box sx={{ py: 4, backgroundColor: '#101820', color: '#fff', textAlign: 'center' }}>
      <Container>
        <Typography variant="body2" gutterBottom>
          HIPAA Compliant · Secure Data · Trusted by Labs
        </Typography>
        <Typography variant="body2">
          © {new Date().getFullYear()} MilkPrize. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
