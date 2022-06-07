import React from 'react';
import logo from './logo.svg';
import './App.css';

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string;
let role: [number, string];
let printName: (name:string) => void;

type Person = {
  name: string;
  age: number;
};
let person: Person = {
  name: "Eron",
  age: 33,
}; 


const App: React.FC = () => {
  return (
    <div className="App">
      <span className='heading' >Taskify</span>
    </div>
  );
}

export default App;
