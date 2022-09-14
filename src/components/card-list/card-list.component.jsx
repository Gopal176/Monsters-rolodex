import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;

    return (
      <div class="card-list">
        {monsters.map((monster) => {
          return <Card monster={monster} />;

          // <h1 key={monster.id}>{monster.name}</h1>
        })}
      </div>
    );
  }
}

export default CardList;
