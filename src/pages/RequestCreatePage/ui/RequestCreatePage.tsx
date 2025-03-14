import { RequestForm } from "widgets/RequestForm";
import { useNavigate } from "react-router-dom";
import { Request } from "entities/request/model/types";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch } from "app/store/hooks/useAppDispatch";
import { createRequest } from "app/store/requestSlice";

const RequestCreatePage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSubmit = (formData: Omit<Request, "id" | "createdAt">) => {
    const newRequest: Request = {
      ...formData,
      id: uuidv4(),
      createdAt: new Date().toLocaleDateString(),
    };
    dispatch(createRequest(newRequest));
    navigate("/requests");
  };
  return (
    <div className="py-10">
      <RequestForm onSubmit={handleSubmit} />
    </div>
  );
};

export default RequestCreatePage;
