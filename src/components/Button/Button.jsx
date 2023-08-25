import { LoadMoreButton } from './Button.styled';

export const LoadMore = ({ onClick }) => {
  return (
    <>
      <LoadMoreButton onClick={onClick}>Load more </LoadMoreButton>
    </>
  );
};
