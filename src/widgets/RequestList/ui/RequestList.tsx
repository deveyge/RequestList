import { RootState } from "app/store/store";
import { RequestCard } from "entities/request";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const RequestsList = () => {
  const requests = useSelector((state:RootState) => state.requests.requests)
  return (
    <div>
      {requests.length === 0 ? (
        <div>Нет данных</div>
      ) : (
        <ul>
          {requests.map((request) => (
            <li key={request.id} className="py-2">
              <Link to={`/requests/${request.id}`} className="block">
              <RequestCard request={request}></RequestCard>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RequestsList;