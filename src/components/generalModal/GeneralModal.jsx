import {textDescription } from "../../utils/function";
import "./index.scss"

const GeneralModal = ({ data, setGeneralModalContext }) => {
  const onHandleClick = () =>
  setGeneralModalContext((prev) => ({
      ...prev,
      isVisible: false,
    }));

     return(
      <div className="GeneralModal">
      <div className="GeneralModal__text">
        <h1 className="GeneralModal__text--title">{data.strDrink}</h1>
        <p className="GeneralModal__text--name">{data.strCategory}</p>
        <p className="GeneralModal__text--glass">Glass: {data.strGlass}</p>
        <div className="GeneralModal__text--lists">
          <ul className="GeneralModal__text--ul1">
            <h3 className="GeneralModal__text--subtitle">Ingredients</h3>
            <li className="GeneralModal__text--descr">{data.strIngredient1}</li>
            <li>{data.strIngredient2}</li>
            <li>{data.strIngredient3}</li>
          </ul>
          <ul className="GeneralModal__text--ul2">
            <h3 className="GeneralModal__text--subtitle">Instructions</h3>
            <li>{textDescription (data.strInstructionsIT)}</li>
          </ul>
        </div>
        <button className="GeneralModal_close" onClick={onHandleClick}>X</button>
      </div>
      <div className="GeneralModal__image">
        <img src={data.strDrinkThumb} alt={data.idDrink} />
        <div className="GeneralModal__image--carousel">
          <button>Precedente</button>
          <button>Successivo</button>
        </div>
      </div>
    </div>
  );
};
 
export default GeneralModal
