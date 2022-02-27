const hre = require("hardhat");

async function main() {
  const ItemManager = await hre.ethers.getContractFactory("ItemManager");
  const itemManager = await ItemManager.deploy();

  await itemManager.deployed();

  console.log("ItemManager deployed to:", itemManager.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
