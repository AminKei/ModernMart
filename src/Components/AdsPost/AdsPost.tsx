import "./AdsPost.css";
const AdsPost = () => {
  return (
    <div className="div-root-ads-post">
      <div className="child-left">
        <img
          src={`${process.env.PUBLIC_URL}/images/ads-post.png`}
          alt="postadsimages"
        />
      </div>
      <div className="child-right">
        <p>
          Flavor : Fireweed honey has a delicate, sweet flavor with subtle
          floral notes. It has a smooth and creamy texture that melts in your
          mouth. Health Benefits : Fireweed honey is rich in antioxidants,
          vitamins, and minerals. It has antibacterial and anti-inflammatory
          properties, making it a natural remedy for sore throats, coughs, and
          floral notes. It has a smooth and creamy texture that melts in your
          mouth. Health Benefits : Fireweed honey is rich in antioxidants,
          vitamins, and minerals. It has antibacterial and anti-inflammatory
          properties, making it a natural remedy for sore throats, coughs, and
          colds.
        </p>
        <button>Bid on Opensea</button>
      </div>
    </div>
  );
};

export default AdsPost;
