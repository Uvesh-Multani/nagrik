import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ChatIcon from '@mui/icons-material/Chat';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import PollIcon from '@mui/icons-material/Poll';
import InfoIcon from '@mui/icons-material/Info';

const theme = createTheme();

export default function HomePage() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        {/* Hero Section */}
        <Box
          sx={{
            pt: 8,
            pb: 6,
            textAlign: 'center',
            backgroundColor: '#f5f5f5',
            borderRadius: 2,
            boxShadow: 3
          }}
        >
          <Typography variant="h2" gutterBottom>
            Welcome to NAGRIK
          </Typography>
          <Typography variant="h5" color="text.secondary">
            Empowering Citizens through Easy Access to Governance, Resources, and Information
          </Typography>
          <Button variant="contained" color="primary" onClick={() => window.location.href = "/signup"} sx={{ mt: 4 }}>
            Get Started
          </Button>
        </Box>

        {/* Features Section */}
        <Box sx={{ py: 8 }}>
          <Typography variant="h4" sx={{mb:5}} align="center" gutterBottom>
            Our Features
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <ChatIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  AI-Powered Chatbot
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Get instant assistance with our AI chatbot for any queries regarding government regulations and schemes.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <FindInPageIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Regulation Finder
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Easily search for and access government regulations and laws.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <PollIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Public Polls
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Participate in public polls to voice your opinion on important issues.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ textAlign: 'center' }}>
                <InfoIcon sx={{ fontSize: 60, color: 'primary.main' }} />
                <Typography variant="h6" sx={{ mt: 2 }}>
                  Educational Resources
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Access educational materials to better understand your civic responsibilities and rights.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* How It Works Section */}
        <Box sx={{ py: 8, backgroundColor: '#f5f5f5', borderRadius: 2 }}>
          <Typography variant="h4" align="center" gutterBottom>
            How It Works
          </Typography>
          <Typography variant="h6" align="center" color="text.secondary">
            NAGRIK is designed to make governance accessible and transparent. Here's how you can get started:
          </Typography>
          <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" align="center">
                1. Explore
              </Typography>
              <Typography variant="body1" align="center" color="text.secondary">
                Navigate through our user-friendly interface to find regulations, schemes, and educational resources.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" align="center">
                2. Engage
              </Typography>
              <Typography variant="body1" align="center" color="text.secondary">
                Participate in public polls and provide feedback to help us improve governance.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="h6" align="center">
                3. Connect
              </Typography>
              <Typography variant="body1" align="center" color="text.secondary">
                Use our AI chatbot for instant help and stay informed about the latest updates.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Call to Action */}
        <Box sx={{ py: 6, textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Ready to get started?
          </Typography>
          <Button variant="contained" color="primary">
            Explore NAGRIK
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
