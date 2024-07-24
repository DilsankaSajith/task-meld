import { useSearchParams } from 'react-router-dom';
import styled, { css } from 'styled-components';

const StyledFilter = styled.div`
  display: flex;
  align-items: center;
  padding: 0.4rem;
  gap: 0.5rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-200);
  border: 1px solid var(--color-brand-500);
  box-shadow: var(--shadow-md);
  text-transform: uppercase;

  ${(props) =>
    props.active === 1 &&
    css`
      background-color: var(--color-brand-500);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 700;
  padding: 0.5rem 1rem;
  transition: all 0.1s;
  font-size: 1.2rem;

  &:hover {
    background-color: var(--color-brand-500);
    color: var(--color-brand-50);
  }
`;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField || options.at(0).value);

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <StyledFilter>
      {options.map((option) => (
        <FilterButton
          key={option.value}
          active={currentFilter === option.value ? 1 : 0}
          onClick={(e) => handleClick(e.target.value)}
          value={option.value}
        >
          {option.label}
        </FilterButton>
      ))}
    </StyledFilter>
  );
}

export default Filter;
