import { createContext, useContext, useMemo, useReducer } from "react";

const CalculatorContext = createContext();

const reducer = function (state, action) {
  switch (action.type) {
    case "setNumber": {
      return { ...state, number: action.payload }
    }
    case "setSets": {
      return { ...state, sets: action.payload }
    }
    case "setSpeed": {
      return { ...state, speed: action.payload }
    }
    case "setDurationBreak": {
      return { ...state, durationBreak: action.payload }
    }
    default: throw new Error("Unknown Action")
  }
}

function CalculatorProvider({ children }) {
  const initialState = {
    // number: workouts.at(0).numExercises,
    number: 0,
    sets: 3,
    speed: 90,
    durationBreak: 5
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  const { number, sets, speed, durationBreak } = state;


  const duration = (number * sets * speed) / 60 + (sets - 1) * durationBreak;
  const mins = Math.floor(duration);
  const seconds = (duration - mins) * 60;

  const value = useMemo(() => {
    return {
      number,
      sets,
      speed,
      durationBreak,
      dispatch,
      duration,
      mins,
      seconds
    }
  }, [number, sets, speed, durationBreak, duration, mins, seconds])


  return <CalculatorContext.Provider value={value}>
    {children}
  </CalculatorContext.Provider>
}

function useCalulator() {
  const context = useContext(CalculatorContext);
  return context;
}

export { CalculatorProvider, useCalulator };