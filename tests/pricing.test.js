import {BTC} from "../src/actives/types.js";
import Crypto from '../src/actives/crypto.js';
import * as pricing from '../src/services/pricing.cjs'


test('Manually defining price returns return correct value', async () => {
    const newBTC = new Crypto(BTC);

    expect(await pricing.fetchPrice('FAKE_API_KEY', newBTC, true, 50000)).toEqual(50000);
});


