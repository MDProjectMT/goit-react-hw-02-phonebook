import styles from './ContactList.module.scss';
import PropTypes from 'prop-types';

const ContactList = ({ filter, contacts, onDelete }) => {
  return (
    <>
      <ul className={styles.ul}>
        {contacts
          .filter(item =>
            item.name.toLowerCase().includes(filter.toLowerCase())
          )
          .map(contact => (
            <li key={contact.id} className={styles.li}>
              {contact.name}: {contact.number}
              <button
                className={styles.button}
                type="submit"
                onClick={() => onDelete(contact.id)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};
export default ContactList;
