import {useState} from "react"
import ShoppingList from "./components/ShoppingList"
import ShoppingListForm from "./components/ShoppingListForm"
import Item from "./models/item"
import "./App.css"

function App() {
  const [items, setItems ] = useState<Item[]>([])
  const addItem = (product: string) => {
    console.log("made to the app component")
    console.log(product)
  }

  return (
    <div className="App">
      {<ShoppingList items={items} />}
      <ShoppingListForm onAddItem={addItem}/>
    </div>
  )
}

export default App
