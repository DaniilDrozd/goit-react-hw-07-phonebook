import ContactList from './ContactList/ContactList';
import  ContactForm  from './ContactForm/ContactForm';
import  Filter from './Filter/Filter';
import css from './app.module.css'


export const App = () => {
  return (
    <div className={css.appContainer}>
      <ContactForm />
      <h2 className={css.h2Style}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}; 
export default App;