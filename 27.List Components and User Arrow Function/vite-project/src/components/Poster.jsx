import Card from "./Card";
import "./PosterStyle.css";
const InforUser = [
  {
    id: 1,
    image: "/public/Images/p1.jpg", // Corrected path
    name: "User 1",
    sex: "d",
    phone_num: 123445,
  },
  {
    id: 2,
    image: "/public/Images/p2.jpg",
    name: "User 2",
    sex: "f",
    phone_num: 123445,
  },
  {
    id: 3,
    image: "../../public/Images/p3.jpg",
    name: "User 3",
    sex: "f",
    phone_num: 123445,
  },
  {
    id: 4,
    image: "/public/Images/p4.jpg",
    name: "User 4",
    sex: "f",
    phone_num: 123445,
  },
  {
    id: 5,
    image: "/public/Images/p5.jpg",
    name: "User 5",
    sex: "d",
    phone_num: 123445,
  },
];
const Poster = () => {
  return (
    <>
      <div className="ContainerMain">
        {InforUser.map((item) => (
          <Card
            id={item.id}
            image={item.image}
            name={item.name}
            sex={item.sex}
            phone_num={item.phone_num}
          />
        ))} 
      </div>
    </>
  );
};

export default Poster;
