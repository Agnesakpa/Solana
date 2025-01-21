import { Connection, PublicKey, clusterApiUrl, Keypair } from "@solana/web3.js";

import wallet from "../dev-wallet.json"

// 2: we create a keypair from our wallet file
const keypair = Keypair.fromSecretKey(new Uint8Array(wallet));

async function checkSolanaWalletBalance(walletAddress: string) {
  try {
    // Connect to the Solana devnet
    const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

    // Convert the wallet address to a PublicKey
    const publicKey = keypair.publicKey;

    // Fetch the balance in lamports (smallest unit of SOL)
    const balance = await connection.getBalance(publicKey);

    // Convert lamports to SOL
    const solBalance = balance / 1e9;

    console.log(`Wallet Balance: ${solBalance} SOL`);
  } catch (error) {
    console.error("Error fetching wallet balance:", error);
  }
}

// Wallet Balance: 2 SOL

// Replace with your Solana wallet address
const walletAddress = "HPSeGxoCk38q2hXzaomMJaUrfVBwAqWi28NWRRUDKYuB";

// Call the function
checkSolanaWalletBalance(walletAddress);
