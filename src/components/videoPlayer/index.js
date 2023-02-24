import React from "react";
import "./index.css"

const Player = ({ video }) => {

    return (
        <div className="playerWrapper">
            <video className="bg-video" loop autoPlay muted>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    )
}

export default Player