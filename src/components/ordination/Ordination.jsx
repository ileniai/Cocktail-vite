
import styles from "./index.module.scss";

const Ordination = ({ setOrdinationVisibility, setPopupVisibility, 
  onHandleTextInput, surname, onHandleDateInput, date, onHandleTimeInput, hour }) => {
    
    const onHandleCloseModal = () => {
      setOrdinationVisibility(false);
    };
  
    const onHandleSubmit = (e) => {
      e.preventDefault();
      setOrdinationVisibility(false);
      setPopupVisibility(true);
    };

    return (
        <div className={styles.Ordination}>
          <div className={styles.overlay}></div>
          <div className={styles.content}>
            <h1>Prenota il tuo tavolo</h1>
            <form className={styles.form} onSubmit={onHandleSubmit}>
              <label htmlFor="text">Cognome</label>
              <input
                id="text"
                name="text"
                type="text"
                value={surname}
                onChange={onHandleTextInput}
                placeholder="Surname"
                required
              />
              <label htmlFor="date">Scegli data</label>
              <input
                id="date"
                name="date"
                type="date"
                value={date}
                onChange={onHandleDateInput}
                required
              />
              <label htmlFor="time">Scegli l'ora</label>
              <input
                id="time"
                name="time"
                type="time"
                value={hour}
                onChange={onHandleTimeInput}
                required
              />
              <input type="submit" value="Prenota!" />
            </form>
            <button className={styles.btnClose} onClick={onHandleCloseModal}>x</button>
          </div>
        </div>
      );
    };

export default Ordination