import { ethers } from "hardhat";
export const tokenDetails = {
    137: [
        {
            name: "DAI",
            address: "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD",
            feed_address: "0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers

        },
        {
            name: "LINK",
            address: "0xa36085F69e2889c224210F603D836748e7dC0088",
            feed_address: "0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers
        },
        {
            name: "WETH",
            address: "0xd0a1e359811322d97991e03f863a0c30c2cf029c",
            feed_address: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
            LTV: ethers.utils.parseUnits ("0.8"), 
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers
        }
    ],
    31337: [
        {
            name: "DAI",
            address: "0xFf795577d9AC8bD7D90Ee22b6C1703490b6512FD",
            feed_address: "0xAed0c38402a5d19df6E4c03F4E2DceD6e29c1ee9",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers

        },
        {
            name: "LINK",
            address: "0xa36085F69e2889c224210F603D836748e7dC0088",
            feed_address: "0x2c1d072e956AFFC0D435Cb7AC38EF18d24d9127c",
            LTV: ethers.utils.parseUnits ("0.8"), // Loan-to-Value (LTV) Ratio, Lower is better
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers
        },
        {
            name: "WETH",
            address: "0xd0a1e359811322d97991e03f863a0c30c2cf029c",
            feed_address: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
            LTV: ethers.utils.parseUnits ("0.8"), 
            interest_rate: ethers.utils.parseUnits ("0.015"), // interest paid to depositors
            borrow_stable_rate: ethers.utils.parseUnits ("0.025"), // interest paid by borrowers
        }
    ]
}