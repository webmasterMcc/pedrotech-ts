import { useState } from 'react'
import Person from './components/Person';
import './App.css'
import Curso from './components/jsonJs/curso';
import DataFetching from './components/DataFetching';

const  title:string = "pedro Tech demo";
const  age:number = 43;
const  isActive:boolean = true;
const  ages:number[] = [1,2,3,4,5,6,7,8,9,10] ;

function App() {
  const [count, setCount] = useState(0) ;
 

  return (
    <>
    {/* marke first letters uppercase title title.charAt(0).toUpperCase() + title.slice(1) */}
      <h1>{title.charAt(0).toUpperCase() + title.slice(1)}</h1>
      {
      isActive ? 
       <button onClick={() => setCount((count) => count + 1)}>
       Clicked {count} times
     </button>
     : null
     }
     <Person name={"pedro"} age={43} isMarried={false} />
     <Curso />
     <DataFetching />
    </>
  )
}

export default App
