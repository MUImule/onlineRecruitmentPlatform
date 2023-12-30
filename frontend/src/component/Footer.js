import React from 'react';
import {
  Box,
  Typography,
  Link,
  IconButton,
  Grid,
  Divider,
  Container,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  const { palette } = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: palette.secondary.main,
        color: palette.common.white,
        padding: '40px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} md={4}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              Connect with Us
            </Typography>
            <Typography variant="body2" color="textSecondary">
              We're always happy to hear from you!
            </Typography>
          </Grid>
          <Grid item xs={12} md={8}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
                <IconButton component={Link} href="mailto:mulualemyeshambel@gmail.com">
                  <EmailIcon sx={{ fontSize: 36 }} />
                </IconButton>
                <Typography variant="body2">
                  mulualemyeshambel@gmail.com
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
                <IconButton component={Link} href="tel:+251970845365">
                  <PhoneIcon sx={{ fontSize: 36 }} />
                </IconButton>
                <Typography variant="body2">+251 97 084 5365</Typography>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
                <IconButton component={Link} href="https://t.me/MuleMuller" target="_blank">
                  <TelegramIcon sx={{ fontSize: 36 }} />
                </IconButton>
                <Typography variant="body2">https://t.me/MuleMuller</Typography>
              </Grid>
              <Grid item xs={12} sm={6} sx={{ textAlign: 'center' }}>
                <IconButton component={Link} href="https://twitter.com/muller" target="_blank">
                  <TwitterIcon sx={{ fontSize: 36 }} />
                </IconButton>
                <Typography variant="body2">https://twitter.com/muller</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Typography variant="body2" color="textSecondary" sx={{ alignSelf: 'center' }}>
          © 2024. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
