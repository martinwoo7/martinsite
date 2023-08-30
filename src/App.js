import "./App.css";
import { easeInOut, motion, useAnimationControls } from "framer-motion";
// import mountains from './assets/videos/mountains.mp4'
// import assets
import autumn from "./assets/videos/autumn.mp4";
import lost from "./assets/music/lost_in_time.mp3";
import goodtime from "./assets/music/all_the_good_times.mp3";

// import players
import Player from "./components/videoPlayer";
// import AudioPlayer from "./components/musicPlayer";
import { useAudio } from "./components/musicPlayer";
import React, { useEffect, useState } from "react";

import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";

import { MdPlayArrow, MdPause } from "react-icons/md";
import { BsFillVolumeUpFill, BsFillVolumeMuteFill } from "react-icons/bs";

import Root from "./routes/root";
import About from "./routes/about";
import Index from "./routes";
import ErrorPage from "./routes/errorPage";
import ResumePage from "./routes/resume";
import Projects from "./routes/projects";
import Experience from "./routes/experience";
import Art from "./routes/art";

// npm run build
// firebase deploy --only hosting
function getWindowDimensions() {
	const { innerWidth: width, innerHeight: height } = window;
	return {
		width,
		height,
	};
}

export function useWindownDimension() {
	const [windowDimensions, setWindowDimensions] = useState(
		getWindowDimensions()
	);
	useEffect(() => {
		function handleResize() {
			setWindowDimensions(getWindowDimensions());
		}
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);
	return windowDimensions;
}

function App() {
	const animation = useAnimationControls();
	const buttons = useAnimationControls();
	const container = useAnimationControls();

	const { height, width } = useWindownDimension();
	const isPortrait = height > width;
	const [playing, toggle] = useAudio(goodtime);

	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root screenWidth={width} />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <Index />,
				},
				{
					path: "about",
					element: <About isPortrait={isPortrait} />,
				},
				{
					path: "experience",
					element: <Experience isPortrait={isPortrait} />,
				},
				{
					path: "projects",
					element: <Projects isPortrait={isPortrait} />,
				},
				{
					path: "art",
					element: <Art isPortrait={isPortrait} />,
				},
				{
					path: "resume",
					element: <ResumePage isPortrait={isPortrait} />,
				},
			],
		},
	]);

	useEffect(() => {
		const sequence = async () => {
			await animation.start({
				width: ["0%", "5%", "12%", "25%", "34%", "40%"],
				transition: { type: "spring", duration: 3 },
			});
			await animation.start({
				opacity: 0,
				transition: { type: easeInOut, duration: 0.5 },
			});
			await animation.start({
				display: "none",
			});
			await buttons.start({
				opacity: 1,
				x: 0,
				transition: { type: "spring", duration: 2 },
			});
		};
		sequence();
	}, []);

	const handleEnter = async (type) => {
		console.log(type);
		await container.start({
			x: width,
			transition: { type: "spring", duration: 1 },
		});
		await container.start({
			display: "none",
		});

		if (type === 0) {
			toggle();
		}
	};
	return (
		<div className="App">
			<motion.div className="splash" animate={container}>
				<h1 style={{ color: "aliceblue", marginBottom: "1%" }}>
					MARTIN WOO
				</h1>
				<motion.div className="progress" animate={animation} />
				<motion.div initial={{ opacity: 0, x: -100 }} animate={buttons}>
					<button className="buttons" onClick={() => handleEnter(0)}>
						Enter with music
					</button>
				</motion.div>
				<motion.div initial={{ opacity: 0, x: -100 }} animate={buttons}>
					<button className="buttons" onClick={() => handleEnter(1)}>
						Enter without music
					</button>
				</motion.div>

				<motion.div className="blurb" style={{display: 'flex', flexWrap: 'wrap', width: '30%', margin: 0, marginTop: '1%'}}>
					This site is still kinda under construction so it's best if you enter on a desktop/laptop.
					The mobile version might cause problems such as: nightmares, physical glitches, and an immediate drop in respect for me.
				</motion.div>
			</motion.div>

			<Player video={autumn} />
			<div className="content">
				<div className="title">
					<h1>MARTINWOO</h1>
					<div className="volume">
						<button
							onClick={() => toggle()}
							style={{ background: "none", border: "none" }}
						>
							{playing ? (
								<BsFillVolumeUpFill
									size={32}
									color="aliceblue"
								/>
							) : (
								<BsFillVolumeMuteFill
									size={32}
									color="aliceblue"
								/>
							)}
						</button>
					</div>
				</div>

				<div className="test">
					{/* inner content goes here */}
					<RouterProvider router={router} />
				</div>

				{/* <AudioPlayer url={lost} /> */}
				<div className="container">
					<h3 className="title">All The Good Times</h3>
					<p className="subtitle">Mujo x Sweet Medicine x Hoogway</p>
					<button className="playpause" onClick={toggle}>
						{playing ? (
							<MdPause size={24} />
						) : (
							<MdPlayArrow size={24} />
						)}
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
