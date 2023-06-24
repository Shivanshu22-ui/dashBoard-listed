import React from "react";
import { Line } from "react-chartjs-2";
import { Linedata ,mockLineData as data} from "../../utilities/DummyData/data";
import { ResponsiveLine } from "@nivo/line";

function LineChart({ chartData }) {
  return (
    <div style={{width:'100%'}}>
      <Line
      width='400px'
        data={chartData}
        options={{
            responsive: true,
            plugins: {
              legend: {
                position: 'right',
              }
            },
        }}
      />
    </div>
  );
}
export default LineChart;