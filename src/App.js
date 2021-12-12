import './styles/App.css';
import { useState } from 'react';
import Level from './pages/level'
import Home from './pages/home'

function App() {
  const largest25 = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Indianapolis','Charlotte','San Francisco','Seattle','Denver','Washington','Nashville','Oklahoma City','El Paso','Boston', 'Portland']
  const largest50 = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Indianapolis','Charlotte','San Francisco','Seattle','Denver','Washington','Nashville','Oklahoma City','El Paso','Boston', 'Portland', 'Las Vegas', 'Detroit', 'Memphis', 'Louisville', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno','Sacramento','Kansas City','Mesa','Atlanta','Omaha','Colorado Springs','Raleigh','Long Beach','Virginia Beach','Miami','Oakland','Minneapolis','Tulsa','Bakersfield','Wichita', 'Arlington']
  const largest100 = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose', 'Austin', 'Jacksonville', 'Fort Worth', 'Columbus', 'Indianapolis','Charlotte','San Francisco','Seattle','Denver','Washington','Nashville','Oklahoma City','El Paso','Boston', 'Portland', 'Las Vegas', 'Detroit', 'Memphis', 'Louisville', 'Baltimore', 'Milwaukee', 'Albuquerque', 'Tucson', 'Fresno','Sacramento','Kansas City','Mesa','Atlanta','Omaha','Colorado Springs','Raleigh','Long Beach','Virginia Beach','Miami','Oakland','Minneapolis','Tulsa','Bakersfield','Wichita', 'Arlington', 'Aurora','Tampa','New Orleans','Cleveland','Honolulu','Anaheim','Lexington KY','Stockton','Corpus Christi','Henderson','Riverside CA','Newark NJ','Saint Paul','Santa Ana','Cincinnati','Irvine','Orlando','Pittsburgh','St. Louis','Greensboro','Jersey City','Anchorage','Lincoln NE','Plano','Durham','Buffalo','Chandler','Chula Vista','Toledo','Madison','Gilbert','Reno','Fort Wayne','North Las Vegas','St. Petersburg','Lubbock','Irving','Laredo','Winston-Salem','Chesapeake','Glendale AZ','Garland','Scottsdale','Norfolk','Boise','Fremont','Spokane','Santa Clarita','Baton Rouge','Richmond']
  const euroLargest35 = ['Istanbul','Moscow','London','Saint Petersburg','Berlin','Madrid','Kyiv','Rome','Bucharest','Paris','Minsk','Vienna','Hamburg','Warsaw','Budapest','Barcelona','Munich','Kharkiv','Milan','Belgrade','Prague','Nizhny Novgorod','Kazan','Sofia','Birmingham','Brussels','Tbilisi','Samara','Ufa','Rostov-on-Don','Cologne','Voronezh','Perm','Volgograd','Odessa']
  const levels = ['USA 25 Largest Cities', 'USA 50 Largest Cities', 'USA 100 Largest Cities','Europe 35 Largest Cities']
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
      setCityOptions(largest50)
    }else if(e === 'USA 100 Largest Cities'){
      setCityOptions(largest100)
    }else if(e === 'Europe 35 Largest Cities'){
      setCityOptions(euroLargest35)
    }
  }

  return (
    <div>
      {isInLevel?<Level cityOptions={cityOptions} cityList={cityList} back={back} startRound={startRound}/>:<Home setGame={setGame} cityOptions={cityOptions} levels={levels} startRound={startRound}/>}
    </div>
  );
}

export default App;
