import React, {Component} from 'react';

class AA extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                组件AAA
                {this.props.children}
            </div>
        );
    }
}

export default AA;
