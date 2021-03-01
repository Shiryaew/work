import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

class Button extends React.Component{
    render(){
        return(
            <TouchableOpacity onPress={this.props.increacse}>
                   <Text>Press me</Text>   
            </TouchableOpacity>
        )
    }
}

export class ButtonNext extends React.Component {
    render() {
        return (
            <TouchableOpacity style = {
                {
                    position: 'absolute',
                    bottom: 150,
                    right: 140
                }
            }
                onPress={this.props.nextImage}>
                <Text>Вперед</Text>
            </TouchableOpacity>
        )
    }
}

export class ButtonPrev extends React.Component {
    render() {
        return (
            <TouchableOpacity style = {
                {
                    position: 'absolute',
                    bottom: 150,
                    left: 140,
                }
            }
                onPress={this.props.prevImage}>
                <Text>Назад</Text>
            </TouchableOpacity>
        )
    }
}

export default Button;