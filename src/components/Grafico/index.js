import React from "react";
import GaugeChart from "react-gauge-chart"

export default function Graf1() {
    
    function values(valueinRPM) {
        let valueInPercent = ((valueinRPM - 100) / 999) / 100
        
        let display = valueinRPM
        
        return [
            
            valueInPercent,
            (value) => `${display} rpm`
        ]
    }    

    let rpm = 25000
    
  return <GaugeChart id="gauge-chart2" nrOfLevels={20} percent={values(rpm)[0]} textColor="#000" style={{width:"60%"}}  needleColor="red" formatTextValue={values(rpm)[1]}/>;
}
