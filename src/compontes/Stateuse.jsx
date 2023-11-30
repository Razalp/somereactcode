import React ,{useState} from 'react'
import { Button,Table } from 'react-bootstrap';


const Stateuse = () => {
    const [color,setColor]=useState('Green');
    // const changeColour = ()=>{
    //     setColor('Red')
    // }
    const changeColour = () => {
      // Toggle between 'Green' and 'Red'
      setColor((prevColor) => (prevColor === 'Green' ? 'Red' : 'Green'));
    };

    const [count, setCount] = useState(0);

   const increment=() =>{
    setCount(count + 1)
   }

   const decrement =() =>{
    setCount(count - 1)
   }

  return (
    <div>
        
      <h1>Hello change mycolour by using state {color} </h1>
      <button onClick={changeColour} >Change Red</button>
      
      
        <h1>COUNT IS {count}</h1>
     
      <button className='m-2 bg-danger' onClick={decrement}>
        -
      </button>
      <button className='m-2 bg-success' onClick={increment}>
        +
      </button>
    
    </div>
  )
}

export default Stateuse
