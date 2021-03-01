import React from "react";
import { Image, Text, View } from "react-native";
import { ButtonNext, ButtonPrev } from "./components/Button";

  let images = [
  "https://i2.wp.com/alumninsu.ru/news/wp-content/uploads/2016/08/%D0%B1%D0%BE%D0%B1%D0%B5%D1%80.jpg?resize=640%2C360&ssl=1",
  "https://www.newsler.ru/data/content/2019/85458/177672a58e6aea82f1a0d557f0e72895.jpg",
  "https://nedelya40.ru/wp-content/uploads/2015/07/36a8f8fabb3b0e45c953.jpg",
  "https://m.pln24.ru/pictures/210108160523.jpg",
  "https://naked-science.ru/wp-content/uploads/2020/05/Snimok-ekrana-ot-2020-05-25-09-13-05.jpg"
  ];
  var about = ["Опасный бобр", "Добрый бобр", "Шокированный бобр", "Обедающий бобр", "Сваливающий бобр"];

class App extends React.Component {

  state = {
    count: 0
  }
  
  nextImage = () => {
    this.setState({count: this.state.count + 1})
  }

  prevImage = () => {
    this.setState({count: this.state.count - 1})
  }
  
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }
      }
      >

        <Image
          style = {
            {
              width: 400,
              height: 300,
            }
          }
            source = {{uri: images[this.state.count]}}
        /> 

        <Text> {about[this.state.count]} </Text>

        {this.state.count > 0 && <ButtonPrev 
          style={
            {
              flex: 0,
              justifyContent: "space-between",
              alignItems: "center"
            }
          }
            prevImage={this.prevImage}
        />}

        {this.state.count < 4 && <ButtonNext 
          style={
            {
              flex: 0,
              justifyContent: "space-between",
              alignItems: "center"
            }
          }
          nextImage={this.nextImage}
        />}    

      </View>
    )
  }
}

export default App;