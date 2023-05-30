import React, { useCallback } from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/solid';

type Props = {
  contact: TContact;
  index: number;
  onDelete: (contact: TContact) => {};
  onEdit: (contact: TContact) => void;
}

const ContactRow: React.FC<Props> = ({ contact, index, onDelete, onEdit }) => {
  const { firstName, lastName, isActive } = contact;

  const dispatch: Dispatch<any> = useDispatch();

  const handleEditContact = (contact: TContact) => onEdit(contact);

  const handleDeleteContact = useCallback(
    (contact: TContact) => dispatch(onDelete(contact)),
    [dispatch, onDelete]
  );

  return (
    <tr className="flex flex-col flex-no wrap sm:table-row mb-2 sm:mb-0 sm:hover:bg-slate-100">
      <td className="h-[48px] whitespace-nowrap border-grey-light border hidden sm:table-cell sm:border-0 p-3 font-medium">{index + 1}</td>
      <td className="h-[48px] whitespace-nowrap border-grey-light border sm:border-0 p-3">{firstName}</td>
      <td className="h-[48px] whitespace-nowrap border-grey-light border sm:border-0 p-3">{lastName}</td>
      <td className="h-[48px] whitespace-nowrap border-grey-light border sm:border-0 p-3">
        {isActive ? (
          <CheckCircleIcon className="h-6 w-6 text-emerald-500" />
        ) : (
          <XCircleIcon className="h-6 w-6 text-rose-500" />
        )}
      </td>
      <td className="h-[48px] whitespace-nowrap border-grey-light border sm:border-0 p-3 py-2 flex gap-x-2 justify-end">
        <button
          type="button"
          onClick={() => handleEditContact(contact)}
          className="bg-emerald-500 hover:bg-emerald-700 text-xs text-white font-semibold py-2 px-4 rounded"
        >
          Edit
        </button>
        <button
          type="button"
          onClick={() => handleDeleteContact(contact)}
          className="bg-rose-500 hover:bg-rose-700 text-xs text-white font-semibold py-2 px-4 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ContactRow;
