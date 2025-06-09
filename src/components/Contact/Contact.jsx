import css from './Contact.module.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { deleteContact } from '../../redux/contacts/operations';
import DeleteContactModal from '../DeleteContactModal/DeleteContactModal';
import { FaUser, FaPhone } from 'react-icons/fa';
import toast from 'react-hot-toast';
import EditContactModal from '../EditContactModal/EditContactModal';

export default function Contact({ data: { id, name, number } }) {
  const dispatch = useDispatch();
  const [isDeleteOpen, setDeleteOpen] = useState(false);
  const [isEditOpen, setEditOpen] = useState(false);

  const handleDeleteClick = () => {
    setDeleteOpen(true);
  };

  const handleConfirmDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success('Contact deleted!'))
      .catch(() => toast.error('Failed to delete contact.'));
    setDeleteOpen(false);
  };

  return (
    <div className={css.container}>
      <div className={css.info}>
        <p className={css.name}>
          <FaUser />
          {name}
        </p>

        <p className={css.number}>
          <FaPhone />
          {number}
        </p>
      </div>
      <div className={css.actions}>
        <button className={css.btn} onClick={handleDeleteClick}>
          Delete
        </button>
        <button className={css.btn} onClick={() => setEditOpen(true)}>
          Edit
        </button>
      </div>

      {isDeleteOpen && (
        <DeleteContactModal
          isOpen={true}
          onConfirm={handleConfirmDelete}
          onCancel={() => setDeleteOpen(false)}
        />
      )}

      {isEditOpen && (
        <EditContactModal
          contact={{ id, name, number }}
          onClose={() => setEditOpen(false)}
        />
      )}
    </div>
  );
}
