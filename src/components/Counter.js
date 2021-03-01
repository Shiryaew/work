import React from 'react';
import { Text } from 'react-native';

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            doubleCount: props.count
        }
    }

    componentDidMount() {
        console.log('MOUNT');
    }

    componentWillUnmount() {
        console.log('UNMOUNT');
    }

    componentDidUpdate(prevProps, prevState) {
        /*if (this.props.count > this.state.doubleCount) {
            this.setState({ doubleCount: this.props.count * 2 });
        }*/
        console.log('DIDUPDATE', prevProps, this.props);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.count < 20;
        /*return true;*/
    }

    render(){
        return (
            <Text>{this.state.DoubleCount}</Text>
        )
    }
}

export default Counter;