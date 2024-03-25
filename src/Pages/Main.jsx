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
        className='w-1/3'
      />
      
      <div>
        <Graphs functionName={selectedFunction.value} is3D={true} />
      </div>

      <div>
        <Graphs functionName={selectedFunction.value} is3D={false} />
      </div>

    </div>
  );
}

export default Main;
