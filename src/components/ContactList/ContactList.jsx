import styles from './ContactList.module.scss';

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

export default ContactList;
