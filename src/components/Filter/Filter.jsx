import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Title = styled.p`
  padding-bottom: ${p => p.theme.space[2]}px;
`;

const Filter = ({ handleChangeFilter, filter }) => {
  return (
    <>
      <Title>Find contacts by name</Title>
      <input type="text" onChange={handleChangeFilter} value={filter} />
    </>
  );
};

Filter.propTypes = {
  handleChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default Filter;
