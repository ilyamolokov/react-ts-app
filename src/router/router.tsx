import { AuthPage } from "@/pages/auth-page";
import { HomePage } from "@/pages/home-page";
import { ProductsPage } from "@/pages/products-page";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Paths } from "./enums";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={Paths.Home} element={<HomePage />} />
        <Route path={Paths.Auth} element={<AuthPage />} />
        <Route path={Paths.Products} element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
