const { Blockchain, Transactions } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('57286c364e76242509a04da6361728b6fb157d1ac42490b5233e786df5a33c6e');
const myWalletAddress = myKey.getPublic('hex');

let ceylonCoin = new Blockchain();

const tx1 = new Transactions(myWalletAddress, 'public key goes here', 10);  
tx1.signTransaction(myKey);
ceylonCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
ceylonCoin.minePendingTransactions(myWalletAddress);

console.log('\nBalance of nimsara is', ceylonCoin.getBalanceOfAddress(myWalletAddress));

console.log('Is chain valid?', ceylonCoin.isChainValid() ? 'Yes' : 'No');