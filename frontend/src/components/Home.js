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
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          mb: 2,
        }}
      >
        <Paper
          sx={{
            width: '800px',  // Adjust width to 600px
            height: '500px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
            borderRadius: 1,
            boxShadow: 3,
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
            width: '500px',  // Adjust width to 400px
            height: '500px',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 2,
            borderRadius: 1,
            boxShadow: 3,
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
          p: 2,
          borderRadius: 1,
          boxShadow: 3,
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
