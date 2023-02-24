import React, {useState, useEffect} from "react";
import { MdPlayArrow, MdPause } from 'react-icons/md'
import "./index.css"

const useAudio = (url) => {
    const [audio] = useState(new Audio(url))
    const [playing, setPlaying] = useState(true)

    const toggle = () => {
        setPlaying(!playing)
    }

    useEffect(() => {
        playing ? audio.play() : audio.pause()
    },
    // eslint-disable-next-line 
    [playing])

    useEffect(() => {

        audio.volume = 0.3;
        audio.addEventListener('ended', () => {
            setPlaying(false)
            setTimeout(() => {
                setPlaying(true)
            }, 2000)} 
        );
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false))
        }
    // eslint-disable-next-line 
    }, [])

    return [playing, toggle];
}

const AudioPlayer = ({ url }) => {
    const [playing, toggle] = useAudio(url)

    return (
        <div className="container">
            <h3 className="title" >Lost In Time</h3>
            <p className="subtitle" >amies x softy</p>
            <button className="playpause" onClick={toggle} >{playing ? <MdPause size={24} /> : <MdPlayArrow size={24}/>}</button>
        </div>
    )
}

export default AudioPlayer
