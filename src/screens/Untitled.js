import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  StatusBar,
  Text,
  Image
} from "react-native";
import MaterialHeader2 from "../symbols/MaterialHeader2";
import MaterialCarousel from "../symbols/MaterialCarousel";
import { Center } from "@builderx/utils";

export default class Untitled extends Component {
  render() {
    return (
      <View style={styles.root}>
        <ScrollView
          style={styles.scrollArea}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <View style={styles.rect} />
          <View style={styles.rect2} />
          <View style={styles.rect3} />
          <View style={styles.rect4} />
          <View style={styles.rect5} />
        </ScrollView>
        <StatusBar style={styles.statusBar} />
        <MaterialHeader2 style={styles.materialHeader2} />
        <MaterialCarousel style={styles.materialCarousel} />
        <Center horizontal>
          <Text style={styles.text}>Welcome to my world!</Text>
        </Center>
        <Image
          source={require("../assets/images/6-8-800x445.jpg")}
          resizeMode={"contain"}
          style={styles.image}
        />
        <Text style={styles.text2}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nisl
          sapien, porttitor pellentesque lobortis sit amet, commodo in dui. Cras
          tortor ligula, aliquet sed magna id, laoreet laoreet enim. Aenean quis
          egestas magna. Donec ac dictum lacus, rhoncus aliquet velit. Cras a
          dictum neque. Integer ut fermentum enim, eget bibendum orci. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Proin quis dolor dapibus, condimentum elit vitae,
          tempor purus. Curabitur fringilla arcu in placerat placerat. Cras
          hendrerit libero id ante gravida fringilla. Nulla sed leo libero.
          Pellentesque justo orci, fringilla et sodales eget, pharetra a est.
          Nam tristique, augue eu convallis lobortis, tortor odio efficitur
          massa, in sagittis enim lacus et velit. Vestibulum ante ipsum primis
          in faucibus orci luctus et ultrices posuere cubilia Curae;{"\n"}
          Aliquam ac finibus velit, aliquam porta quam. Duis auctor sit amet
          purus in imperdiet. Nullam elementum, arcu id posuere pretium, nulla
          tortor dapibus erat, in congue ex felis vitae mi. Vivamus tortor ante,
          mattis facilisis mi eu, maximus vehicula risus. Mauris dignissim
          congue porta. Etiam aliquam dignissim massa at pellentesque. Aliquam
          erat volutpat. Proin lectus quam, elementum a volutpat vitae, aliquam
          non arcu.
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(247,210,222,1)"
  },
  scrollArea: {
    top: 305.34,
    left: 0,
    width: 360,
    height: 434.66,
    backgroundColor: "rgba(230, 230, 230,1)",
    position: "absolute",
    flexDirection: "column"
  },
  scrollArea_contentContainerStyle: {},
  rect: {
    flex: 0.2,
    backgroundColor: "rgba(254, 254, 254,1)"
  },
  rect2: {
    flex: 0.2,
    backgroundColor: "rgba(248, 248, 248,1)"
  },
  rect3: {
    flex: 0.2,
    backgroundColor: "rgba(240, 240, 240,1)"
  },
  rect4: {
    flex: 0.2,
    backgroundColor: "rgba(242, 242, 242,1)"
  },
  rect5: {
    flex: 0.2,
    backgroundColor: "rgba(221, 221, 221,1)"
  },
  statusBar: {},
  materialHeader2: {
    top: 22,
    left: 0,
    width: 360,
    height: 56,
    position: "absolute"
  },
  materialCarousel: {
    top: 78,
    left: 0,
    width: 360,
    height: 227.35,
    position: "absolute"
  },
  text: {
    top: 325,
    color: "rgba(221,0,121,1)",
    position: "absolute",
    fontSize: 45,
    fontFamily: "arizonia-regular",
    textAlign: "center"
  },
  image: {
    top: 385.57,
    left: "0%",
    width: 360,
    height: 191.65,
    position: "absolute"
  },
  text2: {
    top: 592.87,
    left: 0,
    color: "rgba(206,69,162,1)",
    position: "absolute",
    fontSize: 14,
    fontFamily: "abeezee-regular"
  }
});
