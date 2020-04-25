import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Button from './components/Button'
import Display from './components/Display'

const initialState = {
  displayValue: '',
  displayHistory: '',
  atualOperation: '',
  clearDisplay: false
}

export default class App extends Component {
  state = { ...initialState  }

  addDigit = n => {
     if (this.state.clearDisplay) {
       this.setState({ displayValue: n, clearDisplay: false})
       return
     }

    if (n === '.' && this.state.displayValue.includes("."))
      return

    this.setState({ 
      displayValue: this.state.displayValue + n
    })
  }

  clearMemory = () => {
    this.setState({...initialState})
  }

  setOperation = operation => {   
    if (this.state.displayValue === '' && this.state.atualOperation === '')
      return

    if (this.state.displayValue === '') {
      this.setState({
        atualOperation: operation,
        displayHistory: this.getPrimeiroNumero() + operation
      })
      return
    }    

    this.setState({ 
      displayHistory: this.state.atualOperation === '' ? this.state.displayValue + operation : this.calcula() + operation,
      displayValue: '',
      atualOperation: operation
    })
  }

  operaIgual = () => {
    if (this.state.atualOperation === '' || this.state.displayValue === '')
      return

    this.setState({
      displayHistory: '',
      displayValue: this.calcula(),
      atualOperation: '',
      clearDisplay: true
    })
  }

  calcula = () => {
    return eval(`${this.getPrimeiroNumero()} ${this.state.atualOperation} ${this.state.displayValue}`).toString()
  }

  getPrimeiroNumero = () => {
    return this.state.displayHistory.substr(0, this.state.displayHistory.lastIndexOf(this.state.atualOperation))    
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