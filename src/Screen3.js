import React, { useEffect } from "react";
import { interval } from "rxjs";

const Screen = () => {
    useEffect(() => {
        let sub = interval(1000).subscribe(() => {
            console.log("interval");
        })
        return () => sub.unsubscribe()
    }, [])

    return (
        <div>
            <h2>
                screen3
            </h2>
        </div>
    )
}


export default Screen