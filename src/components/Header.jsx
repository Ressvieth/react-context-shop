export const Header = ({ cart }) => {
  console.log(cart);

  return (
    <>
      {/* <CartModal /> */}
      <header id="main-header">
        <div id="main-title">
          <h1>SKLEP</h1>
        </div>
        <p>
          <button> Cart</button>
        </p>
      </header>
    </>
  );
};
