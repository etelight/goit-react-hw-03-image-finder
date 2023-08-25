import { RotatingLines } from 'react-loader-spinner';
import { StyledLoaderWrapper } from './Loader.styled';
export const Loader = ({ loaderColor }) => {
  return (
    <StyledLoaderWrapper>
      <RotatingLines width="150px" strokeColor={loaderColor} />
    </StyledLoaderWrapper>
  );
};
