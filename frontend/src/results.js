import React from 'react';
import {Bar} from 'react-chartjs-2';

class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <Bar
                    data={
                        {
                            labels: ['a' ,'b', 'c', 'd', 'e'],
                            datasets: [{
                                label: "Time sent per page",
                                fill: false,
                                backgroundColor: 'rgba(75,192,192,0.4)',
                                borderColor: 'rgba(75,192,192,1)',
                                data: [1, 5, 7, 3, 2]
                            }]
                        }} 
                    height={500}
                  className = "barGraph"
                  options={{
  	                maintainAspectRatio: false,
                        scales: {
                            yAxes:[{
                                ticks: {
                                    suggestedMin:0
                                }
                            }]
                        }
                     }}
                />
            </div>
        )
    };
}

export default Results;