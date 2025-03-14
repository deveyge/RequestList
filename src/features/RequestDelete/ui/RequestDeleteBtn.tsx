import { Button } from "shared/ui/Button";


interface RequestDeleteProps {
    onRequestDelete: () => void;
}

const RequestDeleteBtn = ({onRequestDelete} : RequestDeleteProps) => {
  return (
    <Button onClick={onRequestDelete}>Удалить заявку</Button>
  )
}

export default RequestDeleteBtn