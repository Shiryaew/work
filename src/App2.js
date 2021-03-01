import React from "react"
import { Text, View, TextInput } from "react-native";
import Button from "./components/Button";

class App extends React.Component {
  state = {
    Name: "Name",
    Age: 1
  }
  
  updateData = () => {
    this.setState({temp: true})
  }
  
  render() {
    if (this.state.temp) {
      return (
        <Text>{this.state.Name} {this.state.Age}</Text>
      )
    }

    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
      
        <Text>NAME</Text>
        <View
            style={{
            borderBottomColor: '#000000',
            borderBottomWidth: 1,
            }}>
            <TextInput
            multiline
            numberOfLines={0}
            onChangeText={Name => this.setState({Name})}
            />
        </View>

        <Text>
          
        </Text>

        <Text>AGE</Text>
        <View
            style={{
            borderBottomColor: '#000000',
            borderBottomWidth: 1,
            }}>
            <TextInput
            multiline
            numberOfLines={0}
            onChangeText={Age => this.setState({Age})}
            />
        </View>

        <Text>
          
        </Text>

        <Button updateData={this.updateData} />

      </View>
    )
  }
}

export default App;