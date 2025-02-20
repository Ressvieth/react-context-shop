export const Header = ({ cart }) => {
  console.log(cart);

  return (
    <>
      {/* <CartModal /> */}
      <header id="main-header">
        <div id="main-title">
          <h1>ŁO-MOTO</h1>
        </div>
        <p>
          <button> Cart</button>
        </p>
      </header>
    </>
  );
};
