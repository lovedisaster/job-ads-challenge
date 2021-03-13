import _ from "lodash";
import URI from "urijs";

export const DeepClone = (o) => {
    const output = _.cloneDeep(o);
    return output;
};

export const SetAuth = () => {
    if (sessionStorage !== undefined) {
      sessionStorage.setItem("isAuth", true);
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

export const GetAuth = () => {
    if (!IsEmptyObject(sessionStorage)) {
      return JSON.parse(sessionStorage.getItem("isAuth"));
    } else {
      return null;
    }
  };