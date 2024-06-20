export const REGISTRY_ADDRESS = "0x7eCaCee4f398A30287cD7402033Cf3f230677743";

export const REGISTRY_ABI = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "addRewardContract",
    inputs: [
      {
        name: "rewardLogic",
        type: "address",
        internalType: "contract IRewardLogic",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "checkAllowedRewardContract",
    inputs: [
      {
        name: "rewardLogic",
        type: "address",
        internalType: "contract IRewardLogic",
      },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "get",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRewardContracts",
    inputs: [],
    outputs: [
      { name: "", type: "address[]", internalType: "contract IRewardLogic[]" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "removeRewardContract",
    inputs: [
      {
        name: "rewardLogic",
        type: "address",
        internalType: "contract IRewardLogic",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "update",
    inputs: [{ name: "_contract", type: "address", internalType: "address" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "Updated",
    inputs: [
      {
        name: "current",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
] as const;
