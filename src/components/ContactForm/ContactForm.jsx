import { nanoid } from 'nanoid';
import { Component } from 'react';
import styles from './ContactForm.module.scss';
import PropTypes from 'prop-types';

class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      number: '',
    };
  }

  handleChange = ev => {
    const { name, value } = ev.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = ev => {
    ev.preventDefault();
    const { name, number } = this.state;
    this.props.onSubmit(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const nameId = nanoid();
    const numberId = nanoid();
    return (
      <form className={styles.form} onSubmit={this.handleSubmit}>
        <label htmlFor={nameId}>Name</label>
        <input
          id={nameId}
          type="text"
          name="name"
          pattern="^([a-zA-Zа-яА-Я]+[ ]?[a-zA-Zа-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <label htmlFor={numberId}>Number</label>
        <input
          id={numberId}
          type="tel"
          name="number"
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="number"
          value={this.state.number}
          onChange={this.handleChange}
        />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
