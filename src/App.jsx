import { useState } from "react";
//import { GET } from "./utils/http";
import { filteredList } from "./utils/function";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import GeneralModal from "./components/generalModal"
import Footer from "./components/footer";
import Ordination from "./components/ordination";
import Popup from "./components/popup";
import styles from "./App.module.scss";


function App() {
const [cocktailList, setCocktailList] = useState([]);
  const [category, setCategory] = useState("Cocktail");

  const [surname, setSurname] = useState("");
  const [date, setDate] = useState("");
  const [hour, setHour] = useState("");

  const onHandleDateInput = (e) => setDate(e.target.value);
  const onHandleTimeInput = (e) => setHour(e.target.value);
  const onHandleTextInput = (e) => setSurname(e.target.value);

  const [isPopupVisibile, setPopupVisibility] = useState(false);

  const [ordinationIsVisibile, setOrdinationVisibility] = useState(false);


  const [generalModalContext, setGeneralModalContext] = useState({
    isVisible: false,
    payload: {},
    positionList:null,
  });

  const onHandleClosePopUp = ()=>{
    setPopupVisibility(false)
  }

  return (
    <div className={styles.App}>
      <Navbar 
      setOrdinationVisibility={setOrdinationVisibility}
      />
      
      {generalModalContext.isVisible ? (
        <GeneralModal
          data={generalModalContext}
          setGeneralModalContext={setGeneralModalContext}
          filteredList={filteredList(cocktailList, "strCategory", category)}
        />
      ) : (
        <>
        {isPopupVisibile && (
        <Popup>
          <button onClick={onHandleClosePopUp}
          className={styles.btnClosePopup}>x</button>
          <h3 className={styles.titlePopup}>Grazie per aver prenotato con noi!</h3>
          <p>Il tavolo a nome {" "}
          <strong>{surname}</strong> <strong> è stato prenotato per giorno{" "} 
            {date.split("-").reverse().join("-")}</strong> {" "}
           alle ore {" "}<strong>{hour}</strong>
          </p>
        </Popup>
           )}
        {ordinationIsVisibile && (
            <Ordination setOrdinationVisibility={setOrdinationVisibility} 
            setPopupVisibility={setPopupVisibility}
            onHandleTextInput={onHandleTextInput}
            onHandleDateInput={onHandleDateInput}
            onHandleTimeInput={onHandleTimeInput}
            surname={surname}
            date={date}
            hour={hour}

            />
          )}
      <Hero setCategory={setCategory} />
      <Content data={filteredList(cocktailList, "strCategory", category)} 
      setCocktailList={setCocktailList}
      setGeneralModalContext={setGeneralModalContext}
      />
      <Footer />
      </>
      )}
    </div>
  );
}


export default App;
