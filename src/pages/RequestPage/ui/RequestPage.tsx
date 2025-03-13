import { RequestCreateBtn } from "features/request-create";
import { RequestList } from "widgets/RequestList";

export default function RequestPage() {
  return (
    <div>
      <h1 className="pb-4 text-center text-xl font-semibold">Список задач</h1>
      <div className="flex flex-col gap-10">
        <RequestList />
        <RequestCreateBtn />
      </div>
    </div>
  );
}
