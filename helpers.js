const {
  Wallet,
  MnemonicKey,
  CHAINS,
  AnchorEarn,
  NETWORKS,
  DENOMS,
  LCDClient,
} = require("@anchor-protocol/anchor-earn");

const anchorEarn = new AnchorEarn({
  chain: CHAINS.TERRA,
  network: NETWORKS.BOMBAY_12,
  mnemonic:
    "rib common health scrub since thank present scheme oyster robust arctic napkin scorpion weird soap verify ill record blind stumble tragic note mask combine",
});

const anchorDeposit = async () => {
  await anchorEarn.deposit({
    currency: DENOMS.UST,
    amount: "10",
    log: (data) => {
      console.log("anchorDepositData: ", data);
    },
  });
};

const anchorWithdraw = async () => {
  await anchorEarn.withdraw({
    currency: DENOMS.UST,
    amount: "10",
    log: (data) => {
      console.log("anchorWithdrawData: ", data);
    },
  });
};

module.exports = { anchorDeposit, anchorWithdraw };
