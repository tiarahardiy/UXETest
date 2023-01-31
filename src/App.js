import logo from "./logo.svg";
import "./App.css";
import ProductCard from "product-card-package";

function App() {
  return (
    <>
      <div className="bg-pp">
        <div className="App">
          <ProductCard type="disable" />
          <ProductCard />
          <ProductCard />
          <ProductCard size="small" />
        </div>
        <div className="App">
          <ProductCard type="disable" />
          <ProductCard />
          <ProductCard />
          <ProductCard size="small" />
        </div>
      
      </div>
    </>
  );
}

export default App;
