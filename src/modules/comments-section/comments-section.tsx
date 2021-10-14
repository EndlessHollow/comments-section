import React, { FC } from "react";
import styled from "styled-components";
import { Comment } from "./comment";

const boxWidth = "43.75rem";

const CommentsSectionContainer = styled.div`
  max-width: 43.75rem;
  border-radius: 0.25rem;
  margin: ${({ theme }) => `${theme.spacing[4]} auto`};
  padding: ${({ theme }) => `${theme.spacing[4]}`};
  background-color: ${({ theme }) => theme.colors.lightgrey};

  @media (max-width: ${boxWidth}) {
    margin: ${({ theme }) => `${theme.spacing[4]} ${theme.spacing[4]}`};
  }
`;

export interface CommentsSection {}

export const CommentsSection: FC<CommentsSection> = (props): JSX.Element => {
  return (
    <CommentsSectionContainer>
      <Comment />
    </CommentsSectionContainer>
  );
};

CommentsSection.displayName = "Comments Section";
