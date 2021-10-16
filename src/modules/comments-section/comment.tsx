import React, { FC, useState } from "react";
import styled from "styled-components";
import { ReactComponent as ReplyIcon } from "../../assets/reply.svg";
import { Button, Emphasis } from "../button/button";
import { Reply } from "../reply/reply";
import { UserProfile } from "../user-profile/user-profile";

export interface CommentProps {}

const CommentContainer = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) =>
    `${theme.spacing[6]} ${theme.spacing[6]} ${theme.spacing[3]} ${theme.spacing[6]}`};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
`;

const HeadlineContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PublishDate = styled.span`
  font-size: ${({ theme }) => theme.fontSize["text-sm"]};
  font-weight: ${({ theme }) => theme.fontWeight.fontMedium};
  color: ${({ theme }) => theme.colors.grey300};
`;

const CommentText = styled.p`
  color: ${({ theme }) => theme.colors.black};
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: ${({ theme }) => theme.spacing[4]};
  align-items: center;
`;

export const Comment: FC<CommentProps> = (props): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleReply = (): void => {
    setIsOpen(!isOpen);
  };

  const handleCancel = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <CommentContainer>
        <HeadlineContainer>
          <UserProfile />
          <PublishDate>01/12/2021</PublishDate>
        </HeadlineContainer>
        <CommentText>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </CommentText>
        <ActionsContainer>
          <Button
            emphasis={Emphasis.primary}
            icon={<ReplyIcon />}
            onClick={handleToggleReply}
          >
            Reply
          </Button>
        </ActionsContainer>
      </CommentContainer>
      {isOpen && (
        <Reply
          rows={8}
          minLength={2}
          maxLength={255}
          handleCancel={handleCancel}
        />
      )}
    </>
  );
};

Comment.displayName = "Comment";
