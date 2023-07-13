const {
    Connection,
    PublicKey,
    clusterApiUrl,
    Keypair,
    LAMPORTS_PER_SOL,
    Transaction,
    Account,
} = require("@solana/web3.js");

const pubKey = new PublicKey("FZT4CuUqwMDvMfRbBDR7uDT1YxNVam6MsqkShN9tGBqY");

const getWalletBalance = async () => {
    try {
        const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");
        const walletBalance = await connection.getBalance(pubKey);
        console.log(`Wallet address is ${pubKey}`);
        console.log(walletBalance/1000000000);
    } catch (err) {
        console.log(err)
    }
};

const main = async() => {
    await getWalletBalance();
};

main();