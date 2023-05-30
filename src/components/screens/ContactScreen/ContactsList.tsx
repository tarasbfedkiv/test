import React from 'react';

import ContactRow from './ContactRow';
import { removeContact } from '../../../store/contact/actionCreators';

type Props = {
  contacts: readonly TContact[];
  onEdit: (contact: TContact) => void;
}

const ContactsList: React.FC<Props> = ({ contacts, onEdit }) => {
  const tableHeadCellBaseClasses = 'h-[48px] overflow-hidden whitespace-nowrap p-3 text-left';

  return (
    <div className="flex items-center justify-center mt-8">
      <table className="w-full flex flex-row flex-no-wrap sm:bg-white overflow-hidden">
        <thead className="font-medium">
          {/* Match number of head rows with number of body rows for mobile view */}
          {contacts.map((contact: TContact) => (
            <tr key={`tr${contact.id}`} className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 bg-slate-100">
              <th scope="col" className={`${tableHeadCellBaseClasses} !border-b-0 sm:border-t-0 hidden sm:table-cell`}>
                #
              </th>
              <th scope="col" className={`${tableHeadCellBaseClasses} !border-b-0 border-t sm:border-t-0 border-l sm:border-l-0`}>
                First Name
              </th>
              <th scope="col" className={`${tableHeadCellBaseClasses} !border-b-0 border-t sm:border-t-0 border-l sm:border-l-0`}>
                Last Name
              </th>
              <th scope="col" className={`${tableHeadCellBaseClasses} !border-b-0 border-t sm:border-t-0 border-l sm:border-l-0`}>
                Active
              </th>
              <th scope="col" className={`${tableHeadCellBaseClasses} !border-b !sm:border-b-0 border-t sm:border-t-0 border-l sm:border-l-0 sm:text-right`}>
                Actions
              </th>
            </tr>
          ))}
        </thead>

        <tbody className="sm:border-t flex-1 sm:flex-none">
          {contacts.map((contact: TContact, index: number) => (
            <ContactRow contact={contact} onDelete={removeContact} onEdit={onEdit} key={contact.id} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ContactsList;
