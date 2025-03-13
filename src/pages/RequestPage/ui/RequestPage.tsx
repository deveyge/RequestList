import { RequestCreateBtn } from "features/request-create";
import { RequestList } from "widgets/RequestList";

export default function RequestPage() {
  return (
    <div>
      <h1 className="pb-4 text-center text-xl font-semibold">Список задач</h1>
      <RequestList />
      <RequestCreateBtn />
    </div>
  );
}
