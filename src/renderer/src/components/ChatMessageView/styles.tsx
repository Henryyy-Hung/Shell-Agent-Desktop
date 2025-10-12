import styled from 'styled-components'

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  &:not(:last-of-type):after {
    content: '';
    display: block;
    height: 2px;
    width: 100%;
    background-color: #e6e6e6;
    border-radius: 1px;
    margin-top: 0.5rem;
    transform: translateY(-50%);
  }
`

export const SessionInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`

export const Avatar = styled.div`
  background-color: #1c69ff;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4px;
`

export const SessionName = styled.div`
  font-weight: bold;
  font-size: 1rem;
`

export const SessionCreationTime = styled.div`
  font-weight: bold;
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.3);
`

export const SessionMessages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const MarkdownBlock = styled.div`
  display: flex;
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
`
