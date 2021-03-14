import _ from "lodash";
import URI from "urijs";

export const DeepClone = (o) => {
  const output = _.cloneDeep(o);
  return output;
};

export const SetAuth = (name) => {
  if (sessionStorage !== undefined) {
    sessionStorage.setItem(
      "isAuth",
      JSON.stringify({ isAuth: true, clientCode: name })
    );
  }
};

export const SetSessionStorageRule = (rule) => {
  if (sessionStorage !== undefined) {
    sessionStorage.setItem(
      "rule",
      JSON.stringify(rule)
    );
  }
};

export const GetSessionStorage = (item) => {
  if (!IsEmptyObject(sessionStorage)) {
    return JSON.parse(sessionStorage.getItem(item));
  } else {
    return null;
  }
};

export const SetShoppingCart = (shoppingCartList) => {
  if (sessionStorage !== undefined) {
    sessionStorage.setItem("shoppingCart", JSON.stringify(shoppingCartList));
  }
};

export const IsEmptyObject = (obj) => {
  return (
    JSON.stringify(obj) === "{}" ||
    JSON.stringify(obj) === "[]" ||
    JSON.stringify(obj) === "null" ||
    obj === "" ||
    obj === null ||
    obj === undefined
  );
};
