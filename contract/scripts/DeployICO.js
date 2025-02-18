const hre = require("hardhat");

async function main() {
  console.log("Starting DeScholarICO deployment...");

  const TOKEN_ADDRESS = "0x0D3D0f41b7aEaC37046BdAA2AA66Fb996A8d9340"; // Replace with the deployed DST token address
  const TOKENS_FOR_SALE = hre.ethers.parseUnits("1000000", 18); // Adjust as needed

  const DeScholarICO = await hre.ethers.getContractFactory("DeScholarICO");
  console.log("Contract factory obtained...");

  const deScholarICO = await DeScholarICO.deploy(
    TOKEN_ADDRESS,
    TOKENS_FOR_SALE
  );
  await deScholarICO.waitForDeployment();

  const deployedAddress = await deScholarICO.getAddress();
  console.log(`DeScholarICO deployed at: ${deployedAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
