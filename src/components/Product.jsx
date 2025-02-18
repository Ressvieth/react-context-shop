export const Product = ({ image, title, price, description }) => {
  return (
    <article className="product">
      <img src={image} alt="foto motocykla" />
      <div className="procut-content">
        <div>
          <h3>{title}</h3>
          <p className="product-price">{price} ZŁ</p>
          <p>{description}</p>
        </div>
        <p className="product-actions">
          <button onClick={() => {}}>Dodaj do koszyka</button>
        </p>
      </div>
    </article>
  );
};
