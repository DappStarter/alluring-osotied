require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture gloom bubble tooth notice crime remember unveil hunt person flock silent'; 
let testAccounts = [
"0xda9d7935d4779086469507d27c2b27f67a4e4151f2338ea32bb0a9a0cd9152ed",
"0x18198ec0cd26d8fdeb1ca8f65c36fc53403815aa68308a80dda85d5a1409602b",
"0xd56da132b292610e644dab1ce85438dc64209daba022c73bb10ba11d57ba3598",
"0x9962b0f79173738642b6ce208d321065a435fe83407b55a17a17c5380a9c42d3",
"0x8e89796e4fffbf83c0f0034320b384381d0a0b44d3faf8f5b73663d5b81c0114",
"0xafe7192052108a19b468c6bac44e9bc92caba9c40467f0fdafb12397c3f33835",
"0x85ca2a7ee8c3945803ad4bf8203381e3cf042f63f4b1dda8e44fc7e75eb0d7a0",
"0xa625493325064ab671ecdd82272779849a3acdb0c91e909d2ce41c117e452d52",
"0xa9bf16ce19ff622a3aa05db2dcc17bc972db0ef0d5ba39718f2f1d04861eaf25",
"0x279f941c4bac24ec3d2b2a6988a588c55a86a96050b8c9dae8f1659a3f51b3eb"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
