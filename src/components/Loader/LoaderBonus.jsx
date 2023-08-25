import { Hearts } from 'react-loader-spinner';
import { StyledLoaderWrapper } from './Loader.styled';
export const LoaderBonus = ({ loaderColor }) => {
  return (
    <StyledLoaderWrapper>
      <Hearts width="500px" height="100%" color={loaderColor} />
    </StyledLoaderWrapper>
  );
};
