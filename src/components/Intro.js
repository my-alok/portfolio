import React, { useEffect, useState } from 'react'

export default function Intro(props) {
    var audio = new Audio(props.url);
    const [playing, setPlaying] = useState(false);
    const togglePlay = () => {
        setPlaying(!playing);
    }
    return (
        <div>
            <button onClick={togglePlay}>{playing ? 'Pause' : 'Play'} </button>
        </div>
    )
}
