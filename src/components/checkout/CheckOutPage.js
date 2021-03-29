import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ActionTypes from '../../actions/ActionTypes';
import { SecondaryButton } from '../shared/atoms/buttons/Buttons';
import { GetRules } from '../../api/ApiConsumer';
import {
  deepClone,
  getSessionStorage,
  setSessionStorageRule,
} from '../../utils/CommonUtils';
import { mapCartListByRules } from './CheckOutFunctions';
import CheckOutForm from './CheckOutForm';

const CheckOutPage = (props) => {
  let [rules, setRules] = useState(null);
  let [cartList, setCartList] = useState(deepClone(props.shoppingCart));

  const buyMoreOnClick = useCallback(() => {
    props.dispatch({ type: ActionTypes.GO_TO_STEP, payload: 1 });
  });

  useEffect(() => {
    const loginDetails = getSessionStorage('isAuth');
    const r = getSessionStorage('rule');
    if (r) {
      setRules(r);
    } else {
      GetRules(loginDetails.clientCode)
        .then((r) => {
          setRules(r.data);
          setSessionStorageRule(r.data);
        })
        .catch((e) => {});
    }
  }, []);

  useEffect(() => {
    if (rules) {
      const cl = mapCartListByRules(cartList, rules.rules);
      setCartList(cl);
    }
  }, [rules]);

  return (
    <div className="container">
      <br />
      <br />
      <div className="row">
        <SecondaryButton
          isSmall={true}
          color={GS.colors.primaryBlue}
          value="Buy more ads"
          onClickHandler={buyMoreOnClick}
        />
      </div>
      <div className="row">
        <CheckOutForm cartList={cartList} rules={rules} />
      </div>
    </div>
  );
};

CheckOutPage.propTypes = {
  dispatch: PropTypes.func,
  shoppingCart: PropTypes.array,
};

export default CheckOutPage;
