import React, { useEffect } from "react";
import loadable from '@loadable/component'
import pMinDelay from 'p-min-delay'
import { map } from "lodash";

const TestComp = loadable(() => pMinDelay(import(/* webpackChunkName: "TestComp" */ './components/Test'), 1000), {
    fallback: <div>Loading...</div>
});


const Screen = () => {
    useEffect(() => {
        let list = [1, 2, 3, 4];
        console.log(map(list, item => item * 2))
    }, [])

    return (
        <div>
            <h2>
                screen1
            </h2>
            <TestComp />
        </div>
    )
}


export default Screen