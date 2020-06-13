import React, {Component} from 'react';
import MajorClock from "./MajorClock";
import ControlButtons from "./ControlButtons";
import SplitTimes from "./SplitTimes";

class StopWatch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStarted: false,
            startTime: null,
            currentTime: null,
            splits: [],
        }
    }

    onStart = () => {
        this.setState({
            isStarted: true,
            startTime: new Date(),
            currentTime: new Date(),
        });
        this.timer = setInterval(() => {
            this.setState({currentTime: new Date()})
        }, 1000 / 60);
    }

    onPause = () => {
        clearInterval(this.timer);
        this.setState({isStarted: false})
    }

    onReset = () => {
        this.setState({
            startTime: null,
            currentTime: null,
            splits: [],
        });
    }

    onSplit = () => {
        this.setState({
            splits: [...this.state.splits, this.state.currentTime - this.state.startTime]
        })
    }


    render() {
        return (
            <React.Fragment>
                <MajorClock milliseconds={this.state.currentTime - this.state.startTime}/>
                <ControlButtons active={this.state.isStarted} onStart={this.onStart} onPause={this.onPause}
                                onSplit={this.onSplit} onRest={this.onReset}/>
                <SplitTimes splits={this.state.splits}/>
            </React.Fragment>
        );
    }
}

export default StopWatch;
