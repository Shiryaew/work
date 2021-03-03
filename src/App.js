import React from "react";
import { Image, Text, View, ScrollView, FlatList, TouchableOpacity, Dimensions } from "react-native";

const renderItem = ({ item }) => (
  <View>
    <Image style={{
      width: Dimensions.get("window").width,
      height: 500
    }}
      source={{ uri: item.product }}
    />

    <Text style={{
      fontSize: 15,
      textAlign: "center",
      padding: 15,
      bottom: 50,
      backgroundColor: "lightgray",
      color: "black",
      borderColor: 'lightgray',
      borderRadius: 20,
      borderWidth: 1
    }}>{item.title}</Text>
  </View>
)

class App extends React.Component {
  state = {
    categories: [
      { name: 'Вода' },
      { name: 'Ёмкости' },
      { name: 'Доставка' },
      { name: 'Дополнительно' }
    ],

    variants: [
      {
        product: 'https://coffee-break.pro/2642-thickbox_default/stakan-odnorazovyj-huhtamaki-prozrachnyj-200ml-100sht-up.jpg',
        title: 'Бюджетный вариант'
      },

      {
        product: 'https://buttylka.ru/images/but.png',
        title: 'Дружеский вариант'
      },

      {
        product: 'https://www.gammaplast.lv/public/images/products/pet%20mw%201.50.png',
        title: 'Классический вариант'
      },

      {
        product: 'https://static.tildacdn.com/tild6330-6131-4361-a164-373661616633/5L1.png',
        title: 'Премиум вариант'
      }
    ]

  }

  render() {
    const { categories, variants } = this.state;
    return (
      <View style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
      }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ paddingLeft: 10 }}>{
            categories.map((item) => (
              <View style={{
                paddingTop: 20,
                paddingRight: 10,
                height: 100
              }}
                key={item.name}>
                <TouchableOpacity style={{
                  padding: 10,
                  borderColor: 'lightgray',
                  borderRadius: 30,
                  borderWidth: 1
                }}
                >
                  <Text style={{
                    color: 'black',
                    fontSize: 15
                  }}>
                    {item.name}</Text>
                </TouchableOpacity>
              </View>
            ))
          }
        </ScrollView>

        <FlatList
          data={variants}
          renderItem={renderItem}
          keyExtrator={item => item.product}
        />
      </View>
    )
  }
}

export default App;