import styles from "./index.module.scss";

const Hero = ({ setCategory }) => {
  const onHandleClick = (value) => {
    setCategory(value);
  };

  return (
    <div className={styles.Hero}>
      <h1 className={styles.title}>Drinks 2.0</h1>
      <ul className={styles.firstList}>
        <li>🍸 Alcolici</li>
        <li>🍹 Analcolici</li>
        <li>🍷 Vini</li>
        <li>🍺 Birre</li>
        
      </ul>
      <hr className={styles.spaceList}/>
      <ul className={styles.secondList}>
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