import { FaUser, FaPhoneAlt } from "react-icons/fa";
import css from "./Contact.module.css";

function Contact({ name, number, onDelete }) {
  return (
    <li className={css.contactItem}>
      <div className={css.contactInfo}>
        <div className={css.contactElement}>
          <FaUser className={css.contactIcon} />
          <span>{name}</span>
        </div>
        <div>
          <FaPhoneAlt className={css.phoneIcon} />
          <span>{number}</span>
        </div>
      </div>
      <button className={css.deleteBtn} onClick={onDelete}>
        Delete
      </button>
    </li>
  );
}

export default Contact;
