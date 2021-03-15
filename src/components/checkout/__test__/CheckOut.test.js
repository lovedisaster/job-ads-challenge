import React from 'react';
import CheckOutForm from '../CheckOutForm';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import {getTotal, mapCartListByRules} from '../CheckOutFunctions'
import {MockCartList1, MockCartList2, MockMappedCartList, MockRules} from './MockData';

describe("Test checkout functions", () => {
    test("Total should have discount value considered", () => {
        const mappedList = mapCartListByRules(MockCartList1, MockRules);
        const total = getTotal(mappedList);
        expect(total).toEqual("982.97");
    });

    test("Complimentary ad should be added by rules", () => {
        const mappedList = mapCartListByRules(MockCartList2, MockRules);
        expect(mappedList.length).toEqual(MockCartList2.length + 1);
    });
});

describe("Test checkout form total amount" , () => {
    beforeAll(() => {
        render(<CheckOutForm cartList={MockMappedCartList} rules={MockRules}/>);
    })
    test("Total amount should be correctly displayed", () => {
        expect(screen.getByTestId("total")).toHaveTextContent("1559.96");
    });
});