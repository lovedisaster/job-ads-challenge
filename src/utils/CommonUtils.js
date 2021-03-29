import _ from 'lodash';
import URI from 'urijs';

export const deepClone = (o) => {
  const output = _.cloneDeep(o);
  return output;
};

export const setAuth = (name) => {
  if (sessionStorage !== undefined) {
    sessionStorage.setItem(
      'isAuth',
      JSON.stringify({ isAuth: true, clientCode: name })
    );
  }
};

export const setSessionStorageRule = (rule) => {
  if (sessionStorage !== undefined) {
    sessionStorage.setItem('rule', JSON.stringify(rule));
  }
};

export const getSessionStorage = (item) => {
  if (!isEmptyObject(sessionStorage)) {
    return JSON.parse(sessionStorage.getItem(item));
  } else {
    return null;
  }
};

export const setShoppingCart = (shoppingCartList) => {
  if (sessionStorage !== undefined) {
    sessionStorage.setItem('shoppingCart', JSON.stringify(shoppingCartList));
  }
};

export const isEmptyObject = (obj) => {
  return (
    JSON.stringify(obj) === '{}' ||
    JSON.stringify(obj) === '[]' ||
    JSON.stringify(obj) === 'null' ||
    obj === '' ||
    obj === null ||
    obj === undefined
  );
};
