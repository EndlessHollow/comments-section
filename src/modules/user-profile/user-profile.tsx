import React, { FC } from "react";
import styled from "styled-components";

export interface UserProfileProps {
  username: string;
  avatar: string;
}

const pictureSize = "3rem;";

const UserProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing[4]};
`;

const UserPhotoContainer = styled.div`
  width: ${pictureSize};
  height: ${pictureSize};
`;

const UserPhoto = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  object-position: top;
  object-fit: cover;
`;
const Username = styled.span`
  font-size: ${({ theme }) => theme.fontSize["text-base"]};
  font-weight: ${({ theme }) => theme.fontWeight.fontMedium};
  color: ${({ theme }) => theme.colors.black};
`;

export const UserProfile: FC<UserProfileProps> = (props): JSX.Element => {
  const { username, avatar } = props;
  return (
    <UserProfileContainer>
      <UserPhotoContainer>
        <UserPhoto
          src={avatar}
          alt={`Profile Picture - ${username}`}
          loading="lazy"
        />
      </UserPhotoContainer>
      <Username>{username}</Username>
    </UserProfileContainer>
  );
};

UserProfile.displayName = "User Profile";
