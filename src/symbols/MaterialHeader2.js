import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Icon from "VectorIcons";
import Svg, { Path } from "react-native-svg";

export default class MaterialHeader2 extends Component {
  render() {
    return (
      <View style={[styles.root, this.props.style]}>
        <TouchableOpacity style={styles.leftIconButton}>
          <Icon
            name={"menu"}
            type={"MaterialCommunityIcons"}
            style={styles.leftIcon}
          />
        </TouchableOpacity>
        <View style={styles.textWrapper}>
          <Text numberOfLines={1} style={styles.title}>
            Title
          </Text>
        </View>
        <View style={styles.rightIconsWrapper}>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              name={"magnify"}
              type={"MaterialCommunityIcons"}
              style={styles.rightIcon1}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Icon
              name={"dots-vertical"}
              type={"MaterialCommunityIcons"}
              style={styles.rightIcon2}
            />
          </TouchableOpacity>
        </View>
        <Svg viewBox={"0 0 0 0"} style={styles.path}>
          <Path
            strokeWidth={1}
            fill={"rgba(230, 230, 230,1)"}
            stroke={"rgba(230, 230, 230,1)"}
            d={"M0.00 0.00 Z"}
          />
        </Svg>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "rgba(222,118,161,1)",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  leftIconButton: {
    width: 46,
    height: 48,
    alignSelf: "stretch",
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "roboto-regular",
    fontSize: 24
  },
  textWrapper: {
    width: 226.91,
    height: 48,
    alignSelf: "stretch",
    justifyContent: "center"
  },
  title: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 18,
    fontFamily: "roboto-regular",
    fontWeight: "600",
    lineHeight: 18
  },
  rightIconsWrapper: {
    width: 92,
    height: 48,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch"
  },
  iconButton: {
    padding: 11
  },
  rightIcon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "roboto-regular",
    fontSize: 24
  },
  rightIcon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "roboto-regular",
    fontSize: 24
  },
  path: {
    top: 30,
    left: 71,
    width: 0,
    height: 0,
    position: "absolute"
  }
});
