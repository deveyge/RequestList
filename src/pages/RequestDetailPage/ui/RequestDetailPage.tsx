import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store/store';
import { deleteRequest } from '../../../app/store/requestSlice';
import RequestDetail from 'widgets/RequestDetail/ui/RequestDetail';


const RequestDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const requests = useSelector((state: RootState) => state.requests.requests);
  const request = requests.find((r) => r.id === id);

  if (!request) {
    return <div>Заявка не найдена</div>;
  }

  const handleDeleteRequest = () => {
    dispatch(deleteRequest(id as string));
    navigate('/requests');
  };

  return (
    <div className="mx-auto p-4 max-w-[700px]">
      <h1 className="text-2xl font-bold mb-4 text-center">Детальная страница заявки</h1>
      <RequestDetail request={request} />
    </div>
  );
};

export default RequestDetailPage;