import ChiefCard from "../ChefsCard/chefsCard";

export default function Chefs() {
  const chefs = [
    {
      name: "Ömər Ağa",
      img: "img/top-chefs/img_6.jpg",
      recipesCount: "4",
      kitchen: "Qazax",
    },
    {
      name: "Əli Hüseyn",
      img: "img/top-chefs/img_1.jpg",
      recipesCount: "10",
      kitchen: "Qazax",
    },
    {
      name: "Sənan Vəli",
      img: "img/top-chefs/img_5.jpg",
      recipesCount: "9",
      kitchen: "Qazax",
    },
    {
      name: "Fuad Oruc",
      img: "img/top-chefs/img_2.jpg",
      recipesCount: "5",
      kitchen: "Qazax",
    },
    {
      name: "Nuran İsa",
      img: "img/top-chefs/img_3.jpg",
      recipesCount: "13",
      kitchen: "Qazax",
    },
    {
      name: "Nazim Kosa",
      img: "img/top-chefs/img_4.jpg",
      recipesCount: "8",
      kitchen: "Qazax",
    },
    {
      name: "Sənan Vəli",
      img: "img/top-chefs/img_5.jpg",
      recipesCount: "9",
      kitchen: "Qazax",
    },
    {
      name: "Ömər Ağa",
      img: "img/top-chefs/img_6.jpg",
      recipesCount: "4",
      kitchen: "Qazax",
    },
  ];

  return (
    <div className="section chefs">
      <h1 className="title">Our Top Chefs</h1>
      <div className="top-chefs-container">
        {chefs.map((chefs, index) => (
          <ChiefCard key={index} chefs={chefs} />
        ))}
      </div>
    </div>
  );
}
