
import './App.css';
import React, { useState, useEffect } from 'react';
import Movies from './components/movieList/movieList';
import Starships from './components/starships/starshipList';
import reactDOM from 'react-dom'




function C1button(props){
  const handleclick = event =>{
  const root = reactDOM.createRoot(document.getElementById('root')); 
  root.render(<Starshipspage link={props.link}/>);}

  
  return <div>
   <button className="c1" onClick={handleclick}>Show Starships</button>
   </div>
}

function C2button(){
  const handleclick = () =>{
  const root = reactDOM.createRoot(document.getElementById('root')); 
  root.render(<MoviesPage/>);}

  
  return <div>
   <button className='c2' onClick={handleclick}>Back</button>
   </div>
}


function GetstarshipName(props){

  let [Starship, setStarship] = useState(null)
  const link=props.link
  useEffect(() => {
    async function getStarship() {
      const response1 = await fetch(link)
      const firstJson1 = await response1.json()
      var parsedInfo = JSON.stringify(firstJson1)
      var myArr = JSON.parse(parsedInfo)
      setStarship(myArr["name"])
      

    }
    getStarship();
  },[])

  return(
    <Starships text={Starship}></Starships>
  )
}

function Starshipspage(props){
  let [starshipsLinks, setstarshipsLinks] = useState([])
  var link='https://swapi.dev/api/films/'+props.link
  useEffect(() => {
    async function getStarships() {
      const response1 = await fetch(link)
      const firstJson1 = await response1.json(link)
      var parsedInfo = JSON.stringify(firstJson1)
      var myArr = JSON.parse(parsedInfo)
      setstarshipsLinks(myArr["starships"])
    }
    getStarships();
  },[])

  return(
    <div className='myBody'>
      <div className='middleBox'>
      <div id='title'>
          Starwars Movies
      </div>
      <div id='itemsBox'>   
        <div className='movieNames'>
            <C2button></C2button>
            {starshipsLinks.map(function(startShipObj){
              return <GetstarshipName link={startShipObj}/>

            })}
        </div>
        <div className='infoBox'>Starship Infos</div>
      </div>
    </div>
    </div>
    
  )
  
}


function MoviesPage(props) {

  let [firstMovie, setfirstMovie] = useState(null)
  let [firstMovieId, setfirstMovieId] = useState(null)
  let [firstMovieDate, setfirstMovieDate] = useState(null)

  let [secondMovie, setsecondMovie] = useState(null)
  let [secondMovieId, setsecondMovieId] = useState(null)
  let [secondMovieDate, setsecondMovieDate] = useState(null)

  let [thirdMovie, setthirdMovie] = useState(null)
  let [thirdMovieId, setthirdMovieId] = useState(null)
  let [thirdMovieDate, setthirdMovieDate] = useState(null)

  let [fourthMovie, setfourthMovie] = useState(null)
  let [fourthMovieId, setfourthMovieId] = useState(null)
  let [fourthMovieDate, setfourthMovieDate] = useState(null)

  let [fifthMovie, setfifthMovie] = useState(null)
  let [fifthMovieId, setfifthMovieId] = useState(null)
  let [fifthMovieDate, setfifthMovieDate] = useState(null)

  let [sixthMovie, setsixthMovie] = useState(null)
  let [sixthMovieId, setsixthMovieId] = useState(null)
  let [sixthMovieDate, setsixthMovieDate] = useState(null)

  useEffect(() => {
    async function getMovies() {
      const response1 = await fetch('https://swapi.dev/api/films/1')
      const firstJson1 = await response1.json()
      var parsedInfo = JSON.stringify(firstJson1)
      var myArr = JSON.parse(parsedInfo)
      setfirstMovie(myArr["title"])
      setfirstMovieId(myArr["episode_id"])
      setfirstMovieDate(myArr["release_date"])
      const response2 = await fetch('https://swapi.dev/api/films/2')
      const firstJson2 = await response2.json()
      var parsedInfo = JSON.stringify(firstJson2)
      var myArr = JSON.parse(parsedInfo)
      setsecondMovie(myArr["title"])
      setsecondMovieId(myArr["episode_id"])
      setsecondMovieDate(myArr["release_date"])

      const response3 = await fetch('https://swapi.dev/api/films/3')
      const firstJson3 = await response3.json()
      var parsedInfo = JSON.stringify(firstJson3)
      var myArr = JSON.parse(parsedInfo)
      setthirdMovie(myArr["title"])
      setthirdMovieId(myArr["episode_id"])
      setthirdMovieDate(myArr["release_date"])

      const response4 = await fetch('https://swapi.dev/api/films/4')
      const firstJson4 = await response4.json()
      var parsedInfo = JSON.stringify(firstJson4)
      var myArr = JSON.parse(parsedInfo)
      setfourthMovie(myArr["title"])
      setfourthMovieId(myArr["episode_id"])
      setfourthMovieDate(myArr["release_date"])

      const response5 = await fetch('https://swapi.dev/api/films/5')
      const firstJson5 = await response5.json()
      var parsedInfo = JSON.stringify(firstJson5)
      var myArr = JSON.parse(parsedInfo)
      setfifthMovie(myArr["title"])
      setfifthMovieId(myArr["episode_id"])
      setfifthMovieDate(myArr["release_date"])

      const response6 = await fetch('https://swapi.dev/api/films/6')
      const firstJson6 = await response6.json()
      var parsedInfo = JSON.stringify(firstJson6)
      var myArr = JSON.parse(parsedInfo)
      setsixthMovie(myArr["title"])
      setsixthMovieId(myArr["episode_id"])
      setsixthMovieDate(myArr["release_date"])

    }
    getMovies()
  },[])

  return (
    <div className="myBody">
      <div className='middleBox'>
        <div id='title'>
          Starwars Movies
        </div>
        <div id='itemsBox'>
          <div className='movieNames'>
            <Movies text={firstMovie}></Movies>
            <properties className='properties'>
              <Movies text={firstMovieId}></Movies>
              <div>)---</div>
              <Movies text={firstMovieDate}></Movies>
            </properties>
            <Movies text={secondMovie}></Movies>
            <properties className='properties'>
              <Movies text={secondMovieId}></Movies>
              <div>)---</div>
              <Movies text={secondMovieDate}></Movies>
            </properties>
            <Movies text={thirdMovie}></Movies>
            <properties className='properties'>
              <Movies text={thirdMovieId}></Movies>
              <div>)---</div>
              <Movies text={thirdMovieDate}></Movies>
            </properties>
            <Movies text={fourthMovie}></Movies>
            <properties className='properties'>
              <Movies text={fourthMovieId}></Movies>
              <div>)---</div>
              <Movies text={fourthMovieDate}></Movies>
            </properties>
            <Movies text={fifthMovie}></Movies>
            <properties className='properties'>
              <Movies text={fifthMovieId}></Movies>
              <div>)---</div>
              <Movies text={fifthMovieDate}></Movies>
            </properties>
            <Movies text={sixthMovie}></Movies>
            <properties className='properties'>
              <Movies text={sixthMovieId}></Movies>
              <div>)---</div>
              <Movies text={sixthMovieDate}></Movies>
            </properties>
          </div>
          <div className='movieNames'>
            <C1button link={'1'}></C1button>
            <C1button link={'2'}></C1button>
            <C1button link={'3'}></C1button>
            <C1button link={'4'}></C1button>
            <C1button link={'5'}></C1button>
            <C1button link={'6'}></C1button>
          </div>
          {/*<div className='movieNames'>
            <button className='c2'>Back</button>
            <Starships text='safineha'></Starships>
            <Starships text='safineha'></Starships>
            <Starships text='safineha'></Starships>
</div>
  <div className='infoBox'>jnjjjjlj</div>*/}
        </div>
      </div>
    </div>
  );
}



function App() {
  const root = reactDOM.createRoot(document.getElementById('root')); 
  root.render(<MoviesPage/>);

  return (
     <div className="myBody">
     {    
   MoviesPage()}
   </div>
);
}


export default App;
