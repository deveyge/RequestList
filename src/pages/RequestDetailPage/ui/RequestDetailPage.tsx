import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../app/store/store';
import { deleteRequest, updateRequest } from '../../../app/store/requestSlice';
import RequestDetail from 'widgets/RequestDetail/ui/RequestDetail';
import RequestDeleteBtn from 'features/RequestDelete/ui/RequestDeleteBtn';
import RequestUpdateBtn from 'features/RequestUpdate/ui/RequestUpdateBtn';
import { Modal } from 'shared/ui/Modal';
import { RequestForm } from 'widgets/RequestForm';
import { Request } from 'entities/request/model/types'


const RequestDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const requests = useSelector((state: RootState) => state.requests.requests);
  const request = requests.find((r) => r.id === id);

  if (!request) {
    return <div>Заявка не найдена</div>;
  }

  const handleDeleteRequest = () => {
    dispatch(deleteRequest(id as string));
    navigate('/requests');
  };

  const handleOpenModal = () => {
    setIsEditModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsEditModalOpen(false);
  };

  const handleUpdate = (formData: Omit<Request, 'id' | 'createdAt'>) => {
    if (request) {
      const updatedRequest: Request = {
        ...request,
        ...formData,
      };
      dispatch(updateRequest(updatedRequest));
      setIsEditModalOpen(false);
      navigate('/requests');
    }
  };

  return (
    <div className="mx-auto py-10 max-w-[700px]">
      <h1 className="text-2xl font-bold mb-4 text-center">Детальная страница заявки</h1>
      <RequestDetail request={request} />
      <div className='mt-5 gap-5 flex justify-end'>
        <RequestUpdateBtn onClick={handleOpenModal} />
        <RequestDeleteBtn onRequestDelete={handleDeleteRequest}></RequestDeleteBtn>
      </div>


      <Modal isOpen={isEditModalOpen} onClose={handleCloseModal}>
        <h2 className="text-lg font-bold mb-2">Изменить заявку</h2>
        <RequestForm
          initialValues={request}
          onSubmit={handleUpdate}
        />
      </Modal>
    </div>
  );
};

export default RequestDetailPage;