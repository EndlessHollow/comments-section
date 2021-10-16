import React, { ChangeEvent, FC, useState } from "react";
import styled from "styled-components";

export interface TextAreaProps {
  cols?: number;
  rows?: number;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  placeholder?: string;
}

const TextAreaContainer = styled.div`
  position: relative;
`;

const StyledTextArea = styled.textarea`
  resize: none;
  padding: ${({ theme }) => theme.spacing[4]};
  width: 100%;
  font-size: ${({ theme }) => theme.fontSize["text-base"]};
  border: 2px solid ${({ theme }) => theme.colors.grey200};
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

export const TextArea: FC<TextAreaProps> = (props): JSX.Element => {
  const {
    cols,
    rows,
    required,
    minLength,
    maxLength,
    placeholder = "What are your thoughts...",
  } = props;
  const [textAreaValue, setTextAreaValue] = useState<string | undefined>();
  const [charCount, setCharCount] = useState(`0 | ${maxLength}`);

  const handleCharLimit = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    if (maxLength && inputValue.length >= maxLength) {
      setCharCount(`${maxLength} | ${maxLength}`);
    } else {
      setCharCount(`${inputValue.length} | ${maxLength}`);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextAreaValue(e.target.value);
  };

  return (
    <TextAreaContainer>
      <StyledTextArea
        value={textAreaValue}
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
      />
      {maxLength && <CharacterCounter>{charCount}</CharacterCounter>}
    </TextAreaContainer>
  );
};

TextArea.displayName = "Text Area";
