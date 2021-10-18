import React, { useEffect } from "react";
import styled from "styled-components";
import { receiveComments } from "../../redux/comments-slice";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { initializeStore } from "../../redux/initialize-store";
import { receiveUsers } from "../../redux/users-slice";
import { Comment } from "./comment";

const boxWidth = "43.75rem";

const CommentsSectionContainer = styled.div`
  max-width: 43.75rem;
  border-radius: 0.25rem;
  margin: ${({ theme }) => `${theme.spacing[4]} auto`};
  padding: ${({ theme }) => `${theme.spacing[4]}`};
  display: grid;
  row-gap: ${({ theme }) => theme.spacing[4]};
  background-color: ${({ theme }) => theme.colors.grey100};

  @media (max-width: ${boxWidth}) {
    margin: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[4]}`};
  }
`;

export const CommentsSection = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users);
  const comments = useAppSelector((state) => state.comments);

  useEffect(() => {
    initializeStore("users", dispatch, receiveUsers);
    initializeStore("comments", dispatch, receiveComments);
  }, []);

  return (
    <CommentsSectionContainer>
      {comments.map((comment) => (
        <Comment key={comment.id} users={users} comment={comment} mainComment />
      ))}
    </CommentsSectionContainer>
  );
};

CommentsSection.displayName = "Comments Section";
