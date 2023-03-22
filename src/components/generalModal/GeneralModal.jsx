import {textDescription } from "../../utils/function";
import styles from "./index.module.scss";

const GeneralModal = ({ data, setGeneralModalContext }) => {
  const onHandleClick = () =>
  setGeneralModalContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

     return(
      <div className={styles.GeneralModal}>
      <div className={styles.text}>
        <h1 className={styles.titleText}>{data.strDrink}</h1>
        <p className={styles.categoryName}>{data.strCategory}</p>
        <p className={styles.typeGlass}>Glass: {data.strGlass}</p>
        <div className={styles.textList}>
          <ul className={styles.textListUl}>
            <h3 className={styles.subtitle}>Ingredients</h3>
            <li>{data.strIngredient1}</li>
            <li>{data.strIngredient2}</li>
            <li>{data.strIngredient3}</li>
          </ul>
          <ul className={styles.textListUl2}>
            <h3>Instructions</h3>
            <li>{textDescription (data.strInstructionsIT)}</li>
          </ul>
        </div>
        <button className={styles.btnClose} onClick={onHandleClick}>X</button>
      </div>
      <div className={styles.image}>
        <img src={data.strDrinkThumb} alt={data.idDrink} />
        <div className={styles.carouselBtn}>
          <button>Precedente</button>
          <button>Successivo</button>
        </div>
      </div>
    </div>
  );
};
 
export default GeneralModal
