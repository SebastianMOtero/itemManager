import React from 'react';

const itemState = ['Created', 'Paid', 'Delivered']
const Item = ({ props }) => {
    const item = props.item

    const payItem = async () => {
        await props.contract.triggerPayment(props.index, {
            value: item[2],
            from: props.defaultAccount
        });
    }

    const deliverItem = async () => {
        await props.contract.triggerDelivery(props.index);
    }

    return (
        <div className='list'>
            <div>
                <h3>{item[1]}</h3>
                <h4>Hash: {item[0]}</h4>
                <p>Price: {item[2].toString()}</p>
            </div>

            <div>
                <p>State: {itemState[item[3]]}</p>
                {item[3] === 0
                    ? <button onClick={payItem}> Pay</button>
                    : item[3] === 1
                        ? <button onClick={deliverItem}> Deliver</button>
                        : <h5>Delivered</h5>
                }
            </div>
        </div>
    )
}

export default Item;