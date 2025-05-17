// components/Header.js
import Link from 'next/link';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

export default function Header() {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Link href="/" passHref>
            <Typography variant="h6" fontWeight="bold" sx={{ cursor: 'pointer' }}>
              MilkPrize
            </Typography>
          </Link>
          <Link href="/order" passHref>
            <Button variant="contained" size="small">
              Order Now
            </Button>
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
