import React, { Component } from 'react';
import Contacts from './components/contacts';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    // this.state = {   
    this.state = {
      contacts: [],
      isLoading : true
    }
  }

  // ngambil data (api) dari url
  componentDidMount() {

    fetch("https://jsonplaceholder.typicode.com/users")

    .then(res => res.json())

    .then((data) => {

      this.setState({ contacts: data, isLoading: false })

    })

    .catch(console.log)

  }

  render() {

    // buat variberel
    const { isLoading } = this.state

    // loading kondisi benar
    if(isLoading) {
      return <p>Nunggu ya ...</p>
    }

    return (
      <Contacts contacts={this.state.contacts} />
    )
  }
}

export default App;
