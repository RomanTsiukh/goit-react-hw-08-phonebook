import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilter } from 'redux/filterSlice';
import styled from 'styled-components';

const Title = styled.p`
  padding-bottom: ${p => p.theme.space[2]}px;
`;

const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <Title>Find contacts by name</Title>
      <input
        type="text"
        onChange={e => dispatch(changeFilter(e.target.value))}
        value={filter}
      />
    </>
  );
};

export default Filter;
