import React, { useState } from "react";
import { ethers } from 'ethers';

import SupplyChain_abi from '../abi/SupplyChain.json'

const Header = ({ defaultAccount, setErrorMessage, setContract, setItems, setDefaultAccount, setIsOwner }) => {

    // Hardhat address for testing purposes
    const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

    const [connButtonText, setConnButtonText] = useState('Connect Wallet');
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [userBalance, setUserBalance] = useState(null);


    const showItems = async (contract) => {
        const nu = '0x0000000000000000000000000000000000000000';
        let i = 0;
        setItems([]);
        let item = await contract.items(i);
        const itemsArr = []
        while (item[0] !== nu) {
            itemsArr.push(item);
            i++;
            item = await contract.items(i);
        }
        setItems(itemsArr);
    }

    const accountChangedHandler = async (newAccount) => {
        setConnButtonText('Wallet Connected');

        setDefaultAccount(newAccount);

        const tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(tempProvider);

        const tempSigner = tempProvider.getSigner();
        setSigner(tempSigner);

        const tempContract = new ethers.Contract(contractAddress, SupplyChain_abi.abi, tempSigner);
        setContract(tempContract);

        const ownerAddress = await tempContract.owner();
        setIsOwner(ownerAddress.toLowerCase() === newAccount.toLowerCase());

        const balance = (await tempProvider.getBalance(newAccount)).toString();
        const integerPart = balance.substring(0, balance.length - 18) ? balance.substring(0, balance.length - 18) : 0;
        let decimalPart = balance.substring(balance.length - 18, balance.length);
        if (decimalPart.length !== 18) {
            decimalPart = decimalPart.padStart(18, '0');
        }
        setUserBalance(integerPart + '.' + decimalPart);

        showItems(tempContract)
    }

    const connectWalletHandler = async () => {
        if (window.ethereum && window.ethereum.isMetaMask) {
            const result = await window.ethereum.request({ method: 'eth_requestAccounts' })
            accountChangedHandler(result[0]);
        } else {
            setErrorMessage('Please install MetaMask to use this dApp.');
        }
    }

    return (
        <div className="header">
            <h1>Item Manager</h1>
            <button onClick={connectWalletHandler}> {connButtonText}</button>
            { defaultAccount 
                ?
                <div className="balance">
                    <h3> Address: {defaultAccount.toUpperCase()}</h3>
                    <h3> Balance: {userBalance} Eth</h3>
                </div>
                : null
            }
        </div>
    )
}

export default Header;