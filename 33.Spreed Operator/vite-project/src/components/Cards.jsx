const Cards = ({ brand, img, item, price }) => {
  return (
    <div class="relative drop-shadow-xl w-[250px] h-[450px] overflow-hidden rounded-xl bg-[#3d3c3d]">
      <div class="absolute flex flex-col items-center justify-center px-3 gap-2 text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
        <img src={img} className="h-[50%] w-[100%] rounded-xl" alt="pic" />
        <h2 className="text-[2rem] uppercase tracking-[3px]">{brand}</h2>
        <h3>{item}</h3>
        <h4>{price}</h4>
      </div>
      <div class="absolute w-56 h-48 bg-white blur-[50px]-left-1/2 -top-1/2"></div>
    </div>
  );
};

export default Cards;
