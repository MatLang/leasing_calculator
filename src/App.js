import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Input from './Components/Input'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      principal: '',
      interest_rate: '',
      duration: '',
      monthly_rate: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // set State based on the form elements principal, interest rate
  // and duration in months
  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    })
    console.log(this.state);
  }

  // calculate monthly rate based on given data
  // every function should only do on thing as a general rule
  // no need to bind to this because function is not passed down to component yet
  calculateMonthlyRate(principal,interest_rate,duration){
    return principal*(0.01*interest_rate/12)/
           ((1-(Math.pow(1+(0.01*interest_rate/12),-duration))));
  }
  // calculate monthly rate once the user submits the data
  onSubmit(event){
    event.preventDefault()
    const {principal, interest_rate, duration} = this.state;
    let monthly_rate = this.calculateMonthlyRate(principal,interest_rate,duration)
    monthly_rate = `${monthly_rate.toFixed(2)} €`;
    this.setState({monthly_rate})
  }


  render() {
    const {principal, interest_rate, duration, monthly_rate } = this.state;
    return (
      <div className="App">
        <div className="header">
          Characteristics
        </div>
        <form>
        <Input display="Principal" name="principal" handleInputChange={this.handleInputChange} placeholder="in Euro" />
        <Input display="Interest Rate" name="interest_rate" handleInputChange={this.handleInputChange}  placeholder="in percent"/>
        <Input display="Duration" name="duration" handleInputChange={this.handleInputChange} placeholder="in months"/>
        <button onClick={this.onSubmit}>Calculate</button>
        </form>
        <div className="header">
          Monthly Rate:
           {monthly_rate}
        </div>
      </div>
    );
  }
}

export default App;
