// DetailSummary.tsx
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import IconRight from '@renderer/assets/vectors/IconRight';

interface DetailSummaryProps {
  name: string;
  status: string;
  detailText: string;
}

const Container = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 8px;
  background: #fff;
  overflow: hidden;
`;

const SummaryRow = styled.div<{ open: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 8px 12px;
  cursor: pointer;
  user-select: none;
  gap: 8px;
`;

const Name = styled.span`
  font-weight: 500;
  flex: 1;
  font-size: 14px;
`;

const Status = styled.span`
  color: #007aff;
  font-weight: normal;
  margin-left: auto;
  font-size: 14px;
`;

const Arrow = styled.span<{ open: boolean }>`
  transition: transform 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: ${({ open }) => (open ? 'rotate(90deg)' : 'rotate(0deg)')};
  & > svg {
    width: 12px;
    height: 12px;
  }
  & > svg path {
    fill: #9e9e9e !important;
  }
`;

const ContentWrapper = styled.div<{ height: number; open: boolean }>`
  overflow: hidden;
  transition: height 0.3s ease;
  height: ${({ open, height }) => (open ? `${height}px` : 0)};
  background: #ffffff;
`;

const ContentInner = styled.div`
  padding: 8px 12px;
  white-space: pre-wrap;
  color: grey;
`;

export const DetailSummary: React.FC<DetailSummaryProps> = ({
  name,
  status,
  detailText,
}) => {
  const [open, setOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [detailText]);

  return (
    <Container>
      <SummaryRow open={open} onClick={() => setOpen(!open)}>
        <Name>{name}</Name>
        <Status>{status}</Status>
        <Arrow open={open}>
          <IconRight />
        </Arrow>
      </SummaryRow>
      <ContentWrapper open={open} height={height}>
        <ContentInner ref={contentRef}>
          {detailText}
        </ContentInner>
      </ContentWrapper>
    </Container>
  );
};
