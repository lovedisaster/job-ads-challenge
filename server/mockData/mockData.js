const DEALTYPES = {
  EXTRA: "EXTRA",
  DISCOUNT: "DISCOUNT",
};

export const initState = {
  ads: [
    {
      code: "CLASSIC",
      name: "Classic Ad",
      description: "Offers the most basic level of advertisement",
      price: 269.99,
    },
    {
      code: "STANDOUT",
      name: "Stand out Ad",
      description:
        "Allows advertisers to use a company logo and use a longer presentation text",
      price: 322.99,
    },
    {
      code: "PREMIUM",
      name: "Premium Ad",
      description:
        "Same benefits as Standout Ad, but also puts the advertisement at the top of the results, allowing higher visibility",
      price: 394.99,
    },
  ],
};

export const rules = [
  {
    clientCode: "SB",
    rules: [
      {
        adCode: "CLASSIC",
        dealSpecs: [{ type: DEALTYPES.EXTRA, specs: { buy: 2, take: 3 } }],
      },
    ],
  },
  {
    clientCode: "ACR",
    rules: [
      {
        adCode: "STANDOUT",
        dealSpecs: [
          { type: DEALTYPES.DISCOUNT, specs: { discountPrice: 299.99 } },
        ],
      },
    ],
  },
  {
    clientCode: "MY",
    rules: [
      {
        adCode: "PREMIUM",
        dealSpecs: [
          { type: DEALTYPES.DISCOUNT, specs: { discountPrice: 389.99 } },
          { type: DEALTYPES.EXTRA, specs: { buy: 4, take: 5 } },
        ],
      },
    ],
  },
];

export const clients = [
  { clientCode: "SB", fullName: "SecondBite" },
  { clientCode: "ACR", fullName: "Axil Coffee Roasters" },
  { clientCode: "MY", fullName: "MYER" },
];
