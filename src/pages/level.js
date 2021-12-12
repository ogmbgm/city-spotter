import '../styles/App.css';
import '../styles/Level.css';
import {useState, useEffect} from 'react';
import Confetti from 'react-dom-confetti';
import hints from "./hints.json"

export default function Level({cityOptions, cityList, back, startRound}) {
  const [cities, setCities] = useState([])
  const [currentCity, setCurrentCity] = useState("")
  const [currentZoom, setCurrentZoom] = useState(0)
  const [cityPointer, setCityPointer] = useState(0)
  const [score, setScore] = useState(500)
  const [totalScore, setTotalScore] = useState(0)
  const [isInLevel, setIsInLevel] = useState(true)
  const [cActive, setCActive] = useState(false)
  const [showHint, setShowHint] = useState(false)
  const [hintType, setHintType] = useState("")

  useEffect(() => {
    chooseCity()
    // eslint-disable-next-line
  }, [])

  function shuffle(array) {
    var currentIndex = array.length,  randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  
  function chooseCity(){
    console.log(cityPointer)
    let city = cityList[cityPointer]
    setCurrentCity(city)
    setCityPointer(cityPointer+1)

    let out = [city]
    let i = 0
    while(i<7){
      let tmp = cityOptions[Math.floor(Math.random() * cityOptions.length)]
      if(!out.includes(tmp)){
        out.push(tmp)
        i++
      }
    }
    setCities(shuffle(out))
  }

  function onBtnClick(e,i){
    if(e===currentCity){
      document.getElementById(i).className = "light-green";
      setCActive(true)
      setShowHint(false)
      setTimeout(() => {
        document.getElementById(i).className = "";
        setCurrentZoom(0)
        chooseCity()
        setTotalScore(totalScore+score)
        setScore(500)
        i=0
        while(i<8){
          document.getElementById(i).disabled = false;
          i++
        }
        setCActive(false)
        if(cityPointer === 10){
            setIsInLevel(false)
            return
        }
      }, 1000);
    }else{
      document.getElementById(i).disabled = true;
      setScore(score-100)
    }
  }

  const confettiConfig = {
    angle: 90,
    spread:  90,
    startVelocity: 50,
    elementCount: 50,
    dragFriction: 0.3,
    duration: 2000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "63vh",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };
  function showHintLandmark(){
    setShowHint(true)
    setHintType('landmark')
    setScore(score-200)
  }

  function showHintSkyline(){
    setShowHint(true)
    setHintType('skyline')
    setScore(score-200)
  }

  function restart(){
    setCurrentCity("")
    setCurrentZoom(0)
    setCityPointer(0)
    setScore(500)
    setTotalScore(0)
    setShowHint(false)
    setTimeout(() => {
      // chooseCity()
    }, 500);
  }

  return (
    <div>
    {isInLevel? 
    <div id='main-level-div'>
        <div>
          <div id='status-div'>
            <h3>{cityPointer}/10</h3>
            <h3 className="float-end">Score: {score}</h3>
          </div>
          <img src={process.env.PUBLIC_URL + "/Cities/"+currentCity+"/"+currentCity+currentZoom+".png"} className="" alt="..."/>
          <div id="zoom-div">
            <button onClick={()=>{if(currentZoom > -2){setCurrentZoom(currentZoom-1); setScore(score-50)}}}>Zoom Out</button>
            <h4 id="zoom-display">Zoom: {currentZoom}</h4>
            <button onClick={()=>{if(currentZoom < 2){setCurrentZoom(currentZoom+1); setScore(score-50)}}}>Zoom In</button>
          </div>
        </div>
        <div id="cities-div">
          {cities.map((e,i)=><button id={i} className="" key={i} onClick={()=>onBtnClick(e,i)} disabled={false}>{e}{e===currentCity?<Confetti className="confetti" active={cActive} config={confettiConfig}/>:<></>}</button>)}
        </div>
        <div id="options-div">
          <div>
            <h2>Total Score: {totalScore}</h2>
            <div id="hint-div">
              <button onClick={showHintLandmark}>Landmark Hint</button>
              <button onClick={showHintSkyline}>Skyline Hint</button>
            </div>
          </div>
          {/* process.env.PUBLIC_URL + "/Cities/"+currentCity+"/"+currentCity+hintType+".png" */}
          {showHint?<img src={hints[currentCity][hintType]} id="hint" alt="..."/>:<></>}
          <div id="endgame-div">
            <button onClick={back}>Main Menu</button>
            <button onClick={restart}>Restart</button>
          </div>
        </div>
        </div>
      :<div id="level-end-div">
        <h1>Round Over</h1>
        <h2>Score: {totalScore}/5000</h2>
        {/* <button className="btn btn-primary" onClick={()=>{setIsInLevel(true); startRound()}}>Play Again</button> */}
        <br/>
        <button onClick={back}>Main Menu</button>
      </div>}
    </div>
  );
}