import React, { useState } from 'react';

const initialContactState: TContact = {
  firstName: '',
  lastName: '',
  isActive: false
};

type Props = {
  contactToEdit?: TContact;
  onAddContact: (contact: TContact | any) => void;
  onEditContact: (contact: TContact | any) => void;
};

const CreateContactForm: React.FC<Props> = ({ contactToEdit, onEditContact, onAddContact }) => {
  const [contact, setContact] = useState(contactToEdit ?? initialContactState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (contactToEdit) {
      onEditContact({ ...contactToEdit, ...contact });
    } else {
      onAddContact(contact);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setContact({
      ...contact,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setContact({
      ...contact,
      [e.currentTarget.name]: e.currentTarget.value,
      isActive: e.target.value === 'active'
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="firstName">First Name</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="firstName"
          type="text"
          value={contact.firstName}
          placeholder="First Name"
          name="firstName"
          onChange={handleTextChange}
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-medium mb-2" htmlFor="lastName">Last Name</label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="lastName"
          type="text"
          value={contact.lastName}
          name="lastName"
          placeholder="Last Name"
          onChange={handleTextChange}
        />
      </div>

      <div className="flex gap-x-6 mb-4">
        <p className="block text-gray-700 text-sm font-medium mb-2">Status</p>

        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <input
              id="radio-1"
              type="radio"
              value="active"
              name="status"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              checked={contact.isActive}
              onChange={handleRadioChange}
            />
            <label htmlFor="radio-1" className="ml-2 text-sm text-gray-900 cursor-pointer">
              Active
            </label>
          </div>
          <div className="flex items-center">
            <input
              id="radio-2"
              type="radio"
              value="inactive"
              name="status"
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"
              checked={!contact.isActive}
              onChange={handleRadioChange}
            />
            <label htmlFor="radio-2" className="ml-2 text-sm text-gray-900 cursor-pointer">
              Inactive
            </label>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-xs text-white font-bold py-2 px-4 rounded disabled:opacity-25 disabled:cursor-not-allowed"
          type="submit"
          disabled={!contact.firstName.length || !contact.lastName.length}
        >
          Save Contact
        </button>
      </div>
    </form>
  );
};

export default CreateContactForm;
