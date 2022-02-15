import React, { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart"

function Graf2() {

    const [percent, setPercent] = useState(0.56)

    const [boller, setBoller] = useState(true)

    useEffect(() => {
        if (boller) {
            setTimeout(() => {
                setPercent(0.0)
                setBoller(false)
            }, 5000)
        } else {
            setTimeout(() => {
                setPercent(0.58)
                setBoller(true)
            }, 5000)
        }
    }, [boller])

    return (


        <GaugeChart id="gauge-chart6"
            animate={true}
            nrOfLevels={3}
            percent={percent}
            needleColor="red"
            textColor="#000" style={{ width: "60%" }}
            arcsLength={[0.3, 0.5, 0.2]}
            animDelay={500}
            animateDuration={4500}
        />
    )



}
export default Graf2;