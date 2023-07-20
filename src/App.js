
import { useMemo, useState } from 'react';
import './App.css';

const fruits = [
  {id: '1', item: 'Peach'},
    {id: '2', item: 'Apple'},
      {id: '3', item: 'Banana'},
        {id: '4', item: 'Pineapple'},
          {id: '5', item: 'Plum'},
]

function App() {

  const [text, setText] = useState('');
  const [search, setSearch] = useState('')

 const handleText=(e)=>{
setText(e.target.value);
console.log(e.target.value)
 }
 const handleClick=()=>{
setSearch(text)
 }

 //If we keep the logic this way, 
 //all the elements are rendering with every letter typed(not the word)
 //so we will rewrite this piece of code with useMemo

//useMemo is used to optimize the productivity of our app

/* const filteredFruits = fruits.filter((fruit)=>{
  return fruit.item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
 })*/


 const filteredFruits = useMemo (()=> fruits.filter((fruit)=>{
  console.log('FILTERING!!!')
  return fruit.item.toLocaleLowerCase().includes(search.toLocaleLowerCase())
 }), [search])//put dependency here

  return (
    <div className="App">
     <h1>Filtering</h1>
     <input type='text' onChange={handleText}></input>
     <button type='button' onClick={handleClick}>Search</button>
     <div>
      {filteredFruits.map((filteredFruit)=>(
 <p key={filteredFruit.id}>{filteredFruit.item}</p>
      ))}
     
     </div>
    </div>
  );
}

export default App;
