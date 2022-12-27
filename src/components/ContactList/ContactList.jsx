import React from 'react';
import PropTypes from 'prop-types';
import { BsTelephoneForward, BsPersonX } from 'react-icons/bs';
import {
  FilteredList,
  FilteredListItem,
  DeleteBtn,
} from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <FilteredList>
      {contacts.map(({ id, name, number }) => {
        return (
          <FilteredListItem key={id}>
            <p>
              <BsTelephoneForward />
              {name + ': ' + number}{' '}
            </p>
            <DeleteBtn type="button" onClick={() => onDeleteContact(id)}>
              delete <BsPersonX size={14} />
            </DeleteBtn>
          </FilteredListItem>
        );
      })}
    </FilteredList>
  );
};

export default ContactList;

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
