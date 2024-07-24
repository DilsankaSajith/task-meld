import styled from 'styled-components';

const StyledUrgent = styled.div`
  background: rgb(154, 21, 21);
  background: linear-gradient(
    90deg,
    rgba(154, 21, 21, 1) 0%,
    rgba(255, 2, 2, 1) 42%,
    rgba(180, 0, 0, 1) 100%
  );
  text-align: center;
  position: absolute;
  top: 22%;
  right: -15%;
  width: 30rem;
  rotate: 45deg;
  padding: 0.25rem 0;
  box-shadow: var(--shadow-md);

  @media (max-width: 81.875em) {
    rotate: none;
    width: 10rem;
    top: 8rem;
    right: 2rem;
    border-radius: var(--border-radius-md);
  }
`;

function Urgent() {
  return (
    <StyledUrgent>
      <span>⭐</span>
    </StyledUrgent>
  );
}

export default Urgent;
