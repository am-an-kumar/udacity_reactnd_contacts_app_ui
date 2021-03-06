import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class ContactsList extends Component {
  state = {
    query: '',
  }

  updateSearchQuery = value => {
    this.setState({
      query: value,
    })
  }

  // clears the search field and thus shows all contacts
  clearSearchQuery = () => {
    this.updateSearchQuery('')
  }

  render() {
    const { query } = this.state
    const { updateSearchQuery, clearSearchQuery } = this
    const { contacts, removeHandler } = this.props

    // filtering contacts based on search query
    const filteredContacts =
      query === ''
        ? contacts
        : contacts.filter(
            contact =>
              contact.name.toLowerCase().includes(query.toLowerCase) ||
              contact.handle.toLowerCase().includes(query.toLowerCase()),
          )

    return (
      <div className='list-contacts'>
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search Contacts'
            value={query}
            onChange={event => updateSearchQuery(event.target.value)}
          />
          <Link to='/create' className='add-contact'>
            Add Contact
          </Link>
        </div>

        {filteredContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>{`Now showing ${filteredContacts.length} out of ${contacts.length} contacts`}</span>
            <button onClick={clearSearchQuery}>Show all</button>
          </div>
        )}

        <ol className='contact-list'>
          {filteredContacts.map(contact => (
            <li key={contact.id} className='contact-list-item'>
              <div
                style={{
                  backgroundImage: `url(${contact.avatarURL})`,
                }}
                className='contact-avatar'
              ></div>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{`${contact.handle}`}</p>
              </div>
              <button
                className='contact-remove'
                onClick={() => removeHandler(contact)}
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      handle: PropTypes.string.isRequired,
      avatarURL: PropTypes.string.isRequired,
    }),
  ).isRequired,
  removeHandler: PropTypes.func.isRequired,
}

export default ContactsList
