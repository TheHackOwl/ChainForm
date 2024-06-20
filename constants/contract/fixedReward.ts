export const FIXEDREWARD_ADDRESS = "0xC713edf46b90EB11C468e289613b2b1f95b65367";

export const FIXEDREWARD_ABI = [
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
  {
    type: "error",
    name: "AddressEmptyCode",
    inputs: [
      {
        name: "target",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "AddressInsufficientBalance",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    type: "error",
    name: "FailedInnerCall",
    inputs: [],
  },
  {
    type: "error",
    name: "SafeERC20FailedOperation",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "address",
      },
    ],
  },
] as const;
