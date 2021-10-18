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
  required?: boolean;
  minLength?: number;
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
  const [textAreaValue, setTextAreaValue] = useState<string | undefined>();
  const dispatch = useAppDispatch();

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  const handleReply = (value: string): void => {
    if (value) {
      setTextAreaValue("");
      const newComment = {
        commentId,
        commentData: {
          id: uuidv4(),
          createdAt: new Date().toString(),
          text: value ?? "",
          user: generateRandomNumber(0, 1).toString(),
          comments: [],
        },
      };
      dispatch(addComment(newComment));
    } else {
      //TODO: Make user know why it was not sended
      return;
    }
  };

  return (
    <ReplyContainer>
      <TextArea
        {...rest}
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
          onClick={() => handleReply(textAreaValue ?? "")}
        >
          Send
        </Button>
      </ControlsPanel>
    </ReplyContainer>
  );
};

Reply.displayName = "Reply";
