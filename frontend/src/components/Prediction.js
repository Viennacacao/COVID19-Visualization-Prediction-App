import React, { useState } from 'react';
import axios from 'axios';
import { Box, TextField, MenuItem, Button, Paper, Typography } from '@mui/material';

function Prediction() {
  const [virusName, setVirusName] = useState('Alpha');
  const [totalPopulation, setTotalPopulation] = useState('');
  const [currentInfected, setCurrentInfected] = useState('');
  const [recovered, setRecovered] = useState('');
  const [vaccinated, setVaccinated] = useState('');
  const [result, setResult] = useState(null);
  const [chartUrls, setChartUrls] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/predict-and-generate-chart', {
        virus_name: virusName,
        total_population: totalPopulation,
        current_infected: currentInfected,
        recovered: recovered,
        vaccinated: vaccinated
      });
      setResult(response.data.prediction_result);
      setChartUrls(response.data.chart_urls);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', p: 2 }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Box sx={{ height: '400px', width: '200px', display: 'flex', flexDirection: 'column' }}>
          <Paper sx={{ p: 2, boxShadow: 3, flexGrow: 1 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                select
                label="Virus Name"
                value={virusName}
                onChange={(e) => setVirusName(e.target.value)}
                fullWidth
              >
                <MenuItem value="Omicron">Omicron</MenuItem>
                <MenuItem value="Alpha">Alpha</MenuItem>
                <MenuItem value="Delta">Delta</MenuItem>
              </TextField>
              <TextField
                label="Total Population"
                value={totalPopulation}
                onChange={(e) => setTotalPopulation(e.target.value)}
                fullWidth
              />
              <TextField
                label="Current Infected"
                value={currentInfected}
                onChange={(e) => setCurrentInfected(e.target.value)}
                fullWidth
              />
              <TextField
                label="Current Recovered"
                value={recovered}
                onChange={(e) => setRecovered(e.target.value)}
                fullWidth
              />
              <TextField
                label="Vaccinated"
                value={vaccinated}
                onChange={(e) => setVaccinated(e.target.value)}
                fullWidth
              />
              <Button onClick={handleSubmit} variant="contained" fullWidth>Prediction</Button>
            </Box>
          </Paper>
        </Box>
        {chartUrls && (
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, ml: 2 }}>
            <Paper sx={{ width: '500px', height: '400px', p: 2 }}>
              <iframe
                src={`http://127.0.0.1:5000/${chartUrls.six_months}`}
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Six Months Chart"
              />
            </Paper>
            <Paper sx={{ width: '500px', height: '400px', p: 2 }}>
              <iframe
                src={`http://127.0.0.1:5000/${chartUrls.daily_new_infections}`}
                style={{ width: '100%', height: '100%', border: 'none' }}
                title="Daily New Infections Chart"
              />
            </Paper>
          </Box>
        )}
      </Box>
      {result && (
        <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mt: 2 }}>
          <Paper sx={{ p: 2, boxShadow: 3, flexGrow: 1, bgcolor: '#f0f8ff' }}>
            <Typography variant="h6" color="primary">Peak Infected:</Typography>
            <Typography variant="body1">{result.peak_infected}</Typography>
          </Paper>
          <Paper sx={{ p: 2, boxShadow: 3, flexGrow: 1, bgcolor: '#e6e6fa' }}>
            <Typography variant="h6" color="secondary">Peak Infected Day:</Typography>
            <Typography variant="body1">{result.peak_infected_day}</Typography>
          </Paper>
          <Paper sx={{ p: 2, boxShadow: 3, flexGrow: 1, bgcolor: '#f5f5dc' }}>
            <Typography variant="h6" color="primary">Six Month Infected:</Typography>
            <Typography variant="body1">{result.six_month_infected}</Typography>
          </Paper>
        </Box>
      )}
    </Box>
  );
}

export default Prediction;
