import React, { Component } from 'react'

export default class weather extends Component {
  constructor(props){
    super(props);
    this.state = {
      city: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({[e.target.name] : e.target.value});
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <input type="text" name="city" value={this.state.city} onChange={this.onChange}/>
        <h2>{this.state.city}</h2>
      </div>
    )
  }
}
