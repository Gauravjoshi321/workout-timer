import { useEffect } from "react";
import Calculator from "./Calculator";
import ToggleSounds from "./ToggleSounds";
import { useApp } from "./context/AppContext";

function App() {
  const { formatTime, allowSound, setAllowSound, time, setTime } = useApp();


  useEffect(function () {
    const id = setInterval(function () {
      setTime(formatTime(new Date()));
    }, 1000);

    return () => clearInterval(id);
  }, [formatTime, setTime]);

  return (
    <main>
      <h1>Workout timer</h1>
      <time>For your workout on {time}</time>
      <ToggleSounds allowSound={allowSound} setAllowSound={setAllowSound} />
      <Calculator />
    </main>
  );
}

export default App;
