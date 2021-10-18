import React, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { ReactComponent as CancelIcon } from "../../assets/cancel.svg";
import { ReactComponent as SendIcon } from "../../assets/send.svg";
import { addComment } from "../../redux/comments-slice";
import { useAppDispatch } from "../../redux/hooks";
import { screens } from "../../utils/screens";
import { Button, Emphasis } from "../button/button";
import { generateRandomNumber } from "./generate-random-number";
import { TextArea } from "./text-area";

export interface ReplyProps {
  commentId: string;
  cols?: number;
  rows?: number;
  required: boolean;
  minLength: number;
  maxLength?: number;
  placeholder?: string;
  handleCancel: () => void;
}

const ReplyContainer = styled.div`
  padding: ${({ theme }) => `${theme.spacing[3]} 0`};
  display: grid;
  row-gap: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
`;

const ControlsPanel = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
  @media (min-width: ${screens.sm}) {
    justify-content: flex-end;
  }
`;

export const Reply: FC<ReplyProps> = (props): JSX.Element => {
  const { handleCancel, commentId, ...rest } = props;
  const { minLength = 2 } = rest;
  const [textAreaValue, setTextAreaValue] = useState<string>("");
  const [error, setError] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
    if (e.target.value.length < minLength) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleReply = (): void => {
    if (textAreaValue.length >= minLength) {
      setTextAreaValue("");
      const newComment = {
        commentId,
        commentData: {
          id: uuidv4(),
          createdAt: new Date().toString(),
          text: textAreaValue,
          user: generateRandomNumber(0, 1).toString(),
          comments: [],
        },
      };
      dispatch(addComment(newComment));
      handleCancel();
    }
  };

  return (
    <ReplyContainer>
      <TextArea
        {...rest}
        error={error}
        value={textAreaValue}
        handleInputChange={handleInputChange}
      />
      <ControlsPanel>
        <Button
          emphasis={Emphasis.secondary}
          icon={<CancelIcon />}
          onClick={handleCancel}
        >
          Cancel
        </Button>
        <Button
          emphasis={Emphasis.primary}
          icon={<SendIcon />}
          onClick={handleReply}
        >
          Send
        </Button>
      </ControlsPanel>
    </ReplyContainer>
  );
};

Reply.displayName = "Reply";
