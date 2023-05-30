import React, { useCallback, useState } from 'react';
import { Dispatch } from 'redux';
import { useSelector, shallowEqual, useDispatch } from "react-redux"

import CreateContactForm from './CreateContactForm';
import ContactsList from './ContactsList';
import Modal from '../../Modal';
import { useModal } from '../../../lib/hooks/useModal';
import { addContact, editContact } from '../../../store/contact/actionCreators';

const ContactScreen = () => {
  const [contactToEdit, setContactToEdit] = useState<TContact | undefined>(undefined);

  const dispatch: Dispatch<any> = useDispatch();

  const contacts: readonly TContact[] = useSelector(
    (state: ContactState) => state.contacts,
    shallowEqual
  );

  const { isOpen: isModalOpen, toggle: onToggleModal } = useModal();

  const handleToggleModal = (contact: TContact) => {
    setContactToEdit(contact);
    onToggleModal();
  };

  const handleEditContact = useCallback(
    (contact: TContact) => {
      dispatch(editContact(contact));
      onToggleModal();
    },
    [dispatch, onToggleModal]
  );

  const handleAddContact = useCallback(
    (contact: TContact) => {
      dispatch(addContact(contact));
      onToggleModal();
    },
    [dispatch, onToggleModal]
  );

  return (
    <>
      <div className="flex justify-between">
        <h2 className="text-2xl font-medium">Contacts</h2>
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-semibold py-2 px-4 rounded"
          onClick={onToggleModal}
        >
          Create Contact
        </button>
      </div>

      {contacts.length > 0 ? (
        <ContactsList contacts={contacts} onEdit={handleToggleModal} />
      ) : (
        <p className="py-2 text-sm text-slate-500">No contacts found. Please add contact from <strong>Create Contact</strong> button</p>
      )}

      <Modal isOpen={isModalOpen} toggle={onToggleModal}>
        <h2 className="text-lg font-medium mb-4">Create contact</h2>
        <CreateContactForm onAddContact={handleAddContact} onEditContact={handleEditContact} contactToEdit={contactToEdit} />
      </Modal>
    </>
  );
};

export default ContactScreen;
