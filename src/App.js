/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from './components/Button'
import Display from './components/Display'

export default class App extends Component {
  state = {
    displayValue: '0',
    displayHistory: '',
    atualOperation: ''
  }

  addDigit = n => {
    this.setState({ 
      displayValue: this.state.displayValue === '0' ? n : this.state.displayValue + n
    })
  }

  clearMemory = () => {
    this.setState({ displayValue: '0', displayHistory: '', atualOperation: '' })
  }

  setOperation = operation => {    
    this.setState({ 
      displayHistory: this.state.atualOperation === '' ? this.state.displayValue + operation : this.calcula() + operation,
      displayValue: '0',
      atualOperation: operation
    })
  }

  operaIgual = () => {
    this.setState({
      displayHistory: this.state.atualOperation === '' ? this.state.displayHistory : '',
      displayValue: this.state.atualOperation === '' ? this.state.displayValue : this.calcula(),
      atualOperation: ''
    })
  }

  calcula = () => {
    let num1 = this.state.displayHistory.substr(0, this.state.displayHistory.indexOf(this.state.atualOperation))    
    let retorno = '0'
    switch (this.state.atualOperation) {
      case '+': 
        retorno =  num1 + this.state.displayValue
        break;
      case '-': 
        retorno = num1 - this.state.displayValue
        break
      case '*': 
        retorno = num1 * this.state.displayValue
        break
      case '/': 
        retorno = num1 / this.state.displayValue
        break
      default: retorno = 'ERROR'
      break
    }
    return retorno
  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} history={this.state.displayHistory} />
        <View style={styles.buttons}>
          <Button label='AC' tripleButton onClick={this.clearMemory} />
          <Button label='/' operation onClick={this.setOperation} />
          <Button label='7' onClick={this.addDigit} />
          <Button label='8' onClick={this.addDigit} />
          <Button label='9' onClick={this.addDigit} />
          <Button label='*' operation onClick={this.setOperation}/>
          <Button label='4' onClick={this.addDigit}/>
          <Button label='5' onClick={this.addDigit}/>
          <Button label='6' onClick={this.addDigit}/>
          <Button label='-' operation onClick={this.setOperation}/>
          <Button label='1' onClick={this.addDigit}/>
          <Button label='2' onClick={this.addDigit}/>
          <Button label='3' onClick={this.addDigit}/>
          <Button label='+' operation onClick={this.setOperation}/>
          <Button label='0' doubleButton  onClick={this.addDigit}/>
          <Button label='.' onClick={this.addDigit}/>
          <Button label='=' operation onClick={this.operaIgual}/>
        </View>
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
