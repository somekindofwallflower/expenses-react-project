import React from 'react'
import './Chart.css'
import ChartBar from "./ChartBar";
const Chart = (props) => {
    const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value)
    const totalMax = Math.max(...dataPointsValue)
    return (
        <div>
            {props.dataPoints && props.dataPoints.length &&  <div className="chart">
                {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} max={totalMax} label={dataPoint.label} key={dataPoint.label}/>)}
            </div>}
        </div>
    )
}

export default Chart
