export const abi = [
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
    ],
    outputs: [],
    stateMutability: "nonpayable",
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
        internalType: "struct ChainForm.Form",
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
        internalType: "struct ChainForm.Submission[]",
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
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;
