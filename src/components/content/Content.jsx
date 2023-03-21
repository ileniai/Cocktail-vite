import { useState, useEffect } from "react";
import { GET } from "../../utils/http";
import Card from "../card";
import "./index.scss";

const Content = ({data, setCocktailList, setGeneralModalContext}) => {

  useEffect(() => {
    GET("/search.php?f=d").then(({ drinks }) => {
      setCocktailList(() => drinks);
    });
  }, []);

  return (
    <div className="Content">
      {data.map((cocktail) => (
        <Card data={cocktail} 
        setGeneralModalContext={setGeneralModalContext}
         key={cocktail.idDrink}/>
      ))}
    </div>
  );
};

export default Content;