import "./App.css";
import Navber from "./components/Navber/Navber";
import Banner from "./components/Banner/Banner";
import RatingTools from "./components/RatingTools/RatingTools";
import Products from "./components/Products/Products";
import CreateAccount from "./components/CreateAccount/CreateAccount";
import SimplePricing from "./components/SimplePricing/SimplePricing";
import Workflow from "./components/Workflow/Workflow";
import Footer from "./components/Footer/Footer";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const getProducts = async () => {
  const res = await fetch("/product.json");
  return res.json();
};

function App() {
  const productPromise = getProducts();
  const [cart, setCart] = useState([]);

  return (
    <div>
      <Navber cart={cart} />

      <Banner />
      <RatingTools />

      <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
        <Products
          productPromise={productPromise}
          cart={cart}
          setCart={setCart}
        />
      </Suspense>

      <CreateAccount />
      <SimplePricing />
      <Workflow />
      <Footer />

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
}

export default App;
