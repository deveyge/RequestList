import { Request } from 'entities/request/model/types'

interface RequestDetailProps {
    request: Request;
}

const RequestDetail = ({request}: RequestDetailProps) => {
  return (
    <div className='bg-secondary shadow-lg rounded-lg'>
        <div className='px-4 py-5 sm:px-6'>
        <h2 className="text-xl font-bold mb-2">{request.title}</h2>
        <p className="mb-2">Описание: {request.description}</p>
        <p className="mb-2">Категория: {request.category}</p>
        <p className="mb-4">Дата создания: {request.createdAt}</p>
        </div>
    </div>
  )
}

export default RequestDetail