import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
// import 'react-tabs/style/react-tabs.css';

const Experience = () => {
	return (
		<>
			<Tabs>
				<TabList>
					<Tab>Machine Learning + Engineering</Tab>
					<Tab>Website + App Development</Tab>
					<Tab>Projects</Tab>
					<Tab>Customer Service</Tab>
				</TabList>

				<TabPanel>
					<div class="expContainer">
						<div
							className="verticalLine"
							style={{
								height: "100%",
								position: "absolute",
								zIndex: 1,
							}}
						/>

						<div
							className="blurb"
							style={{
								marginLeft: 0,
								marginRight: "50%",
								display: "flex",
								flexWrap: "wrap",
								paddingLeft: "3%",
								paddingRight: "3%",
								width: "35%",
							}}
						>
							<h2>Research Assistant | 2022</h2>
							<ul>
								<li>
									Working for{" "}
									<Link
										to="https://surgery.med.ubc.ca/people/edavid/"
										style={{
											textDecoration: "none",
											color: "rgba(255, 170, 126, 1)",
										}}
									>
										Dr. Eytan David
									</Link>{" "}
									to create custom a ML program for analyzing
									dizziness.
								</li>
								<li>
									Uses Electron framework with React front-end
									+ Python back-end to create a standalone
									desktop app for suggesting parameters used
									in a custom therapeutic protocol.
								</li>
							</ul>
							<p>
								Dr. David has several papers published to the top journals based on his
								custom therapeutic protocol for treating balanced-based dizziness. My program
								analyzes the patient's intake data + initial performance results to suggest the parameters used
								in his protocol and monitor patient results.
							</p>
						</div>

						<div
							className="blurb"
							style={{
								marginTop: "5%",
								marginLeft: "50%",
								display: "flex",
								flexWrap: "wrap",
								width: "35%",
								paddingLeft: "3%",
								paddingRight: "3%",
							}}
						>
							<h2>Graduate Student (Machine Learning Research) | 2020-2022</h2>
							<ul>
								<li>
									Worked under{" "}
									<Link
										style={{
											textDecoration: "none",
											color: "rgba(255, 170, 126, 1)",
										}}
										to="http://research.cs.queensu.ca/home/farhana/"
									>
										Dr. Farhana Zulkernine{" "}
									</Link>
									in pursuit of Master's degree.
								</li>
								<li>
									Research concepts involve Human Activity
									Recognition (HAR), stream clustering, LSTMs,
									AEs, CNN, and IoT processing.
								</li>
								<li>
									Used TensorFlow2 to produce state-of-the-art (95%+)
									and novel research on using clustering for
									HAR.
								</li>
								<li>
									Implemented a total of 10 clustering machine
									learning models for time-series processing.
								</li>
							</ul>
							<p>
								If you REALLY are interested in reading it, then
								you may download it{" "}
								<Link
									to="/assets/Woo_Martin_PK_202209_MSC.pdf"
									target="_blank"
									download
									style={{
										textDecoration: "none",
										color: "rgba(255, 170, 126, 1)",
									}}
								>
									here
								</Link>
								. It is VERY LONG and can be a tiny
								bit boring, unless you are keenly interested in
								exploring different ways to cluster
								high-dimensional smartphone sensor data.
							</p>
						</div>

						<div
							className="blurb"
							style={{
								marginLeft: 0,
								marginRight: "50%",
								display: "flex",
								flexWrap: "wrap",
								paddingLeft: "3%",
								paddingRight: "3%",
								width: "35%",
							}}
						>
							<h2>Research Student</h2>
							<ul>
								<li>
									Worked with{" "}
									<Link
										style={{
											textDecoration: "none",
											color: "rgba(255, 170, 126, 1)",
										}}
										to="http://research.cs.queensu.ca/home/farhana/"
									>
										Dr. Farhana Zulkernine{" "}
									</Link>
									for my undergrad capstone project.
								</li>
								<li>
									This work is the precursor to my graduate
									thesis, which includes researching
									preliminary methods for clustering HAR data
									using simple statistical clustering
									algorithms.
								</li>
								<li>
									Implemented 3 statistical streaming
									algorthms (a density-based model, a
									weight-less neural network, and a K-means
									model) for clustering HAR streaming data
								</li>
							</ul>
							<p>
								My writing skills and ability to explore
								different concepts on my own prompted my
								professor to recruit me to be her Master's
								student.
							</p>
						</div>
					</div>
				</TabPanel>
				<TabPanel>
					<div class="expContainer">
						<div
							className="verticalLine"
							style={{
								height: "100%",
								position: "absolute",
								zIndex: 1,
							}}
						/>
						<div
							className="blurb"
							style={{
								marginLeft: 0,
								marginRight: "50%",
								display: "flex",
								flexWrap: "wrap",
								paddingLeft: "3%",
								paddingRight: "3%",
								width: "35%",
							}}
						>
							<h2>Martin Woo (This website) | 2023</h2>
							<ul>
								<li>I coded this website using React.JS</li>
							</ul>
							<p>
								Future plans include implementing ThreeJS to add
								some fanciness to the site. So until I learn
								ThreeJS and actually build the portfolio
								website, this will have to do for now.
							</p>
						</div>
						<div
							className="blurb"
							style={{
								marginTop: "5%",
								marginLeft: "50%",
								display: "flex",
								flexWrap: "wrap",
								width: "35%",
								paddingLeft: "3%",
								paddingRight: "3%",
							}}
						>
							<h2>Full-stack Developer | 2022 - Current </h2>
							<ul>
								<li>
									Currently creating a social media app with a
									startup (soon to be named) to connect people
									with similar others in a city and be a hub
									for local events and services.
								</li>
								<li> Coded using React Native and Firebase</li>
								<li>
									In charge of database archticture design,
									app system design, and functional
									programming.
								</li>
							</ul>
						</div>
						<div
							className="blurb"
							style={{
								marginLeft: 0,
								marginRight: "50%",
								display: "flex",
								flexWrap: "wrap",
								paddingLeft: "3%",
								paddingRight: "3%",
								width: "35%",
							}}
						>
							<h2>Research Assistant | 2020</h2>
							<ul>
								<li>
									Working for{" "}
									<Link
										to="https://www.queensu.ca/french/greg-lessard"
										style={{
											textDecoration: "none",
											color: "rgba(255, 170, 126, 1)",
										}}
									>
										Dr. Greg Lessard
									</Link>{" "}
									to maintain and upgrade a web application
									catered towards low-end devices:{" "}
									<Link
										to="https://vincilingua.ca/"
										style={{
											textDecoration: "none",
											color: "rgba(255, 170, 126, 1)",
										}}
									>
										VinciLingua
									</Link>
								</li>
								<li>
									Coded using HTML, CSS, PHP, JavaScript, and
									MySQL
								</li>
								<li>
									Currently used in multiple Queen's language
									courses.
								</li>
								<li>
									Upgraded framework to increase computational
									speed by around 10% and implemented a
									streamlined modern design (for next
									release).
								</li>
								<li>
									Integrated higher server and client-side
									security protocols and user account
									validation.
								</li>
							</ul>
						</div>

						<div
							className="blurb"
							style={{
								marginTop: "5%",
								marginLeft: "50%",
								display: "flex",
								flexWrap: "wrap",
								width: "35%",
								paddingLeft: "3%",
								paddingRight: "3%",
							}}
						>
							<h2>Front-end Developer | 2018</h2>
							<ul>
								<li>
									Created the website for my university
									cultural club{" "}
									<Link
										style={{
											textDecoration: "none",
											color: "rgba(255, 170, 126, 1)",
										}}
										to="https://qhksa.netlify.com"
									>
										QHKSA
									</Link>
								</li>
								<li>Coded using HTML, CSS, and JavaScript</li>
							</ul>
						</div>

						<div
							className="blurb"
							style={{
								marginLeft: 0,
								marginRight: "50%",
								display: "flex",
								flexWrap: "wrap",
								paddingLeft: "3%",
								paddingRight: "3%",
								width: "35%",
							}}
						>
							<h2>Front-end Developer | 2017 - Current</h2>
							<ul>
								<li>
									Created and managing a website for a local
									construction company:{" "}
									<Link
										style={{
											textDecoration: "none",
											color: "rgba(255, 170, 126, 1)",
										}}
										to="http://lucky-red.ca/"
									>
										Lucky Red Enterprises
									</Link>
									.
								</li>
								<li>Coded using HTML, CSS, and JavaScript</li>
							</ul>
						</div>
					</div>
				</TabPanel>
				<TabPanel>
					<div class="expContainer">
						<div
							className="verticalLine"
							style={{
								height: "100%",
								position: "absolute",
								zIndex: 1,
							}}
						/>
						<div
							className="blurb"
							style={{
								marginTop: "5%",
								marginLeft: "50%",
								display: "flex",
								flexWrap: "wrap",
								width: "35%",
								paddingLeft: "3%",
								paddingRight: "3%",
							}}
						>
							<h2><a href="staging.martinwoo.ca">Ongoing Project</a> | Current </h2>
							<ul>
								<li>
									Built using Django (Python) backend + React frontend communicating using
									the Django REST Framework to make REST API calls to the server.
								</li>
								<li>
									Hosted on a AWS EC2 instance running Ubuntu
								</li>
							</ul>
							<p>
								This is an ongoing project. 
							</p>
						</div>
					</div>
				</TabPanel>
				<TabPanel>
					<div class="expContainer">
						<div
							className="verticalLine"
							style={{
								height: "100%",
								position: "absolute",
								zIndex: 1,
							}}
						/>
						<div
							className="blurb"
							style={{
								marginTop: "5%",
								marginLeft: "50%",
								display: "flex",
								flexWrap: "wrap",
								width: "35%",
								paddingLeft: "3%",
								paddingRight: "3%",
							}}
						>
							<h2>Bubble Tea Barista | 2021 </h2>
							<ul>
								<li>
									Worked at ChaTime as a bubble tea barista to
									help pay for grad school and food.
								</li>
								<li>
									{" "}
									I was so impressive in my abilities that I
									got promoted to shift manager within my
									first week
								</li>
								<li>
									In charge of food prep, cashier stuff,
									making drinks, and instructing new
									employees.
								</li>
							</ul>
							<p>
								The boss trusted me so much that he straight up
								asked my opinion on some business decisions.
							</p>
						</div>
						<div
							className="blurb"
							style={{
								marginLeft: 0,
								marginRight: "50%",
								display: "flex",
								flexWrap: "wrap",
								paddingLeft: "3%",
								paddingRight: "3%",
								width: "35%",
							}}
						>
							<h2>Hudson's Bay | 2020 </h2>
							<ul>
								<li>
									Worked in the mensware section of Hudson's
									Bay as a sale associate.
								</li>
								<li>
									I sold something like, 15 credit cards
									during the summer?
								</li>
								<li>
									In charge of talking to customers, cashier
									stuff, fixing displays, and following
									customers around asking if they want my help
									when they clearly don't need it.
								</li>
							</ul>
						</div>

						<div
							className="blurb"
							style={{
								marginTop: "5%",
								marginLeft: "50%",
								display: "flex",
								flexWrap: "wrap",
								width: "35%",
								paddingLeft: "3%",
								paddingRight: "3%",
							}}
						>
							<h2>Social Media Manager | 2017</h2>
							<ul>
								<li>
									I worked as the social media manager for
									NCIX Canada. I managed their Twitter account
									and Facebook page.
								</li>
								<li>
									Increased their impressions by something
									like 100%
								</li>
								<li>
									I also wrote something like, a total of 30
									different blurbs and articles that they
									published on their website, Facebook page,
									and blogs.
								</li>
							</ul>
							<p>
								and I achieved all this as an unpaid intern.
								Incredible. I got pair a gaming headsets as a
								gift when I left.
							</p>
						</div>

						<div
							className="blurb"
							style={{
								marginLeft: 0,
								marginRight: "50%",
								display: "flex",
								flexWrap: "wrap",
								paddingLeft: "3%",
								paddingRight: "3%",
								width: "35%",
							}}
						>
							<h2>Yard Helper | 2016</h2>
							<ul>
								<li>
									Worked as a yard helper at Sen Western
									Lumber carrying around stacks of woods and
									packing nails in boxes under the hot summer
									sun.
								</li>
								<li>
									I interacted with customers and assisted
									with customer orders. Everything I did
									involved talking to people or helping people
									do stuff concerning wood.
								</li>
							</ul>
							<p>I got incredibly fit as a reward.</p>
						</div>
					</div>
				</TabPanel>
			</Tabs>
		</>
	);
};

export default Experience;
