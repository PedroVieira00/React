import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const playerName = useRef();

  function handleClick() {
    setEnteredPlayerName(playerName.current.value);
  }

  return (
    <section id="player">
      {/* ?? means that if the element before is truthy (not null), it 
      just prints it, if not, it prints the element after. */}
      <h2> Welcome {enteredPlayerName ?? "unknown entity"} </h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
