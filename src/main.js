import {} from 'dotenv/config'
import {countValue} from "./services/count.js";
import Crypto from './actives/crypto.js';
import Wallet from './account/wallet.js';
import {BTC, ETH} from './actives/types.js';
import * as pricing from './services/pricing.cjs'

let aBtc = new Crypto(BTC);
let anEth = new Crypto(ETH);
let anotherEth = new Crypto(ETH);
let aWallet = new Wallet(aBtc, anEth, anotherEth);
pricing.fetchPrice(process.env.API_KEY,aBtc,true,1000000);
console.log(await countValue(process.env.API_KEY, aWallet));
