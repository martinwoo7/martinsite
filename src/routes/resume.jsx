import { BsDownload } from "react-icons/bs";
import { Link } from "react-router-dom";
const ResumePage = ({ isPortrait }) => {
	return (
		<>
			<div className="employment">
				<h3 style={{ color: "aliceblue" }}>
					I am currently looking for employment in the tech industry
				</h3>
				<h4 style={{ color: "aliceblue", margin: 0}}>
					I am also an absolute monster in customer service (which I
					think is a valuable asset in tech :) )
				</h4>
			</div>
			<div className={!isPortrait ? "contentContainer" : "contentContainerVertical"}>
				<div className="square" id="left" >
					<h3 style={{ color: "aliceblue" }}>Tech</h3>
					<button className="buttons">
						<Link to="/assets/CV.pdf" target="_blank" download>
							<BsDownload size={64} color="aliceblue" />
						</Link>
					</button>
				</div>
                {!isPortrait && <div className="verticalLine" />}
				
				<div className="square" id="right" >
					<h3 style={{ color: "aliceblue" }}>Service</h3>
					<button className="buttons">
						<Link
							to="/assets/CV_Customers.pdf"
							target="_blank"
							download
						>
							<BsDownload size={64} color="aliceblue" />
						</Link>
					</button>
				</div>
			</div>
		</>
	);
};

export default ResumePage;
