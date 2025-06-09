import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from '../../redux/contacts/operations';
import css from './EditContactModal.module.css';
import toast from 'react-hot-toast';

export default function EditContactModal({ contact, onClose }) {
  const dispatch = useDispatch();
  const [name, setName] = useState(contact.name);
  const [number, setNumber] = useState(contact.number);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateContact({ id: contact.id, updatedData: { name, number } }))
      .unwrap()
      .then(() => {
        toast.success('Contact updated!');
        onClose();
      })
      .catch(() => toast.error('Failed to update contact.'));
  };

  return (
    <div className={css.backdrop} onClick={onClose}>
      <div className={css.modal} onClick={(e) => e.stopPropagation()}>
        <h2>Edit Contact</h2>
        <form onSubmit={handleSubmit} className={css.form}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          <label>
            Number
            <input
              type="text"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              required
            />
          </label>
          <div className={css.actions}>
            <button type="submit" className={css.save}>
              Save
            </button>
            <button type="button" onClick={onClose} className={css.cancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
