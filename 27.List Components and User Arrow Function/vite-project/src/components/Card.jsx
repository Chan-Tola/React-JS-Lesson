import "./CardStyle.css";
const Card = ({ id, image, name, sex, phone_num, children }) => {
  return (
    <>
      <div className="container">
        <h2>{id}</h2>
        <img src={image} />
        <h2>{name}</h2>
        <p>{sex}</p>
        <p>{phone_num}</p>
        {children}
      </div>
    </>
  );
};

export default Card;
