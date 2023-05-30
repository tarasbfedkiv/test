import * as actionTypes from './actionTypes';

// Define the initial state of the contacts
const initialState: ContactState = {
  contacts: [
    { id: 1, firstName: 'John', lastName: 'Doe', isActive: true },
    { id: 2, firstName: 'Liana', lastName: 'Cruz', isActive: false },
    { id: 3, firstName: 'Stephen', lastName: 'Colbert', isActive: true }
  ],
};

/**
 * Define the reducer function to handle contact-related actions
 * @param state
 * @param action
 */
const reducer = (
  state: ContactState = initialState,
  action: ContactAction
): ContactState => {
  switch (action.type) {
    case actionTypes.ADD_CONTACT: {
      // Create a new contact with a unique ID
      const newContact: TContact = {
        id: Math.random(), // not really unique
        firstName: action.contact.firstName,
        lastName: action.contact.lastName,
        isActive: action.contact.isActive
      };

      // Return a new state with the new contact added to the contacts array
      return {
        ...state,
        contacts: state.contacts.concat(newContact)
      };
    }
    case actionTypes.REMOVE_CONTACT: {
      // Filter out the contact to be removed from the contacts array
      const updatedContacts: TContact[] = state.contacts.filter(
        (contact) => contact.id !== action.contact.id
      );

      // Return a new state with the updated contacts array
      return {
        ...state,
        contacts: updatedContacts
      };
    }
    case actionTypes.EDIT_CONTACT: {
      // Map through the contacts array and update the contact with matching ID
      const updatedContacts: TContact[] = state.contacts.map((contact) => {
        if (contact.id === action.contact.id) {
          return action.contact; // Replace the contact with the updated contact
        } else {
          return contact; // Keep the other contacts unchanged
        }
      });

      // Return a new state with the updated contacts array
      return {
        ...state,
        contacts: updatedContacts
      };
    }
  }

  // If none of the action types match, return the current state
  return state;
};

export default reducer;
