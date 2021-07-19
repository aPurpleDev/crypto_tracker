import {BTC, ETH} from './types.js'
import  {v4 as uuidv4} from 'uuid';

export default class Crypto {
    constructor({id, name, ticker}) {
        if ({id, name, ticker} instanceof BTC.constructor || {id, name, ticker} instanceof ETH.constructor) {
            this.id = id;
            this.name = name;
            this.ticker = ticker;
            this.uuid = uuidv4();
            //does not accept instantiation of unknown cryptos
        } else {
            return console.error('Invalid Crypto : unknown')
        }
    }
}
