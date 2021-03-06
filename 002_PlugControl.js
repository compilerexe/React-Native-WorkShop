import React, { Component, } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class App extends Component {

  constructor() {
    super();
    this.state = {
      plugState: 'OFF'
    };
  }

  detectON() {
    this.setState({plugState: 'ON'});
    fetch('https://api.netpie.io/topic/HelloCMMC/gearname/plug001?auth=Task9JnxtDsOeLt:D0plMFJrx3igmngkar718BGGY', {
        method: 'PUT',
        body: 'ON'
    });
  }

  detectOFF() {
    this.setState({plugState: 'OFF'});
    fetch('https://api.netpie.io/topic/HelloCMMC/gearname/plug001?auth=Task9JnxtDsOeLt:D0plMFJrx3igmngkar718BGGY', {
        method: 'PUT',
        body: 'OFF'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.labelState}>{ this.state.plugState } </Text>
        </View>
        <View style={styles.body}>

          <TouchableOpacity onPress={this.detectON.bind(this)} style={styles.test}>
            <View style={styles.layoutButtonON}>
              <Text style={styles.labelButton}>ON</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.detectOFF.bind(this)}>
            <View style={styles.layoutButtonOFF}>
                <Text style={styles.labelButton}>OFF</Text>
            </View>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#F5FCFF',
  },
  header: {
    flex: 5,
    //backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center'
  },
  body: {
    flex: 5,
    flexDirection: 'row',
    //backgroundColor: 'blue',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  labelState: {
    fontSize: 50,
    fontWeight: '100'
  },
  labelButton: {
    fontSize: 30,
    fontWeight: '100'
  },
  layoutButtonON: {
    color: 'white',
    backgroundColor: 'green',
    paddingTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 15,
    borderRadius: 10
  },
  layoutButtonOFF: {
    color: 'white',
    backgroundColor: 'lightpink',
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    borderRadius: 10
  }
});

AppRegistry.registerComponent('App', () => App);
