const { WalletServer , Seed , Config, Bip32PrivateKey } = require('cardano-wallet-js');

const scriptKeys = [
    'xprv14qhm6wgvswtgapa9cjt8h2c766v02gsz0zgx4ma6lrfkfshrsadrqzhpfd28r9m4nfl2hl2p8rg7dra9mtek70vh4h4ljpv5k85wyp5wcnqafgmf5vgs8pk44c2kx0k8jwe9p0j7r08fraq9lj8xvnx28u8aes37',
    'xprv1pzqd6zvhm39jzkgy4d3jwgvqdauxs84442t3vsgefaja6rlqfe2xtgvecctm69axxrw44u8r5nmmee8858xcpy9j3zhpn95qqrnvva76allmlnmk83vh58kwdpyxp5gsywdlcl5n670xw6f3tcdx94kp45jmpzmt',
    'xprv14q8ua45n6ptkmxcjtj6w5m9lvll6x9s5pn5q4ekp6qchkj78qazz823py5t0ak5dg353ley8gaha9r4mr2pa0vk7juwx70dfghgl7989sdunts090pnwctq6l2hh80rup656hrq63tzxmwl8teujmhc00c37hulj',
    'xprv10r3erfx9tc28t2sqdkq4mefyq08ackmemccxxzcm0ydvvea8uf8n0fqgnksvupsrt3gj63j3p5yqnc995n8knulwl5fn75j739khj2j2xfrg3elkg4se3q9d583yc60270mv54gc9sv4tpuk77w3qct4wgfqnu4u',
    'xprv1ez27zzg98kk5m7wh0za8gpfdpwmhxupgx3h3x8jduvz5m6tlw3tcqh0qnw7cf9skp6ph8hnuxhn5zhlgczcuqtmlzauxu9cvrgu9zlq3ltcvckeez79062rqvzlk7c2af05qg4ddq0n5hlutdgu9zuw9rvvxlyu8',
    'xprv1hz5cc886rte28j8n43f8r9vsq38466kwx8eq7xnw0uj0sa0mtfrhvn3pgsp5760r43jd4sas0yh9pnpnep6rsdy8x7uhg5lg9jh9jv2cwgm64hljsz7se9lrn72kkeztaymgu8exnmqemjxtzfux2d795cumk8rx'
];

const signingKeys = scriptKeys.map(key => Bip32PrivateKey.from_bech32(key).to_raw_key());

// get native script (this is the SAME SCRIPT, we're just "loading" it back)
const jsonScript = {
    type: 'atLeast',
    require: 4,
    scripts: [
      {
        type: 'sig',
        keyHash: '562acc80558f5465c02c0fa1926e1b01b18eff107f1c4710122496eb'
      },
      {
        type: 'sig',
        keyHash: 'b716a58d9bf9481c9db020606ac228ad4652359d75515e28282593d9'
      },
      {
        type: 'sig',
        keyHash: '95176c76332c340e0d8b58a24bab9a93cc35ca73ffd7a5a4049dd8ee'
      },
      {
        type: 'sig',
        keyHash: 'ba6bf4c05c51ea2265767d7dd5f463f680037978b800ae907be84c37'
      },
      {
        type: 'sig',
        keyHash: 'a3f0cd74c6eb774681f2260ec3be3f6f0d33d883c138ef25bcbf5494'
      },
      {
        type: 'sig',
        keyHash: 'ad8a17a9ea9e866ce94f80cf74f460732e39ec606303a14d5d7313c6'
      }
    ]
};

// set network configuration
let buildOpts = {
    startSlot: 0, 
    config: Config.Testnet,
};

const ttl = 52399446; // slot before the tx should be processed

const CoinSelectionWallet = {
    "withdrawals": [],
    "inputs": [
        {
            "amount": {
                "quantity": 10000000,
                "unit": "lovelace"
            },
            "address": "addr_test1xr20j5t970ssz0323tzqqvp3pp02s96yf64zmzj83kksyvx5l9gktulpqylz4zkyqqcrzzz74qt5gn429k9y0rddqgcq2yupvs", // script address
            "id": "d48f256aea384066756be0c11c6e6b8baef8f7ad25ba92b76d1ae3c294443400",
            "assets": [],
            "index": 0
        },
    ],
    "deposits": [],
    "change": [
        {
            "amount": {
                "quantity": 8800000, // fee of 200000 initially
                "unit": "lovelace"
            },
            "address": "addr_test1xr20j5t970ssz0323tzqqvp3pp02s96yf64zmzj83kksyvx5l9gktulpqylz4zkyqqcrzzz74qt5gn429k9y0rddqgcq2yupvs",
            "assets": []
        }
    ],
    "outputs": [
        {
            "amount": {
                "quantity": 1000000,
                "unit": "lovelace"
            },
            "address": "addr_test1qpypxf9jma2lkmzwn6nhypmynqpmus7x0ekwp2jfdrxqgm8vecdcssszlmywlyn7h0nkqp9jyk8p7dhjecglhu9m75xq4mwl9v",
            "assets": []
        }
    ]
};

const script = Seed.buildScript(jsonScript);
// for the script witnesses we only need to specify the native script root
const scripts = [script.root];

// build the tx (you can include scripts/signingkeys here, eg: let tx = Seed.buildTransactionMultisig(selection, ttl, scripts, null, sigingKeys, buildOpts);)
let tx = Seed.buildTransactionMultisig(CoinSelectionWallet, ttl, [], null, [], buildOpts);
// add witness
tx.addKeyWitnesses(signingKeys[0]);
// add script
tx.addScriptWitness(...scripts);
// add witness
tx.addKeyWitnesses(signingKeys[1]);
tx.addKeyWitnesses(signingKeys[2]);
tx.addKeyWitnesses(signingKeys[3]);
//tx.addKeyWitnesses(signingKeys[4]);
//tx.addKeyWitnesses(signingKeys[5]);


const signed = tx.build();
console.log(signed)