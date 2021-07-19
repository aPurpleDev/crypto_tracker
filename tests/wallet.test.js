import {BTC, ETH} from "../src/actives/types.js";
import Crypto from '../src/actives/crypto.js';
import Wallet from "../src/account/wallet.js";

test('Wallet does have crypto array property to store coin', () => {
    const newBTC = new Crypto(BTC);
    const newETH = new Crypto(ETH);
    const testWallet = new Wallet(newBTC, newETH);

    expect(testWallet.cryptos).toBeInstanceOf(Array);
});

test('Wallet does not accept unregistered types', () => {
    const newBTC = new Crypto(BTC);
    const newETH = new Crypto(ETH);
    const unregistered = {id : 66, name : 'SCAMCOIN', ticker : 'SCAM', uuid: 'unestringunique'};
    const testWallet = new Wallet(newBTC, newETH, unregistered);

    expect(testWallet.cryptos.length).toEqual(2);
});

