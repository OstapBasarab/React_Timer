import React, { useState, useEffect } from 'react';
import './timer.css';

export default function Timer(props) {
    const {time, autostart, onTick, step} = props;
    const [seconds, setSeconds] = useState(time)
    const [timeOn, setTimeOn] = useState(autostart)

    useEffect(() => {
        let interval = null;

        if (timeOn) {
            interval = setInterval(() => {
                setSeconds(prevTime => prevTime - step)
                onTick(seconds)
            }, 1000)
            if (seconds < 0) {
                setSeconds(time)
            }
        }
        return () => clearInterval(interval)
    }, [seconds, timeOn])

    return (
        <div className={'container'}>
            <div className={'table'}>
                <span className={'num-style'}>{("0" + Math.floor((seconds / 60000) % 60)).slice(-2)}:</span>
                <span className={'num-style'}>{("0" + Math.floor((seconds / 1000) % 60)).slice(-2)}</span>
            </div>
            <div className={'button-position'}>
            <button onClick={() => setTimeOn(true)}>Start</button>
            <button onClick={() => setTimeOn(false)}>Stop</button>
            <button onClick={() => setSeconds(time)}>Reset</button>
            </div>
        </div>
    )
};