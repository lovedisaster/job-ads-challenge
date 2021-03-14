import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import ActionTypes from "../../actions/ActionTypes";
import { SecondaryButton } from "../shared/atoms/buttons/Buttons";
import {
  CheckOutListTable,
  CheckOutList,
  Item,
  Name,
  Description,
  Price,
  Total,
  CrossedPrice
} from "./CheckOut.styles";
import { GetRules } from "../../api/ApiConsumer";
import {
    DeepClone,
  GetSessionStorage,
  SetSessionStorageRule,
} from "../../utils/CommonUtils";

const CheckOutPage = (props) => {
  let [rules, setRules] = useState(null);
  let [cartList, setCartList] = useState(DeepClone(props.shoppingCart));

  const buyMoreOnClick = useCallback(() => {
    props.dispatch({ type: ActionTypes.GO_TO_STEP, payload: 1 });
  });

  const mapCartListByRules = (cartList, rules) => {
    let newCartList = DeepClone(cartList);
    rules.forEach(r => {
        // Collect all the matching ones to apply for rule
        // const itemsToApplyRules = cartList.find(c => c.code === r.adCode);
        
        const specialRule = r.dealSpecs.find(ds => ds.type === 'DISCOUNT');
        if(specialRule) {
            newCartList = cartList.map(c => {
                if(r.adCode === c.code) {
                    c.originalPrice = c.price;
                    c.price = specialRule.specs.discountPrice;
                }
                return c;
            });
        }
    });
    return cartList;
  };
  const getTotal = useCallback((cartList, rules) => {
    return 1000;
  });

  useEffect(() => {
    const loginDetails = GetSessionStorage("isAuth");
    const r = GetSessionStorage("rule");
    if (r) {
      setRules(r);
    } else {
      GetRules(loginDetails.clientCode)
        .then((r) => {
          setRules(r.data);
          SetSessionStorageRule(r.data);
        })
        .catch((e) => {});
    }
  }, []);

  useEffect(() => {
    if(rules) {
        const cl = mapCartListByRules(props.shoppingCart, rules.rules);
        setCartList(cl);
    }
  })

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
        <CheckOutListTable>
          <CheckOutList>
            {cartList.map((item) => (
              <Item
                key={`${item.name}${Math.random().toString(36).substring(7)}`}
              >
                <Name>{item.name}</Name>
                <Description>{item.description}</Description>
                <Price>${item.price} {item.originalPrice && <CrossedPrice>${item.originalPrice}</CrossedPrice>}</Price>
              </Item>
            ))}
          </CheckOutList>
          <Total>
            Total : ${getTotal(props.shoppingCart, rules)}
          </Total>
        </CheckOutListTable>
      </div>
    </div>
  );
};

CheckOutPage.propTypes = {};

export default CheckOutPage;
