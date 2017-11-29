import styled from '../theme/styled-components';

export default styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  color: ${props => props.theme.primaryColor};
`;
