import { ColorBox } from "./ColorBox";

function ColorBoxList({ colors }) {
  return (
    <>
      {colors.map((color) => (
        <ColorBox color={color} />
      ))}
    </>
  );
}

export { ColorBoxList };
