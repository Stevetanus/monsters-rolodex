import Card from "../card/card.component";
import "./card-list.styles.css";
import { Monster } from "../../App";

type CardListProps = {
  monsters: Monster[];
};

const CardList = (props: CardListProps) => {
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => {
        return <Card monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
