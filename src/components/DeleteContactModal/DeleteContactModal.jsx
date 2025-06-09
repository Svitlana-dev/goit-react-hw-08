import css from './DeleteContactModal.module.css';

export default function Modal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className={css.backdrop}>
      <div className={css.modal}>
        <h2>Delete contact?</h2>
        <p>This action cannot be undone.</p>
        <div className={css.actions}>
          <button onClick={onConfirm} className={css.confirm}>
            Confirm
          </button>
          <button onClick={onCancel} className={css.cancel}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
