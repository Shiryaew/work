import React from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

class CompanyListItem extends React.Component {
    render() {
        const { name, image } = this.props;
        return (
            <View style={{
                width: '90%',
                height: 400,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: "lightgray",
                borderColor: 'lightgray',
                borderRadius: 40,
                borderWidth: 1,
                alignSelf: 'center',
                marginTop: 130,
                elevation: 10
            }}>
                <Image style={{
                    width: Dimensions.get("window").width,
                    height: 400,
                    bottom: 50,
                }} source={{ uri: image }} />
                <Text style={{
                    fontSize: 15,
                    textAlign: "center",
                    padding: 15,
                    bottom: 50,
                    backgroundColor: "darkgray",
                    color: "white",
                    borderColor: 'lightgray',
                    borderRadius: 20,
                    borderWidth: 1
                }}>{name}</Text>
            </View>
        )
    }
}

export default CompanyListItem;