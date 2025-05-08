import { useState, useRef, useEffect } from "react";

export const MutableRef = () => {
    const [timer, setTimer] = useState(0);
    const intervalRef = useRef<number | null>(null);

    const stopTimer = () => {
        if(intervalRef.current)   // check if the interval is set
        window.clearInterval(intervalRef.current);

        useEffect(() => {
            intervalRef.current = window.setInterval(() => {  // returns a reference to the interval id as a number
                setTimer((timer) => timer + 1);
            }, 1000)
            return () => {
                stopTimer();
            }
        }, [])
    }

    return (
        <div>
            HookTimer - {timer} - 
            <button onClick={() => stopTimer}>Stop Timer</button>
        </div>
    )
}