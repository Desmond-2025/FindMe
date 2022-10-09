function Card(props) {
  return (
    <div className="wrapper">
      <div className="top">
        <h3 className="name">{props.name}</h3>
        <h4 className="school">{props.school}</h4>
        <h5 className="major">{props.Major}</h5>
      </div>
      <div className="bottom">
        <p className="bottom-info">{props.Level}</p>
        <p className="bottom-info">{props.Interests}</p>
        <p className="bottom-info">{props.Location}</p>
        <p className="bottom-info">{props.Email}</p>
      </div>
    </div>
  );
}

export default Card;
