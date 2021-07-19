import Crypto from '../actives/crypto.js';

export default class Wallet {
    constructor(...cryptos) {
        let cryptoStorage = [];

        //does not accept any unregistered Crypto type
        cryptos.map((cryptoCoin) => {
            if(cryptoCoin instanceof Crypto){
                cryptoStorage.push(cryptoCoin);
            }
        })

        this.cryptos = cryptoStorage;
    }
}
