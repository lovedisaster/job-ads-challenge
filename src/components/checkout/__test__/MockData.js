const DEALTYPES = {
    EXTRA: "EXTRA",
    DISCOUNT: "DISCOUNT",
  };
  
export const MockCartList1 = [
      {
        code: "CLASSIC",
        name: "Classic Ad",
        description: "",
        price: 269.99
      },
      {
        code: "PREMIUM",
        name: "Premium Ad",
        description: "",
        price: 394.99
      },
      {
        code: "STANDOUT",
        name: "Stand out Ad",
        description: "",
        price: 322.99
      }
];

export const MockCartList2 = [
  {
    code: "PREMIUM",
    name: "Premium Ad",
    description: "",
    price: 394.99
  },
  {
    code: "PREMIUM",
    name: "Premium Ad",
    description: "",
    price: 394.99
  },
  {
    code: "PREMIUM",
    name: "Premium Ad",
    description: "",
    price: 394.99
  },
  {
    code: "PREMIUM",
    name: "Premium Ad",
    description: "",
    price: 394.99
  }
];

export const MockMappedCartList = [
    {
      code: "PREMIUM",
      name: "Premium Ad",
      description: "",
      price: 389.99
    },
    {
      code: "PREMIUM",
      name: "Premium Ad",
      description: "",
      price: 389.99
    },
    {
      code: "PREMIUM",
      name: "Premium Ad",
      description: "",
      price: 389.99
    },
    {
      code: "PREMIUM",
      name: "Premium Ad",
      description: "",
      price: 389.99
    }
];

export const MockRules = [
    {
      adCode: "PREMIUM",
      dealSpecs: [
        { type: DEALTYPES.DISCOUNT, specs: { discountPrice: 389.99 } },
        { type: DEALTYPES.EXTRA, specs: { buy: 4, take: 5 } },
      ]
    }
  ] 