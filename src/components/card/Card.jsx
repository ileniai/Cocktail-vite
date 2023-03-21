
import "./index.scss";

const Card = ({ data, setGeneralModalContext}) => {

  const onHandbtnleClick = () =>
  setGeneralModalContext((prev) => ({
    ...prev,
    payload: data,
    isVisible: true,
  }));

  return (
    <div className="Card">
      <img src={data.strDrinkThumb} alt={data.strDrink} />
      <div className="Card__text">
        <h2 className="Card__text-title">{data.strDrink}</h2>
        <ul>
          <li>{data.strIngredient1}</li>
          <li>{data.strIngredient2}</li>
          <li>{data.strIngredient3}</li>
          <button onClick={onHandbtnleClick} className="Card_btn">Instructions</button>
         
        </ul>
      </div>
    </div>
  );
};

export default Card;