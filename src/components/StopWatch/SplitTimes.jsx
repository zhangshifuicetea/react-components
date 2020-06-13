import React from 'react';
import PropTypes from "prop-types";
import MajorClock from "./MajorClock";

const SplitTimes = ({splits = []}) => {

    return splits.map((time, index) => {
        return <MajorClock key={index} milliseconds={time}/>
    })
}

SplitTimes.propTypes = {
    splits: PropTypes.arrayOf(PropTypes.number)
}

export default SplitTimes;
