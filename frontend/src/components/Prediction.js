// import React, { useState } from 'react';
// import axios from 'axios';

// function Prediction() {
//   const [virusName, setVirusName] = useState('Alpha');
//   const [totalPopulation, setTotalPopulation] = useState('');
//   const [currentInfected, setCurrentInfected] = useState('');
//   const [vaccinated, setVaccinated] = useState('');
//   const [result, setResult] = useState(null);
//   const [chartUrls, setChartUrls] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://127.0.0.1:5000/api/predict-and-generate-chart', {
//         virus_name: virusName,
//         total_population: totalPopulation,
//         current_infected: currentInfected,
//         vaccinated: vaccinated
//       });
//       setResult(response.data.prediction_result);
//       setChartUrls(response.data.chart_urls);
//     } catch (error) {
//       console.error('There was an error!', error);
//     }
//   };

//   return (
//     <div className="prediction">
//       <h2>Prediction</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Virus Name:
//           <select value={virusName} onChange={(e) => setVirusName(e.target.value)}>
//             <option value="Alpha">Alpha</option>
//             <option value="Delta">Delta</option>
//             <option value="Omicron">Omicron</option>
//           </select>
//         </label>
//         <label>
//           Total Population:
//           <input type="number" value={totalPopulation} onChange={(e) => setTotalPopulation(e.target.value)} required />
//         </label>
//         <label>
//           Current Infected:
//           <input type="number" value={currentInfected} onChange={(e) => setCurrentInfected(e.target.value)} required />
//         </label>
//         <label>
//           Vaccinated:
//           <input type="number" value={vaccinated} onChange={(e) => setVaccinated(e.target.value)} required />
//         </label>
//         <button type="submit">Predict</button>
//       </form>
//       {result && (
//         <div>
//           <h3>Prediction Result</h3>
//           <p>Virus Name: {result.virus_name}</p>
//           <p>Total Population: {result.total_population}</p>
//           <p>Current Infected: {result.current_infected}</p>
//           <p>Vaccinated: {result.vaccinated}</p>
//           <p>Six Month Infected: {result.six_month_infected}</p>
//           <p>Peak Infected: {result.peak_infected}</p>
//           <p>Peak Infected Day: {result.peak_infected_day}</p>
//         </div>
//       )}
//       {chartUrls && (
//         <div>
//           <h3>Charts</h3>
//           <a href={`http://127.0.0.1:5000/${chartUrls.six_months}`} target="_blank" rel="noopener noreferrer">Six Months Chart</a>
//           <br />
//           <a href={`http://127.0.0.1:5000/${chartUrls.daily_new_infections}`} target="_blank" rel="noopener noreferrer">Daily New Infections Chart</a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Prediction;

import React, { useState } from 'react';
import { Box, TextField, MenuItem, Button, Paper } from '@mui/material';
import axios from 'axios';

function Dashboard() {
    const [virus_name, setVirusName] = useState('');
    const [total_population, setTotalPopulation] = useState('');
    const [current_infected, setCurrentInfected] = useState('');
    const [vaccinated, setVaccinated] = useState('');

    const handleSubmit = async () => {
        const postData = {
            virus_name,
            total_population,
            current_infected,
            vaccinated
        };
        try {
            const response = await axios.post('http://127.0.0.1:5000/api/predict-and-generate-chart', postData);
            console.log(response.data); // 处理响应数据
        } catch (error) {
            console.error('Error posting data:', error); // 处理错误
        }
    };

    return (
        <Box sx={{ display: 'flex', height: '100vh', p: 2 }}>
            {/* Input Area and Chart Area are siblings */}
            <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                <Paper sx={{ p: 2, boxShadow: 3, flexGrow: 1 }}>
                    {/* Inputs and Button in vertical layout */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                        <TextField
                            select
                            label="Select Option"
                            value={virus_name}
                            onChange={(e) => setVirusName(e.target.value)}
                            fullWidth
                        >
                            <MenuItem value="Omicron">Omicron</MenuItem>
                            <MenuItem value="Alpha">Alpha</MenuItem>
                            <MenuItem value="Delta">Delta</MenuItem>
                        </TextField>
                        <TextField
                            label="Total Population"
                            value={total_population}
                            onChange={(e) => setTotalPopulation(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Current Infected"
                            value={current_infected}
                            onChange={(e) => setCurrentInfected(e.target.value)}
                            fullWidth
                        />
                        <TextField
                            label="Vaccinated"
                            value={vaccinated}
                            onChange={(e) => setVaccinated(e.target.value)}
                            fullWidth
                        />
                        <Button onClick={handleSubmit} variant="contained" fullWidth>Submit</Button>
                    </Box>
                </Paper>
                {/* Chart 1 Placeholder */}
                <Paper sx={{ flexGrow: 1, bgcolor: 'lightgrey', p: 2 }}>Chart 1 Placeholder</Paper>
            </Box>
            {/* Chart Areas */}
            <Box sx={{ width: '50%', display: 'flex', flexDirection: 'column' }}>
                <Paper sx={{ flexGrow: 1, bgcolor: 'lightgrey', p: 2 }}>Chart 2 Placeholder</Paper>
                <Paper sx={{ flexGrow: 1, bgcolor: 'lightgrey', p: 2 }}>Chart 3 Placeholder</Paper>
            </Box>
        </Box>
    );
}

export default Dashboard;
