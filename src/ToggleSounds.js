import { memo } from "react";
import { useApp } from "./context/AppContext";

function ToggleSounds() {
  const { allowSound, setAllowSound } = useApp();

  return (
    <button
      className="btn-sound"
      onClick={() => setAllowSound((allow) => !allow)}
    >
      {allowSound ? "🔈" : "🔇"}
    </button>
  );
}

export default memo(ToggleSounds);
