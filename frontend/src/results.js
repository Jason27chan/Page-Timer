import React from 'react';
import {Bar} from 'react-chartjs-2';

class Results extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);

        this.stopwatchArr = props.times;

        let times = [];
        for (let i = 0; i < this.stopwatchArr.length; i++) {
        times.push(this.stopwatchArr[i].getTimeValues().seconds);
        }
        console.log(times);
        this.state = {
            times: times
        };
    }

    render() {
        return (
            <div>
                <Bar
                    data={
                        {
                            labels: ['page 1', 'page 2', 'page 3', 'page 4', 'page 5', 'page 6', 'page 7', 'page 8', 'page 9'],
                            datasets: [{
                                label: "Time sent per page",
                                fill: false,
                                backgroundColor: 'rgba(75,192,192,0.4)',
                                borderColor: 'rgba(75,192,192,1)',
                                data: this.state.times
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