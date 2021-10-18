import React, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";

export interface TextAreaProps {
  value: string | undefined;
  cols?: number;
  rows?: number;
  required: boolean;
  error: boolean;
  minLength: number;
  maxLength?: number;
  placeholder?: string;
  handleInputChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextAreaContainer = styled.div`
  position: relative;
`;
//;
const StyledTextArea = styled.textarea<{ error: boolean }>`
  resize: none;
  padding: ${({ theme }) => theme.spacing[4]};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize["text-base"]};
  border: ${({ theme, error }) =>
    error
      ? `2px solid ${theme.colors.red}`
      : `2px solid ${theme.colors.grey200}`};
  box-sizing: border-box;
  border-radius: 0.25rem;

  &::-webkit-input-placeholder {
    color: ${({ theme }) => theme.colors.grey300};
  }
`;

const CharacterCounter = styled.span`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing[4]};
  right: ${({ theme }) => theme.spacing[4]};
  font-size: ${({ theme }) => theme.fontSize["text-sm"]};
  color: ${({ theme }) => theme.colors.grey300};
`;

const Error = styled.span`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSize["text-sm"]};
`;

export const TextArea: FC<TextAreaProps> = (props): JSX.Element => {
  const {
    value,
    cols,
    rows,
    required,
    error,
    minLength,
    maxLength,
    placeholder = "What are your thoughts...",
    handleInputChange,
  } = props;
  const [charCount, setCharCount] = useState(`0 | ${maxLength}`);

  const handleCharLimit = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (maxLength && inputValue.length >= maxLength) {
      setCharCount(`${maxLength} | ${maxLength}`);
    } else {
      setCharCount(`${inputValue.length} | ${maxLength}`);
    }
  };

  return (
    <>
      <TextAreaContainer>
        <StyledTextArea
          value={value}
          onChange={(event) => {
            handleInputChange(event);
            handleCharLimit(event);
          }}
          placeholder={placeholder}
          rows={rows}
          cols={cols}
          minLength={minLength}
          maxLength={maxLength}
          required={required}
          error={error}
        />
        {maxLength && <CharacterCounter>{charCount}</CharacterCounter>}
      </TextAreaContainer>
      {error && (
        <Error>{`The message needs to be at least ${minLength} characters long`}</Error>
      )}
    </>
  );
};

TextArea.displayName = "Text Area";
