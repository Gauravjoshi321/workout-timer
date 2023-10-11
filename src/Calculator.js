import { useCalulator } from './context/calculatorContext';
import { useApp } from './context/AppContext';
import { memo } from 'react';
// import clickSound from './ClickSound.m4a';

function Calculator() {
  const { number, sets, speed, durationBreak, mins, seconds, dispatch } = useCalulator();
  const { workouts } = useApp();

  // const playSound = function () {
  //   if (!allowSound) return;
  //   const sound = new Audio(clickSound);
  //   sound.play();
  // };

  return (
    <>
      <form>
        <div>
          <label>Type of workout</label>
          <select value={number} onChange={(e) => dispatch({ type: "setNumber", payload: +e.target.value })}>
            {workouts.map((workout) => (
              <option value={workout.numExercises} key={workout.name}>
                {workout.name} ({workout.numExercises} exercises)
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>How many sets?</label>
          <input
            type='range'
            min='1'
            max='5'
            value={sets}
            onChange={(e) => dispatch({ type: "setSets", payload: +e.target.value })}
          />
          <span>{sets}</span>
        </div>
        <div>
          <label>How fast are you?</label>
          <input
            type='range'
            min='30'
            max='180'
            step='30'
            value={speed}
            onChange={(e) => dispatch({ type: "setSpeed", payload: +e.target.value })}
          />
          <span>{speed} sec/exercise</span>
        </div>
        <div>
          <label>Break length</label>
          <input
            type='range'
            min='1'
            max='10'
            value={durationBreak}
            onChange={(e) => dispatch({ type: "setDurationBreak", payload: +e.target.value })}
          />
          <span>{durationBreak} minutes/break</span>
        </div>
      </form>

      <section>
        <button onClick={() => { }}>–</button>
        <p>
          {mins < 10 && '0'}
          {mins}:{seconds < 10 && '0'}
          {seconds}
        </p>
        <button onClick={() => { }}>+</button>
      </section>
    </>
  );
}

export default memo(Calculator);
