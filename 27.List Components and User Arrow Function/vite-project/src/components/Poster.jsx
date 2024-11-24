import Card from "./Card";
const InforUser = [
  {
    id: 1,
    image: "/public/Images/p1.jpg", // Corrected path
    name: "ChanTola",
    sex: "M",
    phone_num: 16354159,
  },
  {
    id: 2,
    image: "/public/Images/p2.jpg",
    name: "Tong",
    sex: "M",
    phone_num: 117322219,
  },
  {
    id: 3,
    image: "../../public/Images/p3.jpg",
    name: "LaLa",
    sex: "M",
    phone_num: 10354159,
  },
  {
    id: 4,
    image: "/public/Images/p4.jpg",
    name: "SakZuu",
    sex: "M",
    phone_num: 12354150,
  },
  {
    id: 4,
    image: "/public/Images/p4.jpg",
    name: "SakZuu",
    sex: "M",
    phone_num: 12354150,
  },
  {
    id: 4,
    image: "/public/Images/p4.jpg",
    name: "SakZuu",
    sex: "M",
    phone_num: 12354150,
  },
  {
    id: 4,
    image: "/public/Images/p4.jpg",
    name: "SakZuu",
    sex: "M",
    phone_num: 12354150,
  },
  {
    id: 4,
    image: "/public/Images/p4.jpg",
    name: "SakZuu",
    sex: "M",
    phone_num: 12354150,
  },
  {
    id: 4,
    image: "/public/Images/p4.jpg",
    name: "SakZuu",
    sex: "M",
    phone_num: 12354150,
  },
  {
    id: 5,
    image: "/public/Images/p5.jpg",
    name: "AcyRaa",
    sex: "M",
    phone_num: 69949465,
  },
  {
    id: 5,
    image: "/public/Images/p5.jpg",
    name: "AcyRaa",
    sex: "M",
    phone_num: 69949465,
  },
  {
    id: 5,
    image: "/public/Images/p5.jpg",
    name: "AcyRaa",
    sex: "M",
    phone_num: 69949465,
  },
  {
    id: 5,
    image: "/public/Images/p5.jpg",
    name: "AcyRaa",
    sex: "M",
    phone_num: 69949465,
  },
  {
    id: 5,
    image: "/public/Images/p5.jpg",
    name: "AcyRaa",
    sex: "M",
    phone_num: 69949465,
  },
  {
    id: 5,
    image: "/public/Images/p5.jpg",
    name: "AcyRaa",
    sex: "M",
    phone_num: 69949465,
  },
];
const Poster = () => {
  return (
    <>
      <div className="grid grid-cols-5 w-full p-4 gap-2">
        {InforUser.map((item) => {
          const { image, name, sex, phone_num, id } = item;
          return (
            <Card
              key={id}
              image={image}
              name={name}
              sex={sex}
              phone_num={phone_num}
            />
          );
        })}
      </div>
    </>
  );
};

export default Poster;
