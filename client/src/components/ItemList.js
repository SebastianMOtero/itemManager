import React from "react";
import Item from './Item';

const ItemList = ({ contract, defaultAccount, items }) => {
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li className="list-item" key={item[0]}>
                        <Item props={{ contract, item, defaultAccount, index }} />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ItemList;