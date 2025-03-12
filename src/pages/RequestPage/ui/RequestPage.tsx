import { RequestCreateBtn } from "features/request-create";
import { RequestList } from "widgets/RequestList";

export default function RequestPage() {
  return (
    <div>
      <div className="text-white">RequestPage</div>
      <RequestList />
      <RequestCreateBtn />
    </div>
  );
}
