import { Navigate, Route, Routes } from "react-router-dom";
import { ProductsPage } from "../products/pages/ProductsPage";
import { Navbar } from "../ui/components/Navbar";
import { WelcomePage } from "../ui/components/WelcomePage";
export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="products" element={<ProductsPage />}></Route>
        <Route path="/" element={<WelcomePage />}></Route>
      </Routes>
    </>
  );
};
