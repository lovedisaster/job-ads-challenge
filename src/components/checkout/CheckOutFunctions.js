import { DeepClone } from "../../utils/CommonUtils";

const DEALTYPES = {
  EXTRA: "EXTRA",
  DISCOUNT: "DISCOUNT",
};

export const mapCartListByRules = (cartList, rules) => {
  let newCartList = DeepClone(cartList);
  rules.forEach((r) => {
    const specialRule = r.dealSpecs.find(
      (ds) => ds.type === DEALTYPES.DISCOUNT
    );
    // Apply special rules
    if (specialRule) {
      newCartList = newCartList.map((c) => {
        if (r.adCode === c.code) {
          c.originalPrice = c.price;
          c.price = specialRule.specs.discountPrice;
        }
        return c;
      });
    }

    //Validate for extraRules
    const extraRule = r.dealSpecs.find((ds) => ds.type === DEALTYPES.EXTRA);
    if (extraRule) {
      const allItemsApplyExtraRules = newCartList.filter(
        c => r.adCode === c.code
      );

      if (allItemsApplyExtraRules && allItemsApplyExtraRules.length > 0) {
        const complimentaryCount =
          (Math.floor(allItemsApplyExtraRules.length / extraRule.specs.buy)) *
          (extraRule.specs.take - extraRule.specs.buy);
        //Apply extra rules
        if (complimentaryCount) {
          let complementaryAdItem = DeepClone(allItemsApplyExtraRules[0]);
          complementaryAdItem.originalPrice = complementaryAdItem.price;
          complementaryAdItem.price = 0;
          for (let i = 0; i < complimentaryCount; i++) {
            newCartList.push(complementaryAdItem);
          }
        }
      }
    }
  });
  return newCartList;

};

export const getTotal = (cartList) => {
  const simplePriceArray = cartList.map((c) => c.price);
  const total = simplePriceArray.reduce((sum, current) => sum + current, 0);
  return parseFloat(total).toFixed(2);
};
