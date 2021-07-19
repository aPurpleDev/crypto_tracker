import {BTC} from "../src/actives/types.js";
import {countValue} from "../src/services/count.js";
import Crypto from '../src/actives/crypto.js';
import Wallet from "../src/account/wallet.js";

test('Manually defining price adds up to correct Wallet value', async () => {
    const newBTC = new Crypto(BTC);
    const anotherBTC = new Crypto(BTC);
    const testWallet = new Wallet(newBTC, anotherBTC);

    expect(await countValue('FAKE_API_KEY', testWallet, true, 50000)).toEqual(100000);
});


