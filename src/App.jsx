import { puppyList } from './data.js'
import { useState } from 'react'
import './App.css'



function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFEatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId);
  console.log(featuredPup);

  return (
    <>
    <div>
      <h1 className='title'>Puppy Pals</h1>
    </div>
    <div className="App">
      {
        puppies.map((puppy) => {
             return <p onClick={() => {setFEatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
           })
          }
          <p>{featPupId}</p>
          {featPupId && (
          <div className='box'>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
          </div>
          )}
    </div>
    </>
  );
}



export default App








