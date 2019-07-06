import React, { Component } from 'react';
import './App.css';
import SampleCard from './components/SampleCard';
import Form from './components/Form';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentData: {
        task:'', 
        status:''
      }
    }
  }

  componentDidMount() {
    this.getTasks()
  }

  getTasks =_=> {
    fetch('http://localhost:4000/users')
    .then(response => response.json())
    .then(data => this.setState({ data: data.data }))
    .catch(err => console.log(err))
  }

  render() {

    return (
      <div>
        <form onSubmit={this.getTasks}>
        <Form />
        </form>
        {this.state.data.map((row, i) => (
          <div key={i}>
            <SampleCard row={row} />
          </div>
        ))}
      </div>

    )
  }


}

export default App;