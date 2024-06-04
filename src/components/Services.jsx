const shoppingServices = [
  {
    id: 1,
    name: "Free Shipping",
    image: "img/features/f1.png",
  },
  {
    id: 2,
    name: "Online Order",
    image: "img/features/f2.png",
  },
  {
    id: 3,
    name: "Save Money",
    image: "img/features/f3.png",
  },
  {
    id: 4,
    name: "Promotions",
    image: "img/features/f4.png",
  },
  {
    id: 5,
    name: "Happy Sell",
    image: "img/features/f5.png",
  },
  {
    id: 6,
    name: "24/7 Support",
    image: "img/features/f6.png",
  },
];
const Services = () => {
  const servicesList = shoppingServices;
  return (
    <>
      {servicesList.map((services) => (
        <>
          <div className="fe-box">
            <img src={services.image} alt="" />
            <h6>{services.name}</h6>
          </div>
        </>
      ))}
    </>
  );
};

export default Services;
