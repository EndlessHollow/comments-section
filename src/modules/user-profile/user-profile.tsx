import React, { FC } from "react";
import styled from "styled-components";

export interface UserProfileProps {}

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
  return (
    <UserProfileContainer>
      <UserPhotoContainer>
        <UserPhoto
          src={"https://source.unsplash.com/mEZ3PoFGs_k/443×664"}
          alt={"Profile Picture - Estella Horton"}
          loading="lazy"
        />
      </UserPhotoContainer>
      <Username>Estella Horton</Username>
    </UserProfileContainer>
  );
};

UserProfile.displayName = "User Profile";
