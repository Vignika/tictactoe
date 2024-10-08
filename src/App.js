
import './App.css';
import './styles.css';
import Game from './components/Game';

import { FilterableProductTable } from "./components/products/FilterableProductTable";
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" },
];


function App() {
  return (
    <div className="App">
    <FilterableProductTable products={PRODUCTS}/>
    </div>
  );
}

export default App;