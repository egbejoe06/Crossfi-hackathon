const hre = require("hardhat");

async function main() {
  console.log("Starting deployment...");

  const DST_TOKEN_ADDRESS = "0x0D3D0f41b7aEaC37046BdAA2AA66Fb996A8d9340"; // Replace with actual DST token address

  const DeScholarResearch = await hre.ethers.getContractFactory(
    "DeScholarResearch"
  );
  console.log("Contract factory obtained...");

  const deScholarResearch = await DeScholarResearch.deploy(DST_TOKEN_ADDRESS);
  await deScholarResearch.waitForDeployment(); // Ensure deployment completes

  const deployedAddress = await deScholarResearch.getAddress(); // Get the deployed contract address

  console.log(`DeScholarResearch deployed at: ${deployedAddress}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error("Deployment failed:", error);
    process.exit(1);
  });
