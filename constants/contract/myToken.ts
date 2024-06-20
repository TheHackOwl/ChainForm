export const APPROVE = "approve";

export const MY_TOKNE_ADDRESS = "0xdd9e5Be4d9c2B921f242AF8a3b095AfC8CcE6475";

export const MY_TOKNE_ABI = [
  {
    constant: false,
    inputs: [
      {
        name: "spender",
        type: "address",
      },
      {
        name: "amount",
        type: "uint256",
      },
    ],
    name: APPROVE,
    outputs: [
      {
        name: "",
        type: "bool",
      },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;
