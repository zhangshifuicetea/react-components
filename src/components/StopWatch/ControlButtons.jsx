import React from "react";
import PropTypes from "prop-types";
import style from './control-buttons.module.css';

const ControlButtons = (props) => {
    const {active, onStart, onPause, onSplit, onRest} = props;

    if (active) {
        return (
            <div>
                <button className={style.leftBtn} onClick={onSplit}>计次</button>
                <button className={style.rightBtn} onClick={onPause}>停止</button>
            </div>
        );
    } else {
        return (
            <div>
                <button className={style.leftBtn} onClick={onRest}>复位</button>
                <button className={style.rightBtn} onClick={onStart}>启动</button>
            </div>
        )
    }
}

ControlButtons.propTypes = {
    active: PropTypes.bool,
    onStart: PropTypes.func.isRequired,
    onPause: PropTypes.func.isRequired,
    onSplit: PropTypes.func.isRequired,
    onRest: PropTypes.func.isRequired,
}

export default ControlButtons;
