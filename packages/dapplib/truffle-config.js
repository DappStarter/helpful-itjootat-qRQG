require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half clock bright smooth fine birth place minute hunt knife blue trumpet'; 
let testAccounts = [
"0x2ee6755a252c5b26f0d29e88bc5c2165fd4484826e4fcf6266fe3a81a6e5a0de",
"0x394d92fc8aa3c500cae248d0e822c1251944d8bcea2ac2ad9fa031d3510f1712",
"0x3ee4040091ec00e02c88eaa363955f4ba2e440dcdd8ef8618852d43ce345001a",
"0x1074e6f62dfd33a087f511e7f9fd62bf1e793ca0d59e25390f4300eb17d993ca",
"0xb0c6b20fd805bf90ef912fcf0c550a9be8c3898382e2851106c91fc2c636dfc1",
"0xe0732360a21d628485c1c41f2cc58c43dfeb040a3c44c87e3c1533aee290ed2c",
"0x1d2eeb6e96c4459c1a063f7cd61d521a3f90523001b560b32307c18e210b1954",
"0x75203e7a82b3098ddb77dac0e9eeb5ca0f82ef8ed51d894a28f1ce6f246f5574",
"0x50fe893eced5bef8f5e3d855754618e7c395b97e41f9615fc3e53a1b899ff27a",
"0x7c6c19ad13dae2fc39538dba6c893efe9c3aa5caa07889915613b73410e23ac5"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

