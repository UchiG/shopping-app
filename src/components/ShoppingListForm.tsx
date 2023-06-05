import { on } from "events"
import { useRef } from "react"

interface ShoppingListFormProps {
    onAddItem: (item: string, quantity:number) => void
}

const ShoppingListForm = ({onAddItem}: ShoppingListFormProps): JSX.Element => {
    
    const productInputRef = useRef<HTMLInputElement>(null)
    const quantityInputRef = useRef<HTMLInputElement>(null)

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const newProduct = productInputRef.current!.value
        const quantity = parseInt(quantityInputRef.current!.value)
        onAddItem(newProduct, quantity)
        productInputRef.current!.value = ""
        quantityInputRef.current!.value = '1'
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product name" ref={productInputRef}/>
            <input type="number" min={0} ref={quantityInputRef}/>
            <button type="submit">Add item</button>
        </form>
    )
}

export default ShoppingListForm