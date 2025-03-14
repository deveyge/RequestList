import { Link } from "react-router-dom";
import { Button } from "shared/ui/Button/ui/Button";

const RequestCreationButton = () => {
  return (
    <Link to="/requests/new">
      <Button>Создать заявку</Button>
    </Link>
  );
};

export default RequestCreationButton;
