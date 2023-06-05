import { on } from "events"
import { useRef } from "react"

interface ShoppingListFormProps {
    onAddItem: (item: string) => void
}

const ShoppingListForm = ({onAddItem}: ShoppingListFormProps): JSX.Element => {
    
    const inputRef = useRef<HTMLInputElement>(null)

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const newProduct = inputRef.current!.value
        onAddItem(newProduct)
        inputRef.current!.value = ""
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Product name" ref={inputRef}/>
            <button type="submit">Add item</button>
        </form>
    )
}

export default ShoppingListForm