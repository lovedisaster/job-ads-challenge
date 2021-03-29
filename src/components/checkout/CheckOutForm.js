import React from 'react';
import PropTypes from 'prop-types';
import {
  CheckOutListTable,
  CheckOutList,
  Item,
  Name,
  Description,
  Price,
  Total,
  CrossedPrice,
} from './CheckOut.styles';
import { getTotal } from './CheckOutFunctions';

const CheckOutForm = ({ cartList, rules }) => {
  return (
    <CheckOutListTable>
      <CheckOutList>
        {cartList.map((item) => (
          <Item key={`${item.name}${Math.random().toString(36).substring(7)}`}>
            <Name>{item.name}</Name>
            <Description>{item.description}</Description>
            <Price>
              ${item.price}{' '}
              {item.originalPrice && (
                <CrossedPrice>${item.originalPrice}</CrossedPrice>
              )}
            </Price>
          </Item>
        ))}
      </CheckOutList>
      <Total data-testid="total">Total : ${getTotal(cartList, rules)}</Total>
    </CheckOutListTable>
  );
};

CheckOutForm.propTypes = {
  cartList: PropTypes.array,
  rules: PropTypes.object,
};

export default CheckOutForm;
