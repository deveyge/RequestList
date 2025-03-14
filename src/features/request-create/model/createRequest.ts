import { AppDispatch } from 'app/store/store';
import { createRequest } from 'app/store/requestSlice'; 
import { Request } from 'entities/request/model/types'; 


const createNewRequest = (request: Request, dispatch: AppDispatch) => {
  try {
    dispatch(createRequest(request));
  } catch (error) {
    console.error('Не удалось создать заявку', error);
  }
};

export default createNewRequest;