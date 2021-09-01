import './styles/App.css';
import { useState } from 'react';
import Level from './pages/level'
import Home from './pages/home'

function App() {
  const largest25 = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Indianapolis','Charlotte','San Francisco','Seattle','Denver','Washington','Nashville','Oklahoma City','El Paso','Boston', 'Portland']
  const largest50 = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Indianapolis','Charlotte','San Francisco','Seattle','Denver','Washington','Nashville','Oklahoma City','El Paso','Boston', 'Portland', 'Las Vegas', 'Detroit', 'Memphis', 'Louisville', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno','Sacramento','Kansas City','Mesa','Atlanta','Omaha','Colorado Springs','Raleigh','Long Beach','Virginia Beach','Miami','Oakland','Minneapolis','Tulsa','Bakersfield','Wichita', 'Arlington']
  const levels = ['USA 25 Largest Cities', 'USA 50 Largest Cities']
  const [cityList, setCityList] = useState([])
  const [isInLevel, setIsInLevel] = useState(false)
  const [cityOptions, setCityOptions] = useState(largest25)

  function startRound(){
    let i = 0
    let out = []
    console.log(cityOptions)
    while(i<10){
      let tmp = cityOptions[Math.floor(Math.random() * cityOptions.length)]
      if(!out.includes(tmp)){
        out.push(tmp)
        i++
      }
    }
    setCityList(out)
    setIsInLevel(true)
  }

  function back(){
    setIsInLevel(false)
  }

  function setGame(e){
    if(e === 'USA 25 Largest Cities'){
      setCityOptions(largest25)
    }else if(e === 'USA 50 Largest Cities'){
      console.log(111)
      setCityOptions(largest50)
    }
  }

  return (
    <div>
      {isInLevel?<Level cityOptions={cityOptions} cityList={cityList} back={back} startRound={startRound}/>:<Home setGame={setGame} cityOptions={cityOptions} levels={levels} startRound={startRound}/>}
    </div>
  );
}

export default App;
