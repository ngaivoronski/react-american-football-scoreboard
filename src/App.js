//TODO: STEP 1 - Import the useState hook.
import React, {useState, useEffect, useRef} from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const team1 = "Tigers";
  const team2 = "Lions";
  //const team1 = prompt('Please enter the name of Team 1');
  //const team2 = prompt('Please enter the name of Team 2');
  const [time, setTime] = useState(600);

function timer() {
  setTimeout(function() {
    if (time > 0) {
      setTime(time - 1);
    }
    else {
      setTime(0);
    }
    
  }, 1000);
  var minutes = Math.floor(time/60);
  if (minutes < 10) {
    minutes = '0'+minutes;
  }
  var seconds = Math.round(time%60);
  if (seconds < 10) {
    seconds = '0'+seconds;
  }
  if (seconds > 0 || minutes > 0) {
    var clock = minutes + ":" + seconds;
  } else {
    var clock = 'GAME OVER';
  }
  
  return clock;
}

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">{team1}</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">{timer()}</div>
          <div className="away">
            <h2 className="away__name">{team2}</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow down={down} toGo = {toGo} ballOn={ballOn} quarter={quarter}/>
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button onClick={() => setHomeScore(homeScore + 7)} className="homeButtons__touchdown">Home Touchdown</button>
          <button onClick={() => setHomeScore(homeScore + 3)} className="homeButtons__fieldGoal">Home Field Goal</button>
          
        </div>
        <div className="awayButtons">
          <button onClick={() => setAwayScore(awayScore + 7)} className="awayButtons__touchdown">Away Touchdown</button>
          <button onClick={() => setAwayScore(awayScore + 3)} className="awayButtons__fieldGoal">Away Field Goal</button>
        </div>
      </section>
      <section className="buttons">
        <button onClick={() => setDown(down + 1)} className="homeButtons__fieldGoal">Pass</button>
        <button onClick={() => setDown(1)} className="homeButtons__fieldGoal">Reset Down</button>
        <button onClick={() => setToGo(toGo - 1)} className="homeButtons__fieldGoal">Less Yards to First</button>
        <button onClick={() => setToGo(10)} className="homeButtons__fieldGoal">Reset To Go</button>
        <button onClick={() => setBallOn(ballOn + 5)} className="homeButtons__fieldGoal">Add 5 Yards to Ball</button>
        <button onClick={() => setBallOn(0)} className="homeButtons__fieldGoal">Reset Ball</button>
        <button onClick={() => setQuarter(quarter + 1)} className="homeButtons__fieldGoal">Next Quarter</button>
      </section>
      
    </div>
  );
}

export default App;
