// index.js

const Web3 = require('web3');

class Web3Tools {
    constructor(providerUrl, timeout = 10000) {
        this._web3 = new Web3(providerUrl, { timeout });
    }

    // Renamed from getTransactionReceipt to fetchTransactionReceipt
    fetchTransactionReceipt(txHash) {
        return new Promise((resolve, reject) => {
            this._web3.eth.getTransactionReceipt(txHash)
                .then(receipt => resolve(receipt))
                .catch(error => {
                    console.error('Error fetching transaction receipt:', error);
                    reject(error);
                });
        });
    }

    // Renamed from getBlockDetails to fetchBlockDetails
    fetchBlockDetails(blockNumber) {
        return new Promise((resolve, reject) => {
            this._web3.eth.getBlock(blockNumber)
                .then(block => resolve(block))
                .catch(error => {
                    console.error('Error fetching block details:', error);
                    reject(error);
                });
        });
    }

    // Renamed from estimateGas to calculateGasEstimation
    calculateGasEstimation(txObject) {
        return new Promise((resolve, reject) => {
            this._web3.eth.estimateGas(txObject)
                .then(gas => resolve(gas))
                .catch(error => {
                    console.error('Error estimating gas usage:', error);
                    reject(error);
                });
        });
    }

    // Renamed from getGasPrice to fetchGasPrice
    fetchGasPrice() {
        return new Promise((resolve, reject) => {
            this._web3.eth.getGasPrice()
                .then(gasPrice => resolve(gasPrice))
                .catch(error => {
                    console.error('Error fetching gas price:', error);
                    reject(error);
                });
        });
    }

    // Renamed from getUserAccounts to fetchUserAccounts
    fetchUserAccounts() {
        return new Promise((resolve, reject) => {
            this._web3.eth.getAccounts()
                .then(accounts => resolve(accounts))
                .catch(error => {
                    console.error('Error fetching user accounts:', error);
                    reject(error);
                });
        });
    }

    // Renamed from deployContract to initiateContractDeployment
    initiateContractDeployment(abi, bytecode, from, gas) {
        return new Promise((resolve, reject) => {
            const contract = new this._web3.eth.Contract(abi);
            const deployment = contract.deploy({ data: bytecode });
            deployment.send({ from, gas })
                .then(deployedContract => resolve(deployedContract))
                .catch(error => {
                    console.error('Error initiating contract deployment:', error);
                    reject(error);
                });
        });
    }

    // Renamed from getNetworkId to fetchNetworkId
    fetchNetworkId() {
        return new Promise((resolve, reject) => {
            this._web3.eth.net.getId()
                .then(networkId => resolve(networkId))
                .catch(error => {
                    console.error('Error fetching network ID:', error);
                    reject(error);
                });
        });
    }
}

module.exports = Web3Tools;
