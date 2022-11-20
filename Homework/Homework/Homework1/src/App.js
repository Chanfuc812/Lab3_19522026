import { useState } from "react";
import Drum from "./drumkit";


function App() {
  const [sounds, setSounds] = useState([
    {
			name: "z",
			sound: require("./sounds/tom-1.mp3"),
			key: "Z",
    },
    {
			name: "x",
			sound: require("./sounds/tom-2.mp3"),
			key: "X",
		},
    {
			name: "c",
			sound: require("./sounds/tom-3.mp3"),
			key: "C",
		},
		{
			name: "v",
			sound: require("./sounds/tom-4.mp3"),
			key: "V",
		},
		{
			name: "b",
			sound: require("./sounds/snare.mp3"),
			key: "B",
		},
		{
			name: "n",
			sound: require("./sounds/crash.mp3"),
			key: "N",
		},
		{
			name: "M",
			sound: require("./sounds/kick-bass.mp3"),
			key: "M",
		},
    {
			name: "h",
			sound: require("./sounds/piano.wav"),
			key: "H",
		},
    {
			name: "j",
			sound: require("./sounds/guitar.wav"),
			key: "J",
		},
    {
			name: "k",
			sound: require("./sounds/edm.wav"),
			key: "K",
		},
	]);

	return (
		<div className="App">
			<h1 id='title'>Drum 🥁 Kit</h1>
			<div className="drums">
				{sounds.map((sound, i) => (
					<Drum key={i} letter={sound.key} sound={sound.sound} className='abc'/>
				))}
			</div>
		</div>
	);
}

export default App;
