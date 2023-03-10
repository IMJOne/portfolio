import styles from '../styles/Toast.module.css';
import { AiOutlineClose } from 'react-icons/ai';

export default function Toast({ toasts, closeToast }) {
  return (
    <div className={`${styles.container} `}>
      {toasts.map(({ id, text }) => (
        <div className={styles.popup} key={id} onClick={() => closeToast(id)}>
          <p className={styles.message}>π {text.includes('@') ? 'μ΄λ©μΌμ΄' : 'μ νλ²νΈκ°'} λ³΅μ¬λμμ΅λλ€.</p>
          <p className={styles.description}>{text}</p>
          <AiOutlineClose className={styles.close} />
        </div>
      ))}
    </div>
  );
}
