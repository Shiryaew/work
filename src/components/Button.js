import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.updateData}>
                <Text>Done</Text>
            </TouchableOpacity>
        )
    }
}

export default Button;