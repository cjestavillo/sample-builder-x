import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import Swiper from "@builderx/react-native-swiper";

export default class MaterialCarousel extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <Swiper
          index={0}
          autoplay={true}
          showsButtons={true}
          bounces={false}
          style={styles.carousel1}
        >
          <View style={styles.rect1}>
            <Text style={styles.text1}>Page 1</Text>
          </View>
          <View style={styles.rect2}>
            <Text style={styles.text2}>Page 2</Text>
          </View>
          <View style={styles.rect3}>
            <Text style={styles.text3}>Page 3</Text>
          </View>
        </Swiper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  carousel1: {
    alignSelf: "stretch",
    flex: 1
  },
  rect1: {
    flex: 1,
    backgroundColor: "rgba(240,143,179,1)",
    alignItems: "center",
    justifyContent: "center"
  },
  text1: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700"
  },
  rect2: {
    flex: 1,
    backgroundColor: "#2196F3",
    alignItems: "center",
    justifyContent: "center"
  },
  text2: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700"
  },
  rect3: {
    flex: 1,
    backgroundColor: "#009688",
    alignItems: "center",
    justifyContent: "center"
  },
  text3: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "700"
  }
});
