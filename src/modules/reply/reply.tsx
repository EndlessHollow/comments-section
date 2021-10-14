import React, { FC } from "react";
import styled from "styled-components";
import { ReactComponent as CancelIcon } from "../../assets/cancel.svg";
import { ReactComponent as SendIcon } from "../../assets/send.svg";
import { Button } from "../button/button";
import { TextArea } from "./text-area";

const ReplyContainer = styled.div`
  padding: ${({ theme }) => `${theme.spacing[3]} ${theme.spacing[6]}`};
  display: grid;
  row-gap: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
`;

const ControlsPanel = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
`;

export interface ReplyProps {
  cols?: number;
  rows?: number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
  handleCancel: () => void;
}

export const Reply: FC<ReplyProps> = (props): JSX.Element => {
  const { handleCancel, ...rest } = props;

  return (
    <ReplyContainer>
      <TextArea {...rest} />
      <ControlsPanel>
        <Button icon={<CancelIcon />} onClick={handleCancel}>
          Cancel
        </Button>
        <Button icon={<SendIcon />} onClick={() => undefined}>
          Send
        </Button>
      </ControlsPanel>
    </ReplyContainer>
  );
};

Reply.displayName = "Reply";
