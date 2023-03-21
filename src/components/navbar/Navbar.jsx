import "./index.scss"

const Navbar = () =>{
    return(
        <div className="Navbar">
        <ul className="Navbar_list">
          <li>Home</li>
          <li>About</li>
          <li>Contacts</li>
        </ul>
        <img className="image"
          src="https://img.icons8.com/office/512/cocktail.png"
          alt="logo"
        />
        <button className="Navbar_btn">prenota</button>
      </div>
    )
}

export default Navbar;