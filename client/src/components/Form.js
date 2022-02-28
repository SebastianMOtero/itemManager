import React, { useState } from "react";

const Form = ({ items, setItems, contract }) => {

    const [input, setInput] = useState(null);

    const handleInputChange = (event) => {
        setInput({
            ...input,
            [event.target.name] : event.target.value
        })
    }

    const addItem = async(event) => {
        event.preventDefault()
        if (!input.identifier || !input.price || input.identifier === '' || input.price <= 0) {
            return 
        }
        const tx = await contract.createItem(input.identifier, input.price);

        document.getElementById('identifierInput').value = '';
        document.getElementById('priceInput').value = '';
        tx.wait().then(async (res) => {
            const index = res.events[0].args._itemIndex
            let item = await contract.items(index);
            setItems([...items, item]);
        })
    }

    return (
        <form onSubmit={addItem}>
            <input id="identifierInput" type="text" placeholder="Identifier" onChange={handleInputChange} name="identifier" className="item-input"/>
            <input id="priceInput" type="text" placeholder="Price" onChange={handleInputChange} name="price" className="item-input"/>
            <button type="submit" className="button-add"> Add item</button>
        </form>
    )
}

export default Form;