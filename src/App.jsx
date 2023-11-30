import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './compontes/Header'
import Foot from './compontes/Foot'
import Stateuse from './compontes/Stateuse'
import 'bootstrap/dist/css/bootstrap.min.css';
import State from './compontes/State';


import Keys from './keys/Keys';
function App() {
  const states = [
    { name: 'Kerala', language: 'Malayalam', population: 1.5 },
    { name: 'Maharashtra', language: 'Marathi', population: 12.4 },
    { name: 'Tamil Nadu', language: 'Tamil', population: 7.8 },
    { name: 'Uttar Pradesh', language: 'Hindi', population: 23.4 },
    { name: 'Gujarat', language: 'Gujarati', population: 6.3 },
    { name: 'West Bengal', language: 'Bengali', population: 9.0 },
    // Add more states as needed
  ];

    let number = 0;
    const checkNumber = () => {
      if (number > 0) {
        return <h1>Positive number</h1>;
      } else if (number < 0) {
        return <h1>Negative number</h1>;
      } else {
        return <h1>Number is zero</h1>;
      }
    };

    const [posts,setPosts]=useState([])

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(posts => setPosts(posts.splice(0,10)))
    }, [])
    
    return (
      <div>
        <div>
          <h1>Fetch API DATA</h1>
          {posts.map((post) => (
            <h1 key={post.id}>{post.title}</h1>
          ))}
        </div>


        <br />
        <br />
        <br />
        <br />
      <div>
  {checkNumber()}
  {/* rest of your JSX */}
</div>
<Keys/>
          {/* props */}
          <h1>States</h1>
          <State states={states}/>
          {/* props */}
        {/* <State name={'kerala'}  language={'Malayalam'}  population={'1.5'} />
       
        <State name={'Tamilnad'} language={'tamil'}  population={'2.5'}/>
        <State name={'Karnatka'} language={'karnataka'}  population={'3.5'}/> */}
       
        <br />
        <br />
        <Stateuse></Stateuse>
        <Header></Header>
       <h1>AM RAZAL </h1>
       <Foot></Foot>
       <div>
      
       </div>
    </div>
  )
}

export default App
