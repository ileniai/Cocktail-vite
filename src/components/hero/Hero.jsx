//import styles from "./index.module.scss";
import styled from "styled-components";


const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HeroSlide = styled.div`
  justify-content: flex-start;
  width: 450px;
  height: 250px;
  border-radius: 6px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.35);
  overflow: scroll;
  margin-top: 20px;

 & img{
  width: 100%;
  height: 230px;
  border-radius: 6px;
  object-fit: cover;
 } 
`;


const HeroTitle = styled.h1`
  position: absolute;
  font-size: 3.6rem;
  font-family: cursive;
  margin-bottom: 0;
  transform: translateY(-300px);
`;

const SecondList = styled.ul`
  display: flex;
  gap: 7px;
  padding: 0;
  margin-top: 40px;
  margin-bottom: 0;
  list-style-type: none;

  & li {
    padding: 4px 8px;
    cursor: pointer;

  &:hover {
    background-color: #779757;
    color: #ebe9e9;
    }
  }
`;

const Hero = ({ setCategory }) => {
  const onHandleClick = (value) => {
    setCategory(value);
  };

  return(
    <HeroWrapper>
      <HeroSlide>
        <img src="https://images.pexels.com/photos/209590/pexels-photo-209590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image1"/>
        <img src="https://images.pexels.com/photos/3039671/pexels-photo-3039671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image2"/>
        <img src="https://images.pexels.com/photos/3650616/pexels-photo-3650616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image3"/>
        <img src="https://images.pexels.com/photos/14356266/pexels-photo-14356266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image4"/>
        <img src="https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image5"/>
      </HeroSlide>
      <HeroTitle >Drinks 2.0</HeroTitle>
      <SecondList>
        <li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
        <li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleClick("Shot")}>Shot</li>
        <li onClick={() => onHandleClick("Punch / Party Drink")}>Punch</li>
        <li onClick={() => onHandleClick("Coffee / Tea")}>Coffee</li>
        <li onClick={() => onHandleClick("Other / Unknown")}>Other</li>
      </SecondList>
    </HeroWrapper>
  )

  /*return (
    <div className={styles.Hero}>
      <div className={styles.Slide}>
      <img className={styles.image} src="https://images.pexels.com/photos/209590/pexels-photo-209590.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image1"/>
      <img className={styles.image} src="https://images.pexels.com/photos/3039671/pexels-photo-3039671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image2"/>
      <img className={styles.image} src="https://images.pexels.com/photos/3650616/pexels-photo-3650616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image3"/>
      <img className={styles.image} src="https://images.pexels.com/photos/14356266/pexels-photo-14356266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image4"/>
      <img className={styles.image} src="https://images.pexels.com/photos/1123260/pexels-photo-1123260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="image5"/>
      </div>
      <h1 className={styles.title}>Drinks 2.0</h1>

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
  );*/
};

export default Hero;