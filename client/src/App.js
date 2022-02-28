import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import ItemList from './components/ItemList';

import React, { useState, useEffect } from 'react';

function App() {

  const [contract, setContract] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isOwner, setIsOwner] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('use Effect')
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header
            defaultAccount={defaultAccount}
            setErrorMessage={setErrorMessage}
            setContract={setContract}
            setItems={setItems}
            setDefaultAccount={setDefaultAccount}
            setIsOwner={setIsOwner}
          />
        </div>
        {isOwner
          ? <div>
              <Form
                items={items}
                setItems={setItems}
                contract={contract}
              />
            </div>
          : null
        }
        <div>
          <ItemList
            defaultAccount={defaultAccount}
            contract={contract}
            items={items}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
