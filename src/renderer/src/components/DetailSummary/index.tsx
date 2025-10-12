// DetailSummary.tsx
import React, { useRef, useState, useEffect } from 'react'
import IconRight from '@renderer/assets/vectors/IconRight'
import { Container, SummaryRow, Name, Status, Arrow, ContentWrapper, ContentInner } from './styles'

interface DetailSummaryProps {
  name: string
  status: string
  detailText: string
}

export const DetailSummary: React.FC<DetailSummaryProps> = ({ name, status, detailText }) => {
  const [open, setOpen] = useState(false)
  const [height, setHeight] = useState(0)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [detailText])

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
        <ContentInner ref={contentRef}>{detailText}</ContentInner>
      </ContentWrapper>
    </Container>
  )
}
