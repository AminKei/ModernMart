import "./NewArrival.css";

const items = [
  {
    title: "PlayStation 5",
    description: "Black and White version of the PS5 coming out on sale.",
    link: "#",
  },
  {
    title: "Women's Collections",
    description: "Featured woman collections that give you another vibe.",
    // imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    imageUrl: `${process.env.PUBLIC_URL}/images/NewArrival1.png`, // Replace with actual image URL
    link: "#",
  },
  {
    title: "Speakers",
    description: "Amazon wireless speakers",
    imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    link: "#",
  },
  {
    title: "Perfume",
    description: "GUCCI INTENSE OUD EDP",
    imageUrl: "https://via.placeholder.com/300", // Replace with actual image URL
    link: "#",
  },
];

const NewArrival = () => {
  return (
    <div className="conteiner-new-arrival">
      
    </div>
  );
};

export default NewArrival;
