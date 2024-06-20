export const CHAINFORM_ADDRESS = "0x2c8fC3cC66508417Dc19b6db56bd2E817313cF8A";

export const CHAINFORM_ABI = [
  {
    type: "function",
    name: "claim",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "contract IERC20",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "createForm",
    inputs: [
      {
        name: "_name",
        type: "string",
        internalType: "string",
      },
      {
        name: "_description",
        type: "string",
        internalType: "string",
      },
      {
        name: "_questions",
        type: "string[]",
        internalType: "string[]",
      },
      {
        name: "_formSettings",
        type: "tuple",
        internalType: "struct FormSettings",
        components: [
          {
            name: "rewardRule",
            type: "tuple",
            internalType: "struct RewardRule",
            components: [
              {
                name: "intSettings",
                type: "int256[]",
                internalType: "int256[]",
              },
              {
                name: "token",
                type: "address",
                internalType: "contract IERC20",
              },
            ],
          },
          {
            name: "rewardLogic",
            type: "address",
            internalType: "contract IRewardLogic",
          },
          {
            name: "expireAt",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    outputs: [
      {
        name: "formId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "getForm",
    inputs: [
      {
        name: "_formId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        internalType: "struct Form",
        components: [
          {
            name: "creator",
            type: "address",
            internalType: "address",
          },
          {
            name: "createdAt",
            type: "uint256",
            internalType: "uint256",
          },
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
            name: "questions",
            type: "string[]",
            internalType: "string[]",
          },
        ],
      },
      {
        name: "",
        type: "tuple",
        internalType: "struct FormSettings",
        components: [
          {
            name: "rewardRule",
            type: "tuple",
            internalType: "struct RewardRule",
            components: [
              {
                name: "intSettings",
                type: "int256[]",
                internalType: "int256[]",
              },
              {
                name: "token",
                type: "address",
                internalType: "contract IERC20",
              },
            ],
          },
          {
            name: "rewardLogic",
            type: "address",
            internalType: "contract IRewardLogic",
          },
          {
            name: "expireAt",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getFormsByPage",
    inputs: [
      {
        name: "_page",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_perPage",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "result",
        type: "tuple[]",
        internalType: "struct Form[]",
        components: [
          {
            name: "creator",
            type: "address",
            internalType: "address",
          },
          {
            name: "createdAt",
            type: "uint256",
            internalType: "uint256",
          },
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
            name: "questions",
            type: "string[]",
            internalType: "string[]",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getMyForms",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint256[]",
        internalType: "uint256[]",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getRewards",
    inputs: [
      {
        name: "token",
        type: "address",
        internalType: "contract IERC20",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getSubmissions",
    inputs: [
      {
        name: "_formId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct Submission[]",
        components: [
          {
            name: "dataHash",
            type: "string",
            internalType: "string",
          },
          {
            name: "cid",
            type: "string",
            internalType: "string",
          },
          {
            name: "submitter",
            type: "address",
            internalType: "address",
          },
          {
            name: "submittedAt",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getSubmissionsByPage",
    inputs: [
      {
        name: "_formId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_page",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_perPage",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct Submission[]",
        components: [
          {
            name: "dataHash",
            type: "string",
            internalType: "string",
          },
          {
            name: "cid",
            type: "string",
            internalType: "string",
          },
          {
            name: "submitter",
            type: "address",
            internalType: "address",
          },
          {
            name: "submittedAt",
            type: "uint256",
            internalType: "uint256",
          },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "hasUserSubmitted",
    inputs: [
      {
        name: "_formId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    outputs: [
      {
        name: "",
        type: "bool",
        internalType: "bool",
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "submitForm",
    inputs: [
      {
        name: "_formId",
        type: "uint256",
        internalType: "uint256",
      },
      {
        name: "_dataHash",
        type: "string",
        internalType: "string",
      },
      {
        name: "_cid",
        type: "string",
        internalType: "string",
      },
    ],
    outputs: [
      {
        name: "submissionId",
        type: "uint256",
        internalType: "uint256",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "RewardChanged",
    inputs: [
      {
        name: "changeType",
        type: "uint8",
        indexed: true,
        internalType: "uint8",
      },
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "token",
        type: "address",
        indexed: false,
        internalType: "contract IERC20",
      },
      {
        name: "formId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "rewardAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "timestamp",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
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
