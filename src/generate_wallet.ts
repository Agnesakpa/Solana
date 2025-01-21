// This code is designed to assist you understand the concept of solana wallet functionality

import { Keypair, PublicKey } from '@solana/web3.js';

// Generate a new Solana wallet (keypair)
const wallet = Keypair.generate();
console.log("Loading new wallet...");

console.log(`You've generated a new Solana wallet: ${wallet.publicKey.toBase58()}

To save your wallet, copy and paste the following into dev-wallet.json file:

[${wallet.secretKey}]`)

// run the following command to get the required file
// > touch dev-wallet.json
console.log("run > 'touch dev-wallet.json' in your terminal to create the json file");


// Loading new wallet...
// You've generated a new Solana wallet: HPSeGxoCk38q2hXzaomMJaUrfVBwAqWi28NWRRUDKYuB

// To save your wallet, copy and paste the following into dev-wallet.json file:

// [233,170,148,83,150,171,36,60,181,138...]
// run > 'touch dev-wallet.json' in your terminal to create the json file