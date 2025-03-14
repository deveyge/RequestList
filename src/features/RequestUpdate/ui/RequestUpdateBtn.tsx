import { Button } from 'shared/ui/Button';

interface RequestUpdateBtnProps {
  onClick: () => void;
}

const RequestUpdateBtn = ({ onClick }: RequestUpdateBtnProps) => {
  return (
    <Button onClick={onClick}>Изменить заявку</Button>
  );
};

export default RequestUpdateBtn;