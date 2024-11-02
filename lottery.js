import React, { Component } from 'react';
import Web3 from 'web3';
import lotteryContract from './lotteryContract.json'; // ABI and address

class Lottery extends Component {
    state = {
        account: '',
        players: [],
        loading: true,
    };

    async componentDidMount() {
        await this.loadBlockchainData();
    }

    async loadBlockchainData() {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
        const accounts = await web3.eth.getAccounts();
        this.setState({ account: accounts[0] });

        const networkId = await web3.eth.net.getId();
        const deployedNetwork = lotteryContract.networks[networkId];
        const contract = new web3.eth.Contract(lotteryContract.abi, deployedNetwork && deployedNetwork.address);
        
        const players = await contract.methods.getPlayers().call();
        this.setState({ players, loading: false });
    }

    enterLottery = async () => {
        const web3 = new Web3(Web3.givenProvider || "http://localhost:8545");
        const contract = new web3.eth.Contract(lotteryContract.abi, lotteryContract.networks[await web3.eth.net.getId()].address);
        await contract.methods.enter().send({ from: this.state.account, value: web3.utils.toWei('0.01', 'ether') });
        this.loadBlockchainData(); // Refresh players
    };

    render() {
        return (
            <div>
                <h1>Lottery</h1>
                <p>Your account: {this.state.account}</p>
                <button onClick={this.enterLottery}>Enter Lottery</button>
                {this.state.loading ? (
                    <p>Loading...</p>
                ) : (
                    <ul>
                        {this.state.players.map((player, index) => (
                            <li key={index}>{player}</li>
                        ))}
                    </ul>
                )}
            </div>
        );
    }
}

export default Lottery;