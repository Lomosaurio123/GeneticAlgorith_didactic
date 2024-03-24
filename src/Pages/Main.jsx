import React, { useState } from 'react';
import Select from 'react-select';
import Graphs from '../components/Graphs'

const options = [
  { value: 'Ackley', label: 'Ackley' },
  { value: 'Rosenbrock', label: 'Rosenbrock' },
  { value: 'Salomon', label: 'Salomon' },
  { value: 'Weierstrass', label: 'Weierstrass' }
];

function Main() {
  const [selectedFunction, setSelectedFunction] = useState(options[0]);

  const handleChange = selectedOption => {
    setSelectedFunction(selectedOption);
  };

  return (
    <div className="App">
      <Select
        value={selectedFunction}
        onChange={handleChange}
        options={options}
      />
      <div>
        <Graphs functionName={selectedFunction.value} plotType="3d" />
      </div>
    </div>
  );
}

export default Main;
