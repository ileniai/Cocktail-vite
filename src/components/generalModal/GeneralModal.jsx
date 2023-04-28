import {textDescription } from "../../utils/function";
import styles from "./index.module.scss";

const GeneralModal = ({ data, setGeneralModalContext, filteredList }) => {
  const onHandleClick = () =>
  setGeneralModalContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

    const onHandleRightClick = ()=>
    setGeneralModalContext((prev)=>({
      ...prev,
      payload:filteredList[prev.positionList+1],
      positionList:prev.positionList+1,
    }))

    const onHandleLeftClick = ()=>
    setGeneralModalContext((prev)=>({
      ...prev,
      payload:filteredList[prev.positionList-1],
      positionList:prev.positionList-1,
    }))

    console.log(data)

    
     return(
      <div className={styles.GeneralModal}>
      <div className={styles.text}>
        <h1 className={styles.titleText}>{data.payload.strDrink}</h1>
        <p className={styles.categoryName}>{data.payload.strCategory}</p>
        <p className={styles.typeGlass}>Glass: {data.payload.strGlass}</p>
        <div className={styles.textList}>
          <ul className={styles.textListUl}>
            <h3 className={styles.subtitle}>Ingredients</h3>
            <li>{data.payload.strIngredient1}</li>
            <li>{data.payload.strIngredient2}</li>
            <li>{data.payload.strIngredient3}</li>
          </ul>
          <ul className={styles.textListUl2}>
            <h3>Instructions</h3>
            <li>{textDescription (data.payload.strInstructionsIT)}</li>
          </ul>
        </div>
        <button className={styles.btnClose} onClick={onHandleClick}>X</button>
      </div>
      <div className={styles.image}>
        <img src={data.payload.strDrinkThumb} alt={data.payload.idDrink} />
        <div className={styles.carouselBtn}>
          <button onClick={onHandleLeftClick}disabled={data.payload===0}>Precedente</button>
          <button onClick={onHandleRightClick}disabled={data.payload.positionList===filteredList.length-1}>Successivo</button>
        </div>
      </div>
    </div>
  );
};
 
export default GeneralModal
