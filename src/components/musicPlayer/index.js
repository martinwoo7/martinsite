import React, {useState, useEffect} from "react";
// import { MdPlayArrow, MdPause } from 'react-icons/md'
import "./index.css"

export const useAudio = (url) => {
    const [audio] = useState(new Audio(url))
    const [playing, setPlaying] = useState(false)

    const toggle = () => {
        setPlaying(!playing)
    }

    useEffect(() => {
        
        audio.volume = 0.2;
        // audio.addEventListener('ended', () => {
        //     setPlaying(false)
        //     setTimeout(() => {
        //         setPlaying(true)
        //     }, 2000)} 
        // );
        // return () => {
        //     audio.removeEventListener('ended', () => setPlaying(false))
        // }
    // eslint-disable-next-line 
    }, [])

    useEffect(() => {
        playing ? audio.play() : audio.pause()
        audio.loop = true
    },
    // eslint-disable-next-line 
    [playing])

    return [playing, toggle];
}
