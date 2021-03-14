import { rules } from "../mockData/mockData";

export const getRuleForClient = (clientCode) => {
  return rules.find((rule) => rule.clientCode === clientCode);
};
