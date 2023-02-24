import "./App.css";

// import mountains from './assets/videos/mountains.mp4'
// import assets
import autumn from "./assets/videos/autumn.mp4";
import lost from "./assets/music/lost_in_time.mp3";

// import players
import Player from "./components/videoPlayer";
import AudioPlayer from "./components/musicPlayer";

function App() {
	return (
		<div className="App">
			<Player video={autumn} />
			<div className="content">
				<div className="title">
					<h1>MARTINWOO</h1>
				</div>

				<div className="test">
					{/* inner content goes here */}
					<h1>testing content</h1>
				</div>

				<AudioPlayer url={lost} />
			</div>
		</div>
	);
}

export default App;
