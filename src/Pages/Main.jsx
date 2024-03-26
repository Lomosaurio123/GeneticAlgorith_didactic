import React, { useState } from 'react';
import Select from 'react-select';
import Graphs from '../components/Graphs';
import Navbar from './Navbar';

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
      <Navbar/>
      <div style={{ display: 'flex', alignItems: 'center', marginLeft: '20px' }}>
        <span style={{ marginRight: '10px' }}>Función:</span>
        <Select
          value={selectedFunction}
          onChange={handleChange}
          options={options}
          className='w-1/6'
        />
      </div>
      
      <div style={{ display: 'flex' }}>
        <div>
          <Graphs functionName={selectedFunction.value} is3D={false} />
        </div>

        <div>
          <Graphs functionName={selectedFunction.value} is3D={true} />
        </div>
      </div>
    </div>
  );
}

export default Main;
