import ContactList from './components/ContactList/ContactList';
// import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import './App.css';
import Logo from './components/Logo/Logo';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from './redux/operations';
import Loader from './components/Loader/Loader';
import { selectContacts, selectError, selectLoading } from './redux/selectors';

function App() {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Logo />
      <SearchBox />
      {/* <ContactForm /> */}
      {loading && <Loader />}
      {error && <p>{error}</p>}
      {contacts.length > 0 && <ContactList />}
    </>
  );
}

export default App;
