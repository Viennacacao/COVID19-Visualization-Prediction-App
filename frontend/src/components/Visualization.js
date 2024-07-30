import React, { useState } from 'react';
import { Typography, Paper, Button, Box } from '@mui/material';

function Visualization() {
  // Define the URLs for different HTML files
  const htmlUrls = {
    variant1: '/omicron_trend.html',
    variant2: '/alpha_trend.html',
    variant3: '/delta_trend.html'
  };

  // State to manage the current HTML content
  const [selectedHtml, setSelectedHtml] = useState(htmlUrls.variant1);
  const [activeButton, setActiveButton] = useState('variant1');

  return (
    <Paper 
      sx={{ 
        p: 2, 
        margin: 'auto', 
        maxWidth: '100%', 
        flexGrow: 1, 
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        height: '100%',  // Ensure the paper takes up the full viewport height
        overflow: 'hidden'  // Hide any overflow
      }}
    >
      {/* Buttons to select different HTML content */}
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: 2,
          mb: 2
        }}
      >
        <Button 
          variant="contained" 
          onClick={() => {
            setSelectedHtml(htmlUrls.variant1);
            setActiveButton('variant1');
          }}
          sx={{ 
            backgroundColor: activeButton === 'variant1' ? 'primary.main' : 'grey.500',
            '&:hover': {
              backgroundColor: activeButton === 'variant1' ? 'primary.dark' : 'grey.700',
            }
          }}
        >
          Omicron
        </Button>
        <Button 
          variant="contained" 
          onClick={() => {
            setSelectedHtml(htmlUrls.variant2);
            setActiveButton('variant2');
          }}
          sx={{ 
            backgroundColor: activeButton === 'variant2' ? 'primary.main' : 'grey.500',
            '&:hover': {
              backgroundColor: activeButton === 'variant2' ? 'primary.dark' : 'grey.700',
            }
          }}
        >
          Alpha
        </Button>
        <Button 
          variant="contained" 
          onClick={() => {
            setSelectedHtml(htmlUrls.variant3);
            setActiveButton('variant3');
          }}
          sx={{ 
            backgroundColor: activeButton === 'variant3' ? 'primary.main' : 'grey.500',
            '&:hover': {
              backgroundColor: activeButton === 'variant3' ? 'primary.dark' : 'grey.700',
            }
          }}
        >
          Delta
        </Button>
      </Box>
      
      {/* Display the selected HTML content */}
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'row',  // Arrange the first two Paper components in a row
          width: '100%',
          gap: 2,
          mb: 2,
          height: '500px',
          overflow: 'hidden', // Hide overflow from scaling
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
            p: 2,  // Add padding if needed
            borderRadius: 1,  // Optional: add rounded corners
            boxShadow: 3,     // Optional: add shadow effect
          }}
        >
          <iframe
            src={selectedHtml}
            style={{ 
              width: '800px',  // Adjust width to 600px
              height: '500px',
              border: 'none',
              transform: 'scale(1)', // Scale down to 80%
              transformOrigin: '0 0',  // Scale from the top-left corner
              overflow: 'hidden'       // Hide overflow from scaling
            }} 
            title="Selected Variant Trend"
          />
        </Paper>

        <Paper
          sx={{
            width: '50%',
            height: '100%',
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
            src="/variant_cases_pie_chart.html"
            style={{ 
              width: '100%', 
              height: '100%', 
              border: 'none',
              transform: 'scale(1)', // Scale down to 80%
              transformOrigin: '0 0',  // Scale from the top-left corner
              overflow: 'hidden'       // Hide overflow from scaling
            }} 
          />
        </Paper>
      </Box>

      {/* Third HTML content */}
      <Paper
        sx={{
          width: '100%',
          height: '500px',
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
          src="/Bar chart.html"
          style={{ 
            width: '100%', 
            height: '100%', 
            border: 'none',
            transform: 'scale(1)', // Scale down to 80%
            transformOrigin: '0 0',  // Scale from the top-left corner
            overflow: 'hidden'       // Hide overflow from scaling
          }} 
        />
      </Paper>
    </Paper>
  );
}

export default Visualization;
