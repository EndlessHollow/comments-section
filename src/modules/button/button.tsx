import React, { FC, ReactNode } from "react";
import styled from "styled-components";

export enum Emphasis {
  primary,
  secondary,
}

export interface ButtonProps {
  onClick: () => void;
  emphasis: Emphasis;
  icon?: ReactNode;
}

const StyledButton = styled.button<{ hasIcon: boolean; emphasis: Emphasis }>`
  padding: 0.5em 0.75rem;
  position: relative;
  display: flex;
  align-items: center;
  column-gap: ${({ theme, hasIcon }) =>
    hasIcon ? theme.spacing[2] : undefined};
  background-color: ${({ theme, emphasis }) =>
    emphasis === Emphasis.primary ? theme.colors.black : theme.colors.white};
  color: ${({ theme, emphasis }) =>
    emphasis === Emphasis.primary ? theme.colors.white : theme.colors.grey300};
  font-weight: ${({ theme }) => theme.fontWeight.fontSemibold};
  border: ${({ theme, emphasis }) =>
    emphasis === Emphasis.primary
      ? `2px solid ${theme.colors.black}`
      : `2px solid ${theme.colors.grey200}`};
  border-radius: 4px;
  transition: all 0.25s cubic-bezier(0, 0.94, 0.3, 1.26);

  svg {
    fill: ${({ theme, emphasis }) =>
      emphasis === Emphasis.primary
        ? theme.colors.white
        : theme.colors.grey300};
  }

  &:hover {
    background-color: ${({ theme, emphasis }) =>
      emphasis === Emphasis.primary ? theme.colors.white : theme.colors.white};
    color: ${({ theme, emphasis }) =>
      emphasis === Emphasis.primary ? theme.colors.black : theme.colors.black};
    border: ${({ theme, emphasis }) =>
      emphasis === Emphasis.primary
        ? `2px solid ${theme.colors.black}`
        : `2px solid ${theme.colors.black}`};
    transition: all 0.25s cubic-bezier(0, 0.94, 0.3, 1.26);

    svg {
      fill: ${({ theme, emphasis }) =>
        emphasis === Emphasis.primary
          ? theme.colors.black
          : theme.colors.black};
    }
  }

  &:focus {
    background-color: ${({ theme, emphasis }) =>
      emphasis === Emphasis.primary ? theme.colors.white : theme.colors.white};
    color: ${({ theme, emphasis }) =>
      emphasis === Emphasis.primary ? theme.colors.black : theme.colors.black};
    border: ${({ theme, emphasis }) =>
      emphasis === Emphasis.primary
        ? `2px solid ${theme.colors.black}`
        : `2px solid ${theme.colors.black}`};
    transition: all 0.25s cubic-bezier(0, 0.94, 0.3, 1.26);

    svg {
      fill: ${({ theme, emphasis }) =>
        emphasis === Emphasis.primary
          ? theme.colors.black
          : theme.colors.black};
    }
  }
`;

export const Button: FC<ButtonProps> = (props) => {
  const { emphasis, icon, onClick, children } = props;
  const hasIcon = icon ? true : false;
  return (
    <StyledButton emphasis={emphasis} hasIcon={hasIcon} onClick={onClick}>
      {icon}
      {children}
    </StyledButton>
  );
};
