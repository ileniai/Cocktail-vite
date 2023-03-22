import styles from "./index.module.scss"

const Navbar = () =>{


    return(
        <div className={styles.Navbar}>
          <div>
            <img className={styles.imgSfondo} src="https://images.pexels.com/photos/10121235/pexels-photo-10121235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="img" />
          </div>
          <div>
            <img src="https://img.icons8.com/plasticine/512/menu.png" 
            className={styles.hamburger} 
            alt="image_menu" />
            
          </div>
        <ul className={styles.list}>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contattami</a>
        </li>
        <li className={styles.section}><a href="#">Sezioni</a>
        <ul className={styles.menu}>
        <li><a href="#">Distribuzione</a></li>
        <li><a href="#">Sicurezza</a></li>
        <li><a href="#">Attualità</a></li>
        </ul>
        </li>
        <li><a href="#">Mi presento</a></li>
        </ul>
      </div>
    )
}

export default Navbar;