import {rules} from "../mockData/mockData";

/* 
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
  }
*/

export const getRuleForClient = (clientCode) => {
    return rules.find(rule => rule.clientCode === clientCode);
}

