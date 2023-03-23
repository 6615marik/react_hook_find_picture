import { Buttonn } from './Button.styles';
export const Button = ({ onClick }) => {
  return (
    <Buttonn type="button" onClick={onClick}>
      Load more
    </Buttonn>
  );
};
