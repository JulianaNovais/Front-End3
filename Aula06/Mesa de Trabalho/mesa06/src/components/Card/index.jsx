function Card(props) {
  const { cidade } = props;

  if (cidade.country !== "BRA") {
    return null;
  }

  return (
    <li style={{ background: cidade.color }}>
      <h1>{cidade.city}</h1>
      <p>{cidade.id}</p>
      <p>{cidade.country}</p>
      <p>{cidade.population}</p>
    </li>
  );
}

export default Card;
