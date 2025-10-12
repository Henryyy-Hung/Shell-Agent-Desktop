import styled, { css } from 'styled-components';

export const ChatInputFieldContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 0.5rem;
  padding: 0.5rem 0.5rem 0.25rem 0.5rem;
  border: 2px solid #e7e7e7;
  background-color: #f3f3f3;
  border-radius: 0.5rem;
  transition: all 0.15s ease-in-out;
  > * {
    flex: 0 0 auto;
  }
`;

export const StyledTextArea = styled.div`
  flex: 1 1 auto;
  border: none;
  outline: none;
  padding: 0;
  background: transparent;
  font-size: 1rem;
  line-height: 1.5rem;
  min-height: calc(2 * 1.5rem);
  max-height: calc(3 * 1.5rem);
  resize: none;
  margin: 0;
  font-family: sans-serif;
  overflow: auto;

  &:focus {
    border: none;
    outline: none;
  }

  &::-webkit-scrollbar {
    width: 0.25rem;
  }

  &::-webkit-input-placeholder {
    color: #b6b6b6;
  }
`;

export const OperationArea = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.25rem;
`;

export const OperationButton = styled.button<{ disabled?: boolean }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  & > * {
    height: 1.25rem;
    width: 1.25rem;
    transition: all 0.2s ease-in-out;
    stroke: #6c6c6c !important;
  }
  &:hover {
    background-color: #e8e8e8;
  }
  &:hover:not(:disabled) > * {
    stroke: var(--primary-color-900) !important;
  }
  ${({ disabled }) =>
    disabled &&
    css`
      cursor: not-allowed;
      > * {
        stroke: var(--primary-color-900) !important;
        fill: var(--primary-color-300) !important;
      }
    `}
`;
// SendButton 继承通用样式并添加特定的 margin-left
export const SendButton = styled(OperationButton)`
  margin-left: auto;
`;
