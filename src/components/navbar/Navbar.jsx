import styles from "./index.module.scss"

const Navbar = ({ setOrdinationVisibility }) =>{
  const onHandleClick = () => setOrdinationVisibility (true);


    return(
        <div className={styles.Navbar}>
          <div>
            <img className={styles.imgSfondo} src="https://images.pexels.com/photos/10121235/pexels-photo-10121235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" />
          </div>
          <button onClick={onHandleClick} className={styles.button}>prenota</button>
        <ul className={styles.list}>
          <li className={styles.listItem}><a href="#">Home</a></li>
          <li className={styles.listItem}><a href="#">Contatti</a></li>
          <li className={styles.section}><a className={styles.section1} href="#">Sezioni</a>
        <ul className={styles.menu}>
          <li className={styles.menuListItem}><a href="#">Distribuzione</a></li>
          <li className={styles.menuListItem}><a href="#">Sicurezza</a></li>
          <li className={styles.menuListItem}><a href="#">Attualità</a></li>
        </ul>
          </li>
        <li className={styles.listItem}><a href="#">Mi presento</a></li>
        </ul>
      </div>
    )
}

export default Navbar;