import "./Features.css";

const features = [
  {
    title: "FREE AND FAST DELIVERY",
    description: "Free delivery for all orders over $140",
    icon: `${process.env.PUBLIC_URL}/images/Feature-img3.png`,
  },
  {
    title: "24/7 CUSTOMER SERVICE",
    description: "Friendly 24/7 customer support",
    icon: `${process.env.PUBLIC_URL}/images/Feature-img2.png`,
  },
  {
    title: "MONEY BACK GUARANTEE",
    description: "We return money within 30 days",
    icon: `${process.env.PUBLIC_URL}/images/Feature-img1.png`,
  },
];

const Features = () => {
  return (
    <div className="features-container">
      {features.map((feature, index) => (
        <div className="feature" key={index}>
          <div className="icon">
            {typeof feature.icon === "string" &&
            feature.icon.includes(".png") ? (
              <img src={feature.icon} alt={feature.title} />
            ) : (
              feature.icon
            )}
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
