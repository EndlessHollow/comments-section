import React, { FC, ReactNode } from "react";
import styled from "styled-components";

const StyledButton = styled.button<{ hasIcon: boolean }>`
  padding: 0.5em 0.75rem;
  position: relative;
  display: flex;
  align-items: center;
  column-gap: ${({ theme, hasIcon }) =>
    hasIcon ? theme.spacing[2] : undefined};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: ${({ theme }) => theme.fontWeight.fontSemibold};
  border: 2px solid ${({ theme }) => theme.colors.grey};
  border-radius: 4px;
  transition: all 0.25s cubic-bezier(0, 0.94, 0.3, 1.26);

  svg {
    fill: ${({ theme }) => theme.colors.darkBlue};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.blue};
    transition: all 0.25s cubic-bezier(0, 0.94, 0.3, 1.26);

    svg {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export interface ButtonProps {
  onClick: () => void;
  icon?: ReactNode;
}

export const Button: FC<ButtonProps> = (props) => {
  const { icon, onClick, children } = props;
  const hasIcon = icon ? true : false;
  return (
    <StyledButton hasIcon={hasIcon} onClick={onClick}>
      {icon}
      {children}
    </StyledButton>
  );
};
