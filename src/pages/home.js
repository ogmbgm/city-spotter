import '../styles/App.css';
import '../styles/Home.css'
import { useState } from 'react';

export default function Home({startRound, levels, setGame}) {
    const [levelsPointer, setlevelsPointer] = useState(0)
    function changeGame(){
        if(levelsPointer === levels.length-1){
            setGame(levels[0])
            setlevelsPointer(0);
        }else{
            setGame(levels[levelsPointer+1])
            setlevelsPointer(levelsPointer+1);
        }
    }
    return (
        <div id='main-menu-div'>
            <div className="title-div">
                <h1 id="title">City Spotter</h1>
                <div id="start-div">
                    <h2>{levels[levelsPointer]}</h2>
                    <button onClick={startRound}>Play</button>
                    <br/>
                    <button onClick={changeGame}>Change Game</button>
                </div>
            </div>
            <div className="title-div">
                <div className="menu-div">
                    <h2 className="green">Login</h2>
                    <form>
                        <input className="green" placeholder="username" type="text"></input>
                        <input className="green" placeholder="password" type="password"></input>
                    </form>
                </div>
                <div className="menu-div">
                    <h2 className="green">High Scores</h2>
                    <ul>
                        <li className="green"><span>Dave</span>--<span>5000</span></li>
                        <li className="green"><span>John</span>--<span>4000</span></li>
                        <li className="green"><span>Sean</span>--<span>3000</span></li>
                        <li className="green"><span>Ted</span>--<span>2000</span></li>
                        <li className="green"><span>Redmond</span>--<span>1500</span></li>
                        <li className="green"><span>Mike</span>--<span>1000</span></li>
                        <li className="green"><span>Luke</span>--<span>500</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
