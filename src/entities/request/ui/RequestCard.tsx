import { Request } from "entities/request/model/types"

interface RequestCardProps {
  request: Request;
}


const RequestCard = ({request}: RequestCardProps) => {
  return (
    <div className="bg-secondary shadow-lg rounded-lg px-6 py-3 hover:bg-accent transition-colors duration-300">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">{request.title}</h3>
        <span className="text-sm font-light">Дата создания: {request.createdAt}</span>
      </div>
    </div>
  );
};

export default RequestCard;
