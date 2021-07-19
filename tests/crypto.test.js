import {BTC, ETH} from "../src/actives/types.js";

test('Crypto actives matches object requirements', () => {
    expect(BTC.toMatchObject(BTC));
});