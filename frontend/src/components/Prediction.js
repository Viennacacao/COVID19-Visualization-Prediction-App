import React, { useState } from 'react';
import axios from 'axios';

function Prediction() {
  const [virusName, setVirusName] = useState('Alpha');
  const [totalPopulation, setTotalPopulation] = useState('');
  const [currentInfected, setCurrentInfected] = useState('');
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
        vaccinated: vaccinated
      });
      setResult(response.data.prediction_result);
      setChartUrls(response.data.chart_urls);
    } catch (error) {
      console.error('There was an error!', error);
    }
  };

  return (
    <div className="prediction">
      <h2>Prediction</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Virus Name:
          <select value={virusName} onChange={(e) => setVirusName(e.target.value)}>
            <option value="Alpha">Alpha</option>
            <option value="Delta">Delta</option>
            <option value="Omicron">Omicron</option>
          </select>
        </label>
        <label>
          Total Population:
          <input type="number" value={totalPopulation} onChange={(e) => setTotalPopulation(e.target.value)} required />
        </label>
        <label>
          Current Infected:
          <input type="number" value={currentInfected} onChange={(e) => setCurrentInfected(e.target.value)} required />
        </label>
        <label>
          Vaccinated:
          <input type="number" value={vaccinated} onChange={(e) => setVaccinated(e.target.value)} required />
        </label>
        <button type="submit">Predict</button>
      </form>
      {result && (
        <div>
          <h3>Prediction Result</h3>
          <p>Virus Name: {result.virus_name}</p>
          <p>Total Population: {result.total_population}</p>
          <p>Current Infected: {result.current_infected}</p>
          <p>Vaccinated: {result.vaccinated}</p>
          <p>Six Month Infected: {result.six_month_infected}</p>
          <p>Peak Infected: {result.peak_infected}</p>
          <p>Peak Infected Day: {result.peak_infected_day}</p>
        </div>
      )}
      {chartUrls && (
        <div>
          <h3>Charts</h3>
          <a href={`http://127.0.0.1:5000/${chartUrls.six_months}`} target="_blank" rel="noopener noreferrer">Six Months Chart</a>
          <br />
          <a href={`http://127.0.0.1:5000/${chartUrls.daily_new_infections}`} target="_blank" rel="noopener noreferrer">Daily New Infections Chart</a>
        </div>
      )}
    </div>
  );
}

export default Prediction;
