import Disney from "../assets/img/disney.png";
import Card from "../assets/img/card.png";
import Album from "../assets/img/album.png";

const Art = () => {
	return (
		<>
			<div id="artContainer">
				<div className="blurb" style={{}}>
					<p style={{ color: "aliceblue", display: "inline-block" }}>
						I am also just an artist living under the shadow of a
						very talented
						<a
							target="_blank"
							href="https://www.deviantart.com/koulin"
							style={{
								textDecoration: "none",
								marginLeft: "5px",
								width: "fit-content",
								color: "rgb(255,170,126)",
							}}
						>
							older sister.
						</a>
					</p>
                    <p style={{padding: 0, margin: 0}}>Below are some very selected (and one might argue, only) pieces of art created by me.</p>
				</div>
				<div className="art">
					<img
						src={Disney}
						style={{
							width: 300,
							height: "auto",
							borderRadius: "12px",
							opacity: 0.8,
						}}
					/>
					<div className="blurb">
						<h3>Disney Castle | Photoshop + Dreams</h3>
						<p>
							This piece was created at the incessive request of a
							friend for a housewarming gift. If Disney sees this,
							please don't take down my website. I promise no
							money was made from this.
						</p>
					</div>
				</div>

				<div className="art">
					<img
						src={Card}
						style={{
							width: 300,
							height: "auto",
							borderRadius: "12px",
							opacity: 0.8,
						}}
					/>
					<div className="blurb">
						<h3>
							The Birds and the Buns | Photoshop + Hunger
						</h3>
						<p>
							This little graphic was created for the membership
							card of my university club: Queen's Hong Kong
							Student's Association (QHKSA). To this day, the
							pineapple bun remains an enigma.
						</p>
					</div>
				</div>

				<div className="art">
					<img
						src={Album}
						style={{
							width: 300,
							height: "auto",
							borderRadius: "12px",
							opacity: 0.8,
						}}
					/>
					<div className="blurb">
						<h3>Erica | Photoshop + Melancholy</h3>
						<p>
							This portrait was drawn as a gift for a friend. The
							whole concept was to create an album with a
							meaningful track written on a clear acrylic board
							with this as the album cover (click{" "}
							<a
								style={{
									textDecoration: "none",
									color: "rgb(255,170,126)",
								}}
								href="https://www.etsy.com/market/clear_album_cover"
							>
								here
							</a>{" "}
							for examples). It is still one of my greatest gifts
							to date.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Art;
