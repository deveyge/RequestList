import { Link } from "react-router-dom";

const RequestCreateBtn = () => {
  return (
    <div>
      <button>
        <Link to={"/request/new"}>Создать заявку</Link>
      </button>
    </div>
  );
};

export default RequestCreateBtn;
