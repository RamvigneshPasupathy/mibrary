import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: 0
    };
  }

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu').
      then(response => response.json()).
      then(responseJSON => this.setState({ weight: responseJSON.weight }));
  }

  render() {
    let { weight } = this.state;
    return (
      <View style={styles.container}>
      {
        weight <= 0 ?
        <Text>Give him a minute. The doc is observering ur pikachu..</Text> :
        <Text>Gotcha! Your pika boy weighs { weight } kgs.</Text>
      }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
