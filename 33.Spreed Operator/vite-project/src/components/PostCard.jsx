import Cards from "./Cards";
const Products = [
  {
    id: 1,
    brand: "Addidas",
    item: "Shoses",
    img: "/public/images/addidasBlack.avif",
    doc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Culpa odit ex optio Animi laboriosam et consectetur eligendi ut culpa blanditiisdoloribus iusto magni Recusandae commodi non vero eligendi quia incidunt",
    price: 123,
  },
  {
    id: 2,
    brand: "nike",
    item: "Shoses",
    img: "/public/images/nikePanda.jpg",
    doc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Culpa odit ex optio Animi laboriosam et consectetur eligendi ut culpa blanditiisdoloribus iusto magni Recusandae commodi non vero eligendi quia incidunt",
    price: 123,
  },
  {
    id: 3,
    brand: "Addidas",
    item: "Shoses",
    img: "/public/images/addidasGreen.avif",
    doc: "",
    price: 123,
  },
  {
    id: 4,
    brand: "nike",
    item: "Shoses",
    img: "/public/images/nikeWhite.jpg",
    doc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Culpa odit ex optio Animi laboriosam et consectetur eligendi ut culpa blanditiisdoloribus iusto magni Recusandae commodi non vero eligendi quia incidunt",
    price: 123,
  },
  {
    id: 5,
    brand: "Addidas",
    item: "Shoses",
    img: "/public/images/addidasPink.avif",
    doc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Culpa odit ex optio Animi laboriosam et consectetur eligendi ut culpa blanditiisdoloribus iusto magni Recusandae commodi non vero eligendi quia incidunt",
    price: 123,
  },
  {
    id: 6,
    brand: "Addidas",
    item: "Shoses",
    img: "/public/images/addidasWhite.avif",
    doc: "Lorem ipsum dolor sit amet consectetur adipisicing elit Culpa odit ex optio Animi laboriosam et consectetur eligendi ut culpa blanditiisdoloribus iusto magni Recusandae commodi non vero eligendi quia incidunt",
    price: 123,
  },
];

const PostCard = () => {
  return (
    <div className="w-[100%] grid grid-cols-3 gap-2 place-items-center py-2">
      {Products.map((Products) => {
        return <Cards {...Products} key={Products.id} />;
      })}
    </div>
  );
};
const newObj = { ...Products };
console.log(newObj);
export default PostCard;
