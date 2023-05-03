import styled from "styled-components";


const HeroWrapper = styled.div`
  position:relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
      <HeroTitle >Drinks 2.0</HeroTitle>
      <SecondList>
        <li onClick={() => onHandleClick("Ordinary Drink")}>Ordinary Drink</li>
        <li onClick={() => onHandleClick("Cocktail")}>Cocktail</li>
        <li onClick={() => onHandleClick("Shot")}>Shot</li>
        <li onClick={() => onHandleClick("Punch / Party Drink")}>Punch</li>
        <li onClick={() => onHandleClick("Coffee / Tea")}>Coffee</li>
      </SecondList>
    </HeroWrapper>
  )
};

export default Hero;