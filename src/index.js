import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Card from './components/Card';
import data from './data'

// --------------- JS functions ----------------
// const nums = [1, 2, 3, 4, 5];
// const triple = nums.map(function(num){
//   return num *3;
// })

// const names = ["alice", "bob", "charlie", "danielle"]
// const capitalized = names.map((name)=>{
//   return name[0].toUpperCase() + name.slice(1);
// })

// const pokemons = ["Bulbasaur", "Charmander", "Squirtle"]
// const html_like = pokemons.map((pokemon)=>{
//   return "<p>"+pokemon+"</p>";
// })
// console.log(html_like);
const experiences = data.map((exp)=>{
  return(
    <Card
    key={exp.id}
    item={exp}
    // coverImg={exp.coverImg}
    // rating={exp.stats.rating}
    // reviewCount={exp.stats.reviewCount}
    // location={exp.location}
    // title={exp.title}
    // price={exp.price}
    // openSpots={exp.openSpots}
    />
  )
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Hero />
    <section className="cards-list">
      {experiences}
   </section>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
