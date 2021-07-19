import * as pricing from './pricing.cjs'
import Wallet from '../account/wallet.js';

export const countValue = async (apiKey, wallet, isManual = false, definedValue = null) => {
    let value = 0;

    if (wallet instanceof Wallet && !isManual) {
        let allTypes = wallet.cryptos.map((crypto) => crypto.id);
        const counts = {};
        //grabs crypto of similar IDs and their count
        allTypes.forEach((x) => {
                counts[x] = (counts[x] || 0) + 1;
            }
        );
        for (const [id, amount] of Object.entries(counts)) {
        //do one API call per Crypto type in the wallet, then multiply it by the amount of coin to get total value
            let coinPrice = await pricing.fetchPrice(process.env.API_KEY, {id: parseInt(id)});
            coinPrice *= amount;
            value += coinPrice;
        }
    }
    //segment for manual definition of coin prices (required for test suites)
    else if(wallet instanceof Wallet && isManual){
        let allTypes = wallet.cryptos.map((crypto) => crypto.id);
        const counts = {};
        allTypes.forEach((x) => {
                counts[x] = (counts[x] || 0) + 1;
            }
        );
        for (const [id, amount] of Object.entries(counts)) {
            let coinPrice = await pricing.fetchPrice(process.env.API_KEY, {id: parseInt(id)}, true,
                definedValue);
            coinPrice *= amount;
            value += coinPrice;
        }
    }

    return value;
};
