import { useState } from "react";
//import { GET } from "./utils/http";
import { filteredList } from "./utils/function";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Content from "./components/content";
import GeneralModal from "./components/generalModal"
import Footer from "./components/footer";
import styles from "./App.module.scss";

function App() {
const [cocktailList, setCocktailList] = useState([]);
  const [category, setCategory] = useState("Cocktail");

  const [generalModalContext, setGeneralModalContext] = useState({
    isVisible: false,
    payload: {},
  });


  return (
    <div className={styles.App}>
      <Navbar />
      {generalModalContext.isVisible ? (
        <GeneralModal
          data={generalModalContext.payload}
          setGeneralModalContext={setGeneralModalContext}
        />
      ) : (
        <>
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
