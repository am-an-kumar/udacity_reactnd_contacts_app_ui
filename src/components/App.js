import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import ContactsList from './ContactsList'

class App extends Component {
  state = {
    contacts: [
      {
        id: 'karen',
        name: 'Karen Isgrigg',
        handle: 'karen_isgrigg',
        avatarURL: 'http://localhost:5001/karen.jpg',
      },
      {
        id: 'richard',
        name: 'Richard Kalehoff',
        handle: 'richardkalehoff',
        avatarURL: 'http://localhost:5001/richard.jpg',
      },
      {
        id: 'tyler',
        name: 'Tyler McGinnis',
        handle: 'tylermcginnis',
        avatarURL: 'http://localhost:5001/tyler.jpg',
      },
    ],
  }

  render() {
    return <ContactsList contacts={this.state.contacts} />
  }
}

export default hot(module)(App)
