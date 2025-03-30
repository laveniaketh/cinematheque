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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<BuyTicketPage />} />
      <Route path="/select-movie" element={<SelectMoviePage />} />
      <Route path="/select-seat" element={<SelectSeatPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;

// function App() {
//   return (
//     <main>
//       <div className="pattern" />
//       <div className="wrapper">
//         <BuyTicketPage />
//       </div>
//     </main>
//   );
// }

// export default App;
