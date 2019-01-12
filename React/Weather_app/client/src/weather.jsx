import React, { Component } from 'react'
import axios from 'axios';

export default class weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      search:'',
      city: '',
      zip: '',
      desc:'',
      tempF: '',
      tempC: '',
      hum: '',
      wind: '',
      message: ''
    }
    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }
  onSubmit(e){
    e.preventDefault();
    var isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.state.search);
    var searchType = `q=${this.state.search}` 
    if(isValidZip === true){
      searchType = `zip=${this.state.search}`
    }
    axios.get(`http://api.openweathermap.org/data/2.5/weather?${searchType}&APPID=bb9e615b330eecf16100fe0b2e388e96`)
      .then(res => {
        var descA = res.data.weather[0].description
        var tempAF = Math.ceil((res.data.main.temp - 273.15) * 9/5 + 35)
        this.setState({city: res.data.name, tempF : tempAF, desc : descA, message:""})
      })
      .catch(err => {
        this.setState({city: '', tempF : '', desc : '', message:"Invalid input"})        
      })
  }
  onChange(e) {
    this.setState({[e.target.name] : e.target.value});
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="search" value={this.state.search} onChange={this.onChange}/>
          <button type="submit" >Search</button>
        </form>
        <h3>{this.state.city}</h3>
        <h2>{this.state.tempF}</h2>
        <p>ºF</p>
        <h3>{this.state.desc}</h3>
        <h3>{this.state.wind}</h3>
        <h3>{this.state.hum}</h3>
        <h2>{this.state.message}</h2>
      </div>
    )
  }
}
