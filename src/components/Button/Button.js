import React from 'react';
import styled from 'styled-components';

const Button = ({ name, icon, onClick, bg, bPad, color, bRad }) => {
  return (
    <ButtonStyled
      style={{
        background: bg,
        padding: bPad,
        borderRadius: bRad,
        color: color,
      }}
      onClick={onClick}
    >
      {icon && <Icon>{icon}</Icon>}
      <Label>{name}</Label>
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  outline: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  border-radius: 0.5rem;
  padding: ${({ bPad }) => bPad || '0.5rem 1rem'};
  background-color: ${({ bg }) => bg || 'transparent'};
  color: ${({ color }) => color || 'inherit'};

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }

  @media screen and (max-width: 768px) {
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
  }
`;

const Icon = styled.span`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  white-space: nowrap;
`;

export default Button;
