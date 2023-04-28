import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Card from "../card";
import styles from "./index.module.scss";

const Content = ({data, setCocktailList, setGeneralModalContext}) => {

  useEffect(() => {
    GET("/search.php?f=d").then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, []);

  return (
    <div className={styles.Content}>
      {data.map((cocktail, i) => (
        <Card data={{...cocktail, positionList:i}} 
        setGeneralModalContext={setGeneralModalContext}
         key={cocktail.idDrink}/>
      ))}
    </div>
  );
};

export default Content;