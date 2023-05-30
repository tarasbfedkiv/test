type TContact = {
  id?: number; // The ID is optional, as it might not be present when adding a new contact
  firstName: string;
  lastName: string;
  isActive: boolean;
}

type ContactState = {
  contacts: TContact[];
}

type ContactAction = {
  type: string; // The type property represents the action type
  contact: TContact; // The contact property represents the contact data for the action
}

type DispatchType = (args: ContactAction) => ContactAction;
