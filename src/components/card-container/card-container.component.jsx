import { Component } from "react";
import "./card-container.styles.css";

class CardContainer extends Component {
  render() {
    const { id, name, email } = this.props.monster;
    return (
      <div className="card-container" >
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=300x300`}
        />
        <h2 className="monster-name">{name}</h2>
        <a className="monster-email" href={`mailto:${email.toLocaleLowerCase()}`}>{email.toLocaleLowerCase()}</a>
      </div>
    );
  }
}

export default CardContainer;
