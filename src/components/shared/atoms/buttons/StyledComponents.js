import styled from 'styled-components';

export const SolidButton = styled.button`
  border-radius: 50px;
  background-color: ${props => props.disabledTransparent ? GS.colors.disabledTransparent : (props.disabled? GS.colors.disabled : (props.promote ? GS.colors.primary : GS.colors.primaryBlue))};
  padding: 11px 30px;
  height: 46px;
  color: ${props => props.disabledTransparent ? GS.colors.grayText : "#fff"};
  border:none;
  text-align:center;
  transition: background-color ease 0.3s;          
  width:${props => props.width};
  font-size: ${GS.fontSize.desktop.BT};
  &:hover{
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    background-color: ${props => props.disabledTransparent ? GS.colors.disabledTransparent : (props.disabled? GS.colors.disabled : (props.promote ? GS.colors.primaryDark : GS.colors.primaryBlueDark))};
  }
  &:focus{
    outline:none;
  }
`;

export const BlankButton = styled.button`
  border-radius: 50px;
  border: 1px solid ${props => props.isSmall && props.color ? props.color: GS.colors.secondary};
  color: ${props => props.isSmall && props.color ? props.color: GS.colors.secondary};
  padding: ${props => props.isSmall? '7px 14px': '10px 30px'};
  text-align:center;
  transition: all ease 0.3s;
  background-color: ${props => props.bgColor ? props.bgColor : "rgba(255,255,255, 0)"};
  width:${props => props.width};
  font-size:${props => props.isSmall? '12px': GS.fontSize.desktop.BT}; 
  &:hover{
    cursor:pointer;
    color: ${props => props.isSmall && !props.color ? '#fff': GS.colors.secondary};
  }
  &:focus{
    outline:none;
  }
`;
