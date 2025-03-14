import { RootState } from "app/store/store";
import { RequestCreateBtn } from "features/request-create";
import { useSelector } from "react-redux";
import RequestsList from "widgets/RequestList/ui/RequestList";

export default function RequestPage() {
  return (
    <div>
      <h1 className="pb-4 text-center text-xl font-semibold">Список задач</h1>
      <div className="flex flex-col gap-10">
        <RequestsList/>
        <RequestCreateBtn />
      </div>
    </div>
  );
}
