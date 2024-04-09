import './App.css';
import { useState } from 'react';
import AnimalShow from './AnimalShow';

const animalArr = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];

function getRandomAnimal() {
  const choice = Math.floor(Math.random() * animalArr.length);
  const nextAnimal = animalArr.splice(choice, 1);
  return nextAnimal;
}

function App() {
  if (!animalArr[0]) document.querySelector('button').disabled = true;
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} /> 
  });

  return (
    <div className="app">
      <button onClick={handleClick}>Add Animal</button>
      <div className="animal-list">{renderedAnimals}</div>
    </div>
  );
}

export default App;