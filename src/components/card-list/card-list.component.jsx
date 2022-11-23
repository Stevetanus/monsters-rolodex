import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    console.log(this.props.monster);
    console.log("render card-list");
    const { monsters } = this.props;

    return (
      <div className="card-list">
        {monsters.map((monster) => {
          return (
            <Card monster={monster} />
            // <div key={id} className="card-container">
            //   <img
            //     alt={`monster ${name}`}
            //     src={`https://robohash.org/${id}?set=set2&size=180x180`}
            //   />
            //   <h2>{name}</h2>
            //   <p>{email}</p>
            // </div>
          );
        })}
      </div>
    );
  }
}

export default CardList;
