export const REWARD_ABI = [
  {
    type: "function",
    name: "addReward",
    inputs: [
      {
        name: "formId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "getMetaData",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct LogicMeta",
        components: [
          {
            name: "name",
            type: "string",
            internalType: "string",
          },
          {
            name: "description",
            type: "string",
            internalType: "string",
          },
          {
            name: "version",
            type: "string",
            internalType: "string",
          },
          {
            name: "argsDescription",
            type: "string[]",
            internalType: "string[]",
          },
          {
            name: "argsNumber",
            type: "int8",
            internalType: "int8",
          },
          {
            name: "trigger",
            type: "int8",
            internalType: "int8",
          },
        ],
      },
    ],
    stateMutability: "pure",
  },
  {
    type: "function",
    name: "reward",
    inputs: [
      {
        name: "_user",
        type: "address",
        internalType: "address",
      },
      {
        name: "formId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "rewardAmount",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
] as const;
