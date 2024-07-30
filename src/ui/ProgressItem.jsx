import React from 'react';
import styled from 'styled-components';
import FlexX from './FlexX';
import { HiArrowDownRight, HiArrowUpRight } from 'react-icons/hi2';

const Count = styled.h1`
  font-size: 5.2rem;
  font-weight: 500;
`;

const ProgressItemText = styled.div`
  border-left: 5px solid var(--color-${(props) => props.color}-500);
  border-radius: var(--border-radius-sm);
  padding: 0 2rem;
`;

const Percentage = styled.span`
  color: var(--color-${(props) => props.color}-500);
  font-weight: 600;
`;

function ProgressItem({ label, taskCount, color, percentage }) {
  return (
    <div>
      <ProgressItemText color={color}>
        <strong>{label}</strong>
        <p>All</p>
      </ProgressItemText>
      <FlexX>
        <Count>{taskCount}</Count>
        {percentage != null && (
          <Percentage color={color}>
            {percentage && percentage}%
            {label === 'Completed tasks' ? (
              <HiArrowUpRight />
            ) : (
              <HiArrowDownRight />
            )}
          </Percentage>
        )}
      </FlexX>
    </div>
  );
}

export default ProgressItem;
