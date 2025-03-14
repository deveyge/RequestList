import { AppRouter } from "app/providers/router";
import { Header } from "../widgets/Header";
import { useLocalStorage } from "shared/lib/hooks/useLocalStorage";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { AppDispatch, RootState } from "app/store/store";
import { setRequests } from "app/store/requestSlice";

function layout() {
    const { getItem, setItem } = useLocalStorage();
    const dispatch = useDispatch<AppDispatch>();
  
    useEffect(() => {
      const storedRequests = getItem('requests');
      if (storedRequests) {
        dispatch(setRequests(storedRequests));
      }
    }, [dispatch, getItem]);
  
      // Сохраняем данные в localStorage при каждом изменении `requests` в Redux store
      const requests = useSelector((state: RootState) => state.requests.requests);
      useEffect(() => {
        setItem('requests', requests);
      }, [requests, setItem]);
  return (
    <div className="">
      <Header />
      <main className="container mx-auto px-4 min-h-screen">
        <AppRouter />
      </main>
    </div>
  );
}

export default layout;
