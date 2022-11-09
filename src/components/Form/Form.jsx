import PropTypes from 'prop-types';
import { Component } from 'react';
import { customAlphabet } from 'nanoid';
import { ContactForm, InputName, SubmitBtn } from './Form.styled';
import { InputPlace } from 'components/Filter/Filter.styled';

const nanoid = customAlphabet('1234567890abcdef', 10);

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const id = nanoid();
    this.props.onSubmit({ id, ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <ContactForm onSubmit={this.handleSubmit}>
        <label>
          <InputName>Name</InputName>
          <InputPlace
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={this.handleInputChange}
            value={this.state.name}
          />
        </label>
        <label>
          <InputName>Phone Number</InputName>
          <InputPlace
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            onChange={this.handleInputChange}
            value={this.state.number}
          />
        </label>
        <SubmitBtn type="submit">Add contact</SubmitBtn>
      </ContactForm>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
