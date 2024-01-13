import HomePage from "./homePage/HomePage";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import BookingPage from "./bookingComps/BookingPage";

export default function Main(props) {
  return (
    <main className="mainCont">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<HomePage />}></Route>
          <Route path="/booking" element={<BookingPage />}></Route>
        </Routes>
      </BrowserRouter>
    </main>
  );
}
