import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import BuyTicketPage from "./pages/BuyTicketPage";
import SelectMoviePage from "./pages/SelectMoviePage";
import MainLayout from "./layouts/MainLayout";
import SelectSeatPage from "./pages/SelectSeatPage";
import PaymentPage from "./pages/PaymentPage";
import ConfirmationPage from "./pages/ConfirmationPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<BuyTicketPage />} />
      <Route path="/select-movie" element={<SelectMoviePage />} />
      <Route path="/select-seat" element={<SelectSeatPage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/confirmation" element={<ConfirmationPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
