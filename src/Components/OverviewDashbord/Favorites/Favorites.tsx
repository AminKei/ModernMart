import ItemProduct from "../../../BaseComponents/Ui/ItemProduct/ItemProduct";

const Favorites = () => {
  const fav = JSON.parse(localStorage.getItem("fav") || "[]");

  const handleDelete = (index: number) => {
    const updatedCart = fav.filter((_: any, i: any) => i !== index);
    localStorage.setItem("fav", JSON.stringify(updatedCart));
    // Optionally, you can trigger a re-render or state update to reflect changes
    window.location.reload(); // Reloading the page to reflect changes
  };

  return (
    <div>
      <h4> Your Favorites Products :</h4>
      {fav.length === 0 ? (
        <p>
          Your Fevorite page is empty <a href="/productslist">return to products list</a>
        </p>
      ) : (
        <div className="conteiner-items">
          {fav.map((product: any, key: any) => {
            if (
              !product ||
              !product.description ||
              !product.images ||
              !product.images[0] ||
              !product.price ||
              !product.title
            ) {
              console.error(`Invalid product at index ${key}:`, product);
              return null;
            }

            return (
              <ItemProduct
                key={key}
                description={product.description}
                image={product.images[0]}
                price={product.price}
                title={product.title}
                onDelete={() => handleDelete(key)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Favorites;
