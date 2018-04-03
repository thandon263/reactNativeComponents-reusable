import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { Icon } from "native-base";

export default class NavigationText extends Component {
  render() {
    const { navStyle, textStyle } = style;
    return (
      <TouchableOpacity
        itemDivider
        style={navStyle}
        onPress={() => this.props.onPress()}
      >
        <Icon name={this.props.icon} />
        <Text style={textStyle}>{this.props.children}</Text>
      </TouchableOpacity>
    );
  }
}

const style = {
  navStyle: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 20,
    alignItems: "center"
  },
  textStyle: {
    marginLeft: 30,
    fontSize: 15
  }
};
