import React, { useEffect } from "react";
import moment from "dayjs";
import Media from 'react-media';

const Screen = () => {
    let date = moment().format("YYYY-MM-DD HH:mm:ss");

    return (
        <div>
            <h2>
                screen2
            </h2>
            <div>
                {date}
            </div>
            <Media queries={{
                small: "(max-width: 599px)",
                medium: "(min-width: 600px) and (max-width: 1199px)",
                large: "(min-width: 1200px)"
            }}>
                {matches => (
                    <>
                        {matches.small && <p>I am small!</p>}
                        {matches.medium && <p>I am medium!</p>}
                        {matches.large && <p>I am large!</p>}
                    </>
                )}
            </Media>
        </div>
    )
}


export default Screen