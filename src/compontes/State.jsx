import React from 'react'
const State = ({ states }) => {
    return (
      <div>
        {states.map((state) => (
          <div >
            <h1 className='bg-warning'>State: {state.name}</h1>
            <h4 className='bg-warning'>Language: {state.language}</h4>
            <h4 className='bg-warning'>Population: {state.population}</h4>
          </div>
        ))}
      </div>
    );
  };
  

export default State
