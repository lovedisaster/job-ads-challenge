import styled from 'styled-components';

export const CheckOutListTable = styled.div`
    width: 500px;
    margin: auto;
    display: block;
    border: 1px solid ${GS.colors.primaryBlue};
    padding: 30px;
`;

export const CheckOutList = styled.ul`
    padding:0;
`;
export const CrossedPrice = styled.span`
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translate(-15px, 0);
    color: red;
    text-decoration: line-through;
`;

export const Item = styled.li`
    padding: 0 0 15px 0;
    margin: 0 0 25px 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 1px solid #ddd;
    border-radius: ${GS.styles.borderRadius1};
`;

export const Name = styled.span`
    width: 100px;
`;

export const Description = styled.span`
    flex: 1;
`;

export const Price = styled.span`
    width: 100px;
    text-align: right;
    position: relative;
`;

export const Total = styled.div`
    display: block;
    clear: both;
    text-align: right;
`;