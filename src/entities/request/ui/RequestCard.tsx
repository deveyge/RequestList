import { Request } from "entities/request/model/types"

interface RequestCardProps {
  request: Request;
}


const RequestCard = ({request}: RequestCardProps) => {
  return (
    <div className="rounded-lg bg-violet-300 px-6 py-3">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">{request.title}</h3>
        <span className="text-sm font-light">Дата создания: {request.createdAt}</span>
      </div>
    </div>
  );
};

export default RequestCard;
