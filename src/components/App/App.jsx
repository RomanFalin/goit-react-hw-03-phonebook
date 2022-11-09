import { Component } from 'react';
import Form from 'components/Form/Form';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { SectionBox, FormBox } from './App.styled';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  formSubmitHandler = data => {
    if (this.state.contacts.find(contact => contact.name === data.name)) {
      return alert(`${data.name} is already in contacts`);
    } else {
      this.setState(prevState => ({ contacts: [...prevState.contacts, data] }));
    }
  };

  handleFilterInput = event => {
    const { value } = event.target;
    this.setState({ filter: value });
  };

  filterContacts = () => {
    const value = this.state.filter;
    return this.state.contacts.filter(contact => {
      let nameLowerCase = contact.name.toLowerCase();
      return nameLowerCase.includes(value.toLowerCase());
    });
  };

  deleteUserFromList = userId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(item => item.id !== userId),
    }));
  };

  render() {
    return (
      <SectionBox>
        <FormBox>
          <h1>Phonebook</h1>
          <Form onSubmit={this.formSubmitHandler} />
        </FormBox>
        <div>
          <h2>Contacts List</h2>
          <Filter
            handleInputChange={this.handleFilterInput}
            filterValue={this.state.filter}
          />
          <ContactList
            contacts={this.filterContacts()}
            handleDeleteContact={this.deleteUserFromList}
          />
        </div>
      </SectionBox>
    );
  }
}

export default App;
