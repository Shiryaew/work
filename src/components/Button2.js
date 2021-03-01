import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

class Button extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.updateData}>
                <Text>Назад</Text>
            </TouchableOpacity>
        )
    }
}

export class ButtonNext extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.updateData}>
                <Text>Вперед</Text>
            </TouchableOpacity>
        )
    }
}

export default Button;