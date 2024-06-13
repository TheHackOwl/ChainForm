export const CREATE_FORM = "createForm";
export const GET_FORM = "getForm";
export const GET_MY_FORMS = "getMyForms";
export const GET_SUBMISSIONS = "getSubmissions";
export const SUBMIT_FORM = "submitForm";

export const CONTRACT_ADDRESS = "0xdD7099FFb56e84657302F1e105451ff7832a1572";

export const ABI = [
  {
    type: "function",
    name: CREATE_FORM,
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
    name: GET_FORM,
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
    name: GET_MY_FORMS,
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
    name: GET_SUBMISSIONS,
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
    name: SUBMIT_FORM,
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
