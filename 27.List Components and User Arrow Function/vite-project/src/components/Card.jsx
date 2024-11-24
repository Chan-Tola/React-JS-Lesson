const Card = ({ id, image, name, sex, phone_num }) => {
  return (
    <>
      <div className="bg-gray-200 p-10  w-full grid place-items-center gap-1">
        <h2>{id}</h2>
        <img src={image} className="w-[250px] rounded-full" />
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="font-bold">{sex}</p>
        <p className="text-xl">{phone_num}</p>
      </div>
    </>
  );
};

export default Card;
