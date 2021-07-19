import {BTC, ETH} from "../src/actives/types.js";
import Crypto from '../src/actives/crypto.js';

test('BTC Crypto matches object requirements', () => {
    const newBTC = new Crypto(BTC);
    expect(newBTC).toMatchObject(BTC);
});

test('ETH crypto matches object requirements', () => {
    const newETH = new Crypto(ETH);
    expect(newETH).toMatchObject(ETH);
});

test('BTC has correct ID for API Call', () => {
    const newBTC = new Crypto(BTC);
    expect(newBTC.id).toEqual(BTC.id);
});

test('ETH has correct ID for API Call', () => {
    const newETH = new Crypto(ETH);
    expect(newETH.id).toEqual(newETH.id);
});

test('BTC has correct name', () => {
    const newBTC = new Crypto(BTC);
    expect(newBTC.ticker).toEqual(BTC.ticker);
});

test('ETH has correct name', () => {
    const newETH = new Crypto(ETH);
    expect(newETH.ticker).toEqual(ETH.ticker);
});