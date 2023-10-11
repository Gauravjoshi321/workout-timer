import { useEffect, useState } from "react";
import Calculator from "./Calculator";
import ToggleSounds from "./ToggleSounds";
import { useApp } from "./context/AppContext";

function App() {
  const { workouts, formatTime } = useApp();

  const [allowSound, setAllowSound] = useState(true);
  const [time, setTime] = useState(formatTime(new Date()));


  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, [formatTime]);

  return (
    <main>
      <h1>Workout timer</h1>
      <time>For your workout on {time}</time>
      <ToggleSounds allowSound={allowSound} setAllowSound={setAllowSound} />
      <Calculator workouts={workouts} allowSound={allowSound} />
    </main>
  );
}

export default App;
