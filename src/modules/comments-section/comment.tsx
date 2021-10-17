import React, { FC, useState } from "react";
import styled from "styled-components";
import { ReactComponent as ReplyIcon } from "../../assets/reply.svg";
import { CommentsData, UserData } from "../../types/types";
import { screens } from "../../utils/screens";
import { Button, Emphasis } from "../button/button";
import { Reply } from "../reply/reply";
import { UserProfile } from "../user-profile/user-profile";
import { assignUserToComment } from "./assign-user-to-comment";

export interface CommentBlockProps {
  users: UserData[];
  comment: CommentsData;
}

export interface CommentProps {
  users: UserData[];
  comment: CommentsData;
  mainComment?: boolean;
}

const CommentContainer = styled.div<{ mainComment: boolean | undefined }>`
  display: grid;
  row-gap: ${({ theme }) => theme.spacing[4]};
  margin-left: ${({ theme, mainComment }) =>
    mainComment ? undefined : theme.spacing[8]};
  background-color: ${({ theme }) => theme.colors.grey100};
`;

const CommentWrapper = styled.div`
  display: grid;
  row-gap: ${({ theme }) => theme.spacing[4]};
  padding: ${({ theme }) =>
    `${theme.spacing[6]} ${theme.spacing[6]} ${theme.spacing[3]} ${theme.spacing[6]}`};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 0.25rem;
`;

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${screens.sm}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const PublishDate = styled.span`
  margin-top: ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.fontSize["text-sm"]};
  font-weight: ${({ theme }) => theme.fontWeight.fontMedium};
  color: ${({ theme }) => theme.colors.grey300};

  @media (min-width: ${screens.sm}) {
    margin-top: 0;
  }
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
  const { users, comment, mainComment } = props;
  const [isOpen, setIsOpen] = useState(false);
  const user = assignUserToComment(users, comment.user);

  const elapsedTime = (): string => {
    var msCreatedAt = new Date(comment.createdAt).getTime();
    var msNow = new Date().getTime();
    return prettifyTime(msNow - msCreatedAt);
  };

  const prettifyTime = (ms: number): string => {
    ms = Math.abs(ms);
    var prettyTime;
    if (ms >= 1000 * 60 * 60 * 24 * 365) {
      prettyTime = Math.floor(ms / (1000 * 60 * 60 * 24 * 365)) + " years";
    } else if (ms >= 1000 * 60 * 60 * 24 * 30) {
      prettyTime = Math.floor(ms / (1000 * 60 * 60 * 24 * 30)) + " months";
    } else if (ms >= 1000 * 60 * 60 * 24) {
      prettyTime = Math.floor(ms / (1000 * 60 * 60 * 24)) + " days";
    } else if (ms >= 1000 * 60 * 60) {
      prettyTime = Math.floor(ms / (1000 * 60 * 60)) + " hours";
    } else {
      prettyTime = Math.floor(ms / (1000 * 60)) + " minutes";
    }

    return prettyTime.split(" ")[0] === "1"
      ? prettyTime.slice(0, -1)
      : prettyTime;
  };

  const handleToggleReply = (): void => {
    setIsOpen(!isOpen);
  };

  const handleCancel = (): void => {
    setIsOpen(false);
  };

  return (
    <CommentContainer mainComment={mainComment}>
      <CommentWrapper>
        <HeadlineContainer>
          <UserProfile
            username={user?.username ?? ""}
            avatar={user?.avatar ?? ""}
          />
          <PublishDate>{elapsedTime()} ago</PublishDate>
        </HeadlineContainer>
        <CommentText>{comment.text}</CommentText>
        <ActionsContainer>
          <Button
            emphasis={Emphasis.primary}
            icon={<ReplyIcon />}
            onClick={handleToggleReply}
          >
            Reply
          </Button>
        </ActionsContainer>

        {isOpen && (
          <Reply
            rows={8}
            minLength={2}
            maxLength={255}
            handleCancel={handleCancel}
          />
        )}
      </CommentWrapper>
      {comment.comments.length
        ? comment.comments.map((comment) => (
            <Comment key={comment.id} users={users} comment={comment} />
          ))
        : null}
    </CommentContainer>
  );
};

Comment.displayName = "Comment";
