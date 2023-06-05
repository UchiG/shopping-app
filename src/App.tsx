import {useState} from "react"
import ShoppingList from "./components/ShoppingList"
import ShoppingListForm from "./components/ShoppingListForm"
import Item from "./models/item"
// import { v4 } from "uuid"
import "./App.css"

function App() {
  const [items, setItems ] = useState<Item[]>([])
  const addItem = (product: string, quantity:number) => {
    console.log("made it to the app component")
    setItems([...items, {id: items.length + 1, product, quantity,}])
  }

  return (
    <div className="App">
      {<ShoppingList items={items} />}
      <ShoppingListForm onAddItem={addItem}/>
    </div>
  )
}

export default App
