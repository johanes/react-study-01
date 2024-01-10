import "./card-container.styles.css";

const CardContainer = ({monster}) => {
  const { id, name, email } = monster;
  return <div className="card-container">
    <img
      alt={`monster ${name}`}
      src={`https://robohash.org/${id}?set=set2&size=180x180`}
    />
    <h2 className="monster-name">{name}</h2>
    <a className="monster-email" href={`mailto:${email.toLocaleLowerCase()}`}>
      {email.toLocaleLowerCase()}
    </a>
  </div>;
};

export default CardContainer;
