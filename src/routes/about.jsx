import React, { useEffect, useState } from "react";
import Me from "../assets/img/me.jpg";

const About = ({ isPortrait }) => {
	return (
		<>
			<div id="aboutContainer">
				<img src={Me} alt="me" id="me" />
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignSelf: "flex-end",
					}}
				>
					<div className="blurb">
						<h1 style={{ marginBottom: 0 }}>This is me </h1>
						<p style={{ marginBottom: 0 }}>
							and that's my name at the top of this page.
						</p>
						<p style={{ marginBottom: 0, marginTop: 0 }}>
							I'm a software engineer that really just loves to
							explore and create.
						</p>
					</div>
					<div className="blurb" style={{ marginTop: "5%" }}>
						<p>
							and this picture was taken a while back so my hair
							isn't as curly (🐑) anymore
						</p>
					</div>
				</div>
			</div>
			<div className="blurb" style={{ marginTop: "3%" }}>
				<h1 style={{ marginBottom: 0 }}>A little information</h1>
				<p>
					I'm just a guy who really likes to learn. This thrist for
					information manifested in university, where I realized just
					how little I really knew. Never again will I be embarrassed
					for not knowing what a falafel is. I have devoted myself to
					a journey of mastering Middle Eastern chickpea-based street
					food identification, among other things.
				</p>
				<p>Find proof that I have learned below.</p>
			</div>
			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					marginTop: "3%",
				}}
			>
				<div className="blurb">
					<h2 style={{ marginBottom: 0 }}>Queen's University</h2>
					<h4 style={{ color: "silver" }}>
						2022 | Kingston, ON, Canada
					</h4>
					<h1>MSc in Computer Science</h1>
				</div>
				<div className="blurb" style={{ marginLeft: "2%" }}>
					<h2 style={{ marginBottom: 0 }}>Queen's University</h2>
					<h4 style={{ color: "silver" }}>
						2020 | Kingston, ON, Canada
					</h4>
					<h1>BSc in Cognitive Science</h1>
				</div>
				<div className="blurb" style={{ marginLeft: "2%" }}>
					<h2 style={{ marginBottom: 0 }}>Lord Byng Sec.</h2>
					<h4 style={{ color: "silver" }}>
						2015 | Vancouver, BC, Canada
					</h4>
					<h1>High School Diploma</h1>
				</div>
			</div>

			<div
				style={{
					display: "flex",
					justifyContent: "space-evenly",
					marginTop: "3%",
				}}
			>
				<div className="blurb">
					<h2 style={{ marginBottom: 0 }}>Queen Elizabeth Elem.</h2>
					<h4 style={{ color: "silver" }}>
						2010 | Vancouver, BC, Canada
					</h4>
					<h1>Primary School Diploma (?)</h1>
				</div>
				<div className="blurb" style={{ marginLeft: "2%" }}>
					<h2 style={{ marginBottom: 0 }}>CDNIS</h2>
					<h4 style={{ color: "silver" }}>
						2005 | Hong Kong, Hong Kong
					</h4>
					<h1>No diploma or credits (?)</h1>
				</div>
				<div className="blurb" style={{ marginLeft: "2%" }}>
					<h2 style={{ marginBottom: 0 }}>Montessorri</h2>
					<h4 style={{ color: "silver" }}>
						2002? | Hong Kong, Hong Kong
					</h4>
					<h1>Pre-school Diploma (?)</h1>
				</div>
			</div>

			<div className="blurb" style={{ marginTop: "3%" }}>
				<h1 style={{ marginBottom: 0 }}>Notice</h1>
				<p>
					The rest of this page is under construction as I try to find
					time to write something witty. I am trying and failing.
				</p>
			</div>
		</>
	);
};

export default About;
