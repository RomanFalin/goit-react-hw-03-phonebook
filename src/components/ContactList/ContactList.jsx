import PropTypes from 'prop-types';
import {
  ContactBox,
  ContactItem,
  DeleteBtn,
  ContactNameTel,
} from './ContactList.styled';

const ContactList = ({ contacts, handleDeleteContact }) => {
  return (
    <ContactBox>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactNameTel>
              {name} : {number}
            </ContactNameTel>
            <DeleteBtn type="button" onClick={() => handleDeleteContact(id)}>
              Delete
            </DeleteBtn>
          </ContactItem>
        );
      })}
    </ContactBox>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
