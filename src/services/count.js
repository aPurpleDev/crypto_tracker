import Wallet from '../account/wallet.js';
import * as pricing from './pricing.cjs'

export const countValue = async (apiKey, wallet) => {
    let value = 0;

    if (wallet instanceof Wallet) {
        let allTypes = wallet.cryptos.map((crypto) => crypto.id);
        const counts = {};
        allTypes.forEach((x) => {
                counts[x] = (counts[x] || 0) + 1;
            }
        );
        console.log('Counts', counts);
        for (const [id, amount] of Object.entries(counts)) {
            let coinPrice = await pricing.fetchPrice(process.env.API_KEY, {id: parseInt(id)});
            coinPrice *= amount;
            value += coinPrice;
        }
    }
    return value;
};
