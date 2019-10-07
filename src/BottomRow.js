import React, {useState} from "react";
import "./App.css";



const BottomRow = () => {
  const [down, setDown] = useState(1);
  const [toGo, setToGo] = useState(10);
  const [ballOn, setBallOn] = useState(0);
  const [quarter, setQuarter] = useState(1);
  return (
    <>
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">{toGo}</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">{ballOn}</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
      </div>
    </div>
    <button onClick={() => setDown(down + 1)} className="homeButtons__fieldGoal">Pass</button>
    <button onClick={() => setDown(1)} className="homeButtons__fieldGoal">Reset Down</button>
    <button onClick={() => setToGo(toGo - 1)} className="homeButtons__fieldGoal">Less Yards to First</button>
    <button onClick={() => setToGo(10)} className="homeButtons__fieldGoal">Reset To Go</button>
    <button onClick={() => setBallOn(ballOn + 5)} className="homeButtons__fieldGoal">Add 5 Yards to Ball</button>
    <button onClick={() => setBallOn(0)} className="homeButtons__fieldGoal">Reset Ball</button>
    <button onClick={() => setQuarter(quarter + 1)} className="homeButtons__fieldGoal">Next Quarter</button>
    </>
  );
};

export default BottomRow;
