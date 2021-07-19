import {} from 'dotenv/config'
import * as pricing from './services/pricing.cjs'
import {BTC, ETH} from './actives/types.js';
import {countValue} from "./services/count.js";
import Crypto from './actives/crypto.js';
import Wallet from './account/wallet.js';

//instantiates Crypto objects
let aBtc = new Crypto(BTC);
let anEth = new Crypto(ETH);
let anotherEth = new Crypto(ETH);

//instantiates a Wallet
let aWallet = new Wallet(aBtc, anEth, anotherEth);

//logs a Manual price definition
console.log(await pricing.fetchPrice(process.env.API_KEY,aBtc,true,1000000).catch( (error) => console.log(error) ));

//counts the actual Wallet price (real API metrics)
console.log(await countValue(process.env.API_KEY, aWallet));
