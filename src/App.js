import React from "react";
import { Image, Text, View, ScrollView } from "react-native";

class App extends React.Component {

  state = {
    images: [
      "https://i2.wp.com/alumninsu.ru/news/wp-content/uploads/2016/08/%D0%B1%D0%BE%D0%B1%D0%B5%D1%80.jpg?resize=640%2C360&ssl=1",
      "https://www.newsler.ru/data/content/2019/85458/177672a58e6aea82f1a0d557f0e72895.jpg",
      "https://nedelya40.ru/wp-content/uploads/2015/07/36a8f8fabb3b0e45c953.jpg",
      "https://m.pln24.ru/pictures/210108160523.jpg",
      "https://naked-science.ru/wp-content/uploads/2020/05/Snimok-ekrana-ot-2020-05-25-09-13-05.jpg"
      ],
      about: ["Опасный бобр", "Добрый бобр", "Шокированный бобр", "Обедающий бобр", "Сваливающий бобр"]
  }
    
  render() {
    const { images, about } = this.state;

    return (
        
        <ScrollView style = {{flex: 1}}>
          {images.map((url, ind)=>{
            return (<View key={url}>
            <Image 
              style = {
                {
                  width: 400,
                  height: 300,
                }
              }
              source = {{ uri: url }}

            />
            <Text> {about[ind]} </Text>

            <Text> </Text>

            </View>

            )
          })}
        </ScrollView>

    )
  }
}

export default App;