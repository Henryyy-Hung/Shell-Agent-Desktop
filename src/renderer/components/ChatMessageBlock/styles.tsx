import styled from "styled-components";

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const MarkdownBlock = styled.div`
  width: 100%;
  line-height: 1.5rem;

  *:first-child {
    margin-top: 0;
  }
  *:last-child {
    margin-bottom: 0;
  }

  img {
    max-width: 100%;
    border-radius: 0.5rem;
    box-shadow: 0 0 0.5rem 0.25rem var(--primary-color-300);
  }
`;

export const ToolCallBlock = styled.div`
  border: 1px solid var(--primary-color-500);
  background-color: var(--primary-color-50);
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: bold;
`;

export const PlanBlock = styled.div`
  border: 1px solid green;
  background-color: #eaffea;
  padding: 1rem;
  border-radius: 0.5rem;
  font-weight: bold;
`;
