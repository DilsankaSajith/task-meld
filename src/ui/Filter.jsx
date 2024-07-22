import { useSearchParams } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledFilter = styled.div`
  background-color: var(--color-grey-100);
  box-shadow: var(--shadow-sm);
  border-radius: var(--border-radius-sm);
  display: flex;
  align-items: center;

  border: 1px solid var(--color-grey-100);
  padding: 0.4rem;
  gap: 0.4rem;
  font-size: 1.3rem;
`;

const FilterButton = styled.button`
  background-color: var(--color-grey-100);
  border: 1px solid var(--color-brand-500);
  box-shadow: var(--shadow-sm);
  text-transform: uppercase;

  ${(props) =>
    props.active === 1 &&
    css`
      background-color: var(--color-brand-500);
      color: var(--color-brand-50);
    `}

  border-radius: var(--border-radius-sm);
  font-weight: 600;
  padding: 0.44rem 0.8rem;
  transition: all 0.3s;
  font-size: 1.2rem;

  &:hover:not(:disabled) {
    background-color: var(--color-brand-500);
    color: var(--color-brand-50);
  }
`;

// const StyledSelect = styled.select`
//   border: 1px solid var(--color-grey-300);
//   border-radius: var(--border-radius-sm);
//   background-color: var(--color-grey-0);
//   box-shadow: var(--shadow-sm);

//   font-size: 1.4rem;
//   padding: 0.8rem 1.2rem;
//   font-weight: 500;
//   width: 100%;
// `;

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilter = searchParams.get(filterField || options.at(0).value);

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div>
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

      {/* <StyledFilter>
        <StyledSelect>
          <option>SORT...................</option>
        </StyledSelect>
      </StyledFilter> */}
    </div>
  );
}

export default Filter;
