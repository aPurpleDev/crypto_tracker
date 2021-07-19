import Crypto from '../actives/crypto.js';

export default class Wallet {
    constructor(...cryptos) {
        this.cryptos = cryptos;

        cryptos.map((cryptoCoin) => {
            if(!cryptoCoin instanceof Crypto.constructor){
                this.cryptos.splice(this.cryptos.indexOf(cryptoCoin));
            }
        })
    }
}
