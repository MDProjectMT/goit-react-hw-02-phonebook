import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

class ContactsBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
    };
  }

  handleChange = ev => {
    const { name, value } = ev.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (name, number) => {
    const filtered = this.state.contacts.filter(
      item =>
        item.name.toLowerCase() === name.toLowerCase() && item.number === number
    );

    if (filtered.length > 0) {
      window.alert(JSON.stringify(`${name} is already in contacts`));
      return;
    }
    this.setState(prev => {
      const list = [...prev.contacts];
      list.push({
        id: nanoid(),
        name: name,
        number: number,
      });
      return { contacts: list };
    });
  };

  handleDelete = id => {
    this.setState(prev => {
      const list = [...prev.contacts];
      const actualList = list.filter(item => item.id !== id);
      return { contacts: actualList };
    });
  };

  render() {
    return (
      <div>
        <h2 style={{ marginLeft: '30px' }}>Phonebook</h2>
        <ContactForm onSubmit={this.handleSubmit} />
        <h2 style={{ margin: '30px 0 0 30px' }}>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.handleChange} />
        <ContactList
          filter={this.state.filter}
          contacts={this.state.contacts}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}

export default ContactsBook;
