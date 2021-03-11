import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

class CategoryListItem extends React.Component {
    render() {
        const { name, isActive, onPress } = this.props;
        return (
            <TouchableOpacity style={{
                paddingHorizontal: 30,
                padding: 10,
                borderColor: isActive ? 'darkgray' : 'lightgray',
                borderRadius: 30,
                borderWidth: 1,
                marginRight: 10,
                backgroundColor: isActive ? 'darkgray' : 'lightgray',
            }}
                onPress={onPress}>
                <Text style={{
                    color: isActive ? 'white' : 'black'
                }}>{name}</Text>
            </TouchableOpacity>
        )
    }
}

export default CategoryListItem;