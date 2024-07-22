import styled from "styled-components";

const StyledUrgent = styled.div`
  color: var(--color-grey-0);
  text-transform: uppercase;
  background-color: var(--color-red-500);
  position: absolute;
  text-align: center;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-xl);

  right: 5%;
  padding: 0.3rem 0.5rem;
  width: 100px;
  margin-bottom: 1rem;
  font-size: 1.2rem;
  font-weight: 500;

  @media (min-width: 1246px) {
    padding: 0.5rem 1rem;
    margin-top: 1.5rem;
    top: 10%;
    right: -7%;
    width: 170px;
    transform: rotate(45deg);
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
