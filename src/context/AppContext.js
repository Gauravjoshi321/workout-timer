import { createContext, useContext, useMemo, useState } from "react";

const AppContext = createContext();

function formatTime(date) {
  return new Intl.DateTimeFormat("en", {
    month: "short",
    year: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).format(date);
}

function AppProvider({ children }) {
  const [allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatTime(new Date()));

  // Will be be AM or PM
  const partOfDay = time.slice(-2);

  const workouts = useMemo(function workouts() {
    return [
      {
        name: "Full-body workout",
        numExercises: partOfDay === "AM" ? 9 : 8,
      },
      {
        name: "Arms + Legs",
        numExercises: 6,
      },
      {
        name: "Arms only",
        numExercises: 3,
      },
      {
        name: "Legs only",
        numExercises: 4,
      },
      {
        name: "Core only",
        numExercises: partOfDay === "AM" ? 5 : 4,
      },
    ]
  }, [partOfDay]);

  const value = useMemo(() => {
    return { workouts, formatTime, allowSound, time, partOfDay, setTime, setAllowSound }
  }, [allowSound, time, partOfDay, workouts])

  return <AppContext.Provider value={value}>
    {children}
  </AppContext.Provider>
}

function useApp() {
  const context = useContext(AppContext);
  return context;
}

export { AppProvider, useApp };