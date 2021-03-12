import styled from "styled-components";

export const Heading = styled.h1`
  font-size: ${GS.fontSize.h1};
  color: ${GS.colors.primaryBlue};
`;

export const AdCard = styled.div`
  display: inline-flex;
  position: relative;
  border: 1px solid #ddd;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 95%;
  margin: auto;
  min-height: 300px;
  height: auto;
  padding: 40px 15px 60px;
  border-radius: ${GS.styles.borderRadius1};
  .ad-name {
    text-align: center;
    color: ${GS.colors.secondary};
  }
  .price {
    text-align: center;
    color: hsl(226, 64.9%, 29%);
    font-size: ${GS.fontSize.desktop.h2};
  }
  .desc {
    text-align: center;
    color: hsl(0, 0, 50%);
    font-size: ${GS.fontSize.desktop.small};
  }
  > button {
    position: absolute;
    bottom: 20px;
  }
`;
