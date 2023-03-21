import "./index.scss";

const Hero = ({ setCategory }) => {
  const onHandleClick = (value) => {
    setCategory(value);
  };

  return (
    <div className="Hero">
      <h1 className="Hero__title">Drinks 2.0</h1>
      <ul className="Hero__first__list">
        <li>🍸 Alcolici</li>
        <li>🍹 Analcolici</li>
        <li>🍷 Vini</li>
        <li>🍺 Birre</li>
        
      </ul>
      <hr className="Hero__space"/>
      <ul className="Hero__second__list">
        <li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
        <li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleClick("Beer")}>Beer</li>
        <li onClick={() => onHandleClick("Shot")}>Shot</li>
        <li onClick={() => onHandleClick("Punch / Party Drink")}>Punch</li>
        <li onClick={() => onHandleClick("Coffee / Tea")}>Coffee</li>
        <li onClick={() => onHandleClick("Soft Drink")}>Soft Drink</li>
        <li onClick={() => onHandleClick("Cocoa")}>Cocoa</li>
      </ul>
    </div>
  );
};

export default Hero;