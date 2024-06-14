import ContactsBook from './ContactsBook/ContactsBook';

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '10vh',
          paddingTop: '20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework-02 phonebook
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <ContactsBook />
      </div>
    </>
  );
};
