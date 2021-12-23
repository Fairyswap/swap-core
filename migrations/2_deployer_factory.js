const fairyFactory = artifacts.require('FairyFactory');
const fairyPair = artifacts.require('FairyPair');

// ++++++++++++++++  Main Migration ++++++++++++++++ 
const migration = async (deployer, network, accounts) => {
  await Promise.all([
      deploy(deployer, network, accounts)
  ]);
}

// ++++++++++++++++  Deploy Functions ++++++++++++++++ 
module.exports = migration;

async function deploy(deployer, network, accounts) { 
  console.log("[Core] Start deploy on Network= " + network);

  let deployer_account = accounts[0];

  console.log('fairyPair bytecode hash:%s ', (web3.utils.keccak256(fairyPair.bytecode)).substring(2));

  console.log("[Core] Begin to deploy fairyFactory")
  await deployer.deploy(fairyFactory, '0xe27DdD6558CF41B33EaafBd23CffdEffE5B9f83e');
  
  console.log("[Core] End");
}