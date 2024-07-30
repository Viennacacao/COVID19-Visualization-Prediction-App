import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

function Home() {
  return (
    <Box
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 1200,
        flexGrow: 1,
        backgroundColor: (theme) => theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
      }}
    >
      <Box
        sx={{
          display: 'flex',       // Use flexbox for layout
          flexDirection: 'row',  // Align items in a row
          gap: 2,                // Add some space between the items
          mb: 2,                 // Add some margin at the bottom of this row
        }}
      >
        <Paper
          sx={{
            width: '50%',         // Adjust width as needed
            height: '600px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,  // Add padding if needed
            borderRadius: 1,  // Optional: add rounded corners
            boxShadow: 3,     // Optional: add shadow effect
          }}
        >
          <iframe
            src="/variant_trends(1).html"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              transform: 'scale(1)',
              transformOrigin: '0 0',
              overflow: 'hidden',
            }}
            title="Variant Trends"
          />
        </Paper>

        <Paper
          sx={{
            width: '50%',         // Adjust width as needed
            height: '600px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,  // Add padding if needed
            borderRadius: 1,  // Optional: add rounded corners
            boxShadow: 3,     // Optional: add shadow effect
          }}
        >
          <iframe
            src="/australia_covid_map.html"
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              transform: 'scale(1)',
              transformOrigin: '0 0',
              overflow: 'hidden',
            }}
            title="Australia COVID Map"
          />
        </Paper>
      </Box>

      <Paper
        sx={{
          width: '100%',
          height: '600px',
          overflow: 'hidden',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 2,  // Add padding if needed
          borderRadius: 1,  // Optional: add rounded corners
          boxShadow: 3,     // Optional: add shadow effect
        }}
      >
        <iframe
          src="/all_infection_cases_trend not by varient.html"
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
            transform: 'scale(1)',
            transformOrigin: '0 0',
            overflow: 'hidden',
          }}
          title="Total Infection Cases Trend"
        />
      </Paper>
    </Box>
  );
}

export default Home;
