import * as actionTypes from './actionTypes';

/**
 * Simulate an HTTP request with a delay of 500ms
 * @param action
 */
export const simulateHttpRequest = (action: ContactAction) => {
  return (dispatch: DispatchType) => setTimeout(() => dispatch(action), 500);
};

/**
 * Action creator for adding a contact
 * @param contact
 */
export const addContact = (contact: TContact) => {
  // Create the action object
  const action: ContactAction = {
    type: actionTypes.ADD_CONTACT,
    contact
  };

  // Simulate an HTTP request and dispatch the action
  return simulateHttpRequest(action);
};

/**
 * Action creator for removing a contact
 * @param contact
 */
export const removeContact = (contact: TContact) => {
  // Create the action object
  const action: ContactAction = {
    type: actionTypes.REMOVE_CONTACT,
    contact
  };

  // Simulate an HTTP request and dispatch the action
  return simulateHttpRequest(action);
};

/**
 * Action creator for editing a contact
 * @param contact
 */
export const editContact = (contact: TContact) => {
  // Create the action object
  const action: ContactAction = {
    type: actionTypes.EDIT_CONTACT,
    contact
  };

  // Simulate an HTTP request and dispatch the action
  return simulateHttpRequest(action);
};
