import styles from "./index.module.scss";

const Card = ({ data, setGeneralModalContext}) => {

  const onHandbtnleClick = () =>
  setGeneralModalContext((prev) => ({
    ...prev,
    payload: data,
    isVisible: true,
    positionList:data.positionList,
  }));

  return (
    <div className={styles.Card}>
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <div className={styles.text}>
        <h2 className={styles.titleText}>{data.strDrink}</h2>
        <ul>
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
          <button onClick={onHandbtnleClick} className={styles.btn}>Instructions</button>
         
        </ul>
      </div>
    </div>
  );
};

export default Card;