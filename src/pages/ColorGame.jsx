import "../styles.css";
import { useState } from "react";
import { ColorBoxList } from "../components/ColorBoxList";

function ColorGame() {
  const [color, setColor] = useState("");
  const [colors, setColors] = useState([]);

  return (
    <div>
      <div className="color-form-container">
        <input
          type="text"
          placeholder="Enter a colour..."
          onChange={(event) => setColor(event.target.value)}
        />
        <button onClick={() => setColors([...colors, color])}>➕ Add</button>
      </div>

      <div className="color-box-list-container">
        <ColorBoxList colors={colors} />
      </div>
    </div>
  );
}

export { ColorGame };
