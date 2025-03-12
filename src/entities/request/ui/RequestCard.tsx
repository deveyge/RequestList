const RequestCard = () => {
  return (
    <div className="rounded-lg bg-violet-300 px-6 py-3">
      <div className="flex flex-col gap-1">
        <h3 className="font-semibold">Заголовок заявки</h3>
        <span className="text-sm font-light">Дата создания</span>
      </div>
    </div>
  );
};

export default RequestCard;
