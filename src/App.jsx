import "./App.css";
import { useState } from "react";
import Polygon from "./components/Polygon";
import Option from "./components/Option";
import Slider from "./components/Slider";
import Color from "./components/Color";

function App() {

  const randomShape = () => {
    const shapes = ["square", "hexagon", "octagon"];
    const randomIndex = Math.floor(Math.random() * shapes.length);
    return shapes[randomIndex];
  };

  const [shape, setShape] = useState(randomShape());
  const [shapeAmount, setShapeAmount] = useState(Math.floor(Math.random() * 15) + 1);
  const [opacity, setOpacity] = useState(Math.floor(Math.random() * 100));
  const [primaryColor, setPrimaryColor] = useState("#" + Math.floor(Math.random() * 16777215).toString(16));
  const [secondaryColor, setSecondaryColor] = useState("#" + Math.floor(Math.random() * 16777215).toString(16));
  const [outlines, setOutlines] = useState(false);
  const [multicolor, setMulticolor] = useState(Math.random() < 0.5);
  const [lightTheme, setLightTheme] = useState(false);

  return (
    <div className="App" style={lightTheme ? { backgroundColor: `#fefefe` } : { backgroundColor: `#151515` }}>
      <Polygon shape={shape} shapeAmount={shapeAmount} primaryColor={primaryColor} secondaryColor={secondaryColor} opacity={opacity} outlines={outlines} multicolor={multicolor} />
      <div className="controls">
        <Option label="Shape" value={shape} onValueChange={(v) => setShape(v)} />
        <Slider label="Shape amount" value={shapeAmount} min={1} max={15} onValueChange={(v) => setShapeAmount(v)} />
        <Slider label="Opacity" value={opacity} min={0} max={100} onValueChange={(v) => setOpacity(v)} />
        <div className="controls__group">
          <Color label="Color 1" value={primaryColor} onValueChange={(v) => setPrimaryColor(v)} />
          <Color label="Color 2" value={secondaryColor} onValueChange={(v) => setSecondaryColor(v)} />
        </div>
        <button className="toggle__button" onClick={() => setOutlines(!outlines)}>Toggle outlines</button>
        <button className="toggle__button" onClick={() => setMulticolor(!multicolor)}>{multicolor ? "Merge shape" : "Split shape"}</button>
        <button className="toggle__button" onClick={() => setLightTheme(!lightTheme)}>{lightTheme ? "Dark theme" : "Light theme"}</button>
        <button className="random__button" onClick={() => location.reload()}>Randomize</button>
      </div>
    </div>
  );
}

export default App;
