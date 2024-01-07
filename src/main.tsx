import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import HomePage from "./pages/home.tsx";
import Login from "./pages/login.tsx";
import Register from "./pages/register.tsx";
import ErrorPage from "./pages/404.tsx";
import Vote from "./pages/vote.tsx";
import PaslonPage from "./pages/paslon.tsx";
import PartaiPage from "./pages/partai.tsx";
import Article from "./pages/article.tsx";
import FormAddPaslon from "./pages/formAddPaslon.tsx";
import FormAddPartai from "./pages/formAddPartai.tsx";
import AdminPage from "./pages/admin.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/vote",
        element: <Vote />,
    },
    {
        path: "/article",
        element: <Article />,
    },
    {
        path: "/paslon",
        element: <PaslonPage />,
    },
    {
        path: "/partai",
        element: <PartaiPage />,
    },
    {
        path: "/add-paslon",
        element: <FormAddPaslon />,
    },
    {
        path: "/add-partai",
        element: <FormAddPartai />,
    },
    {
        path: "/admin",
        element: <AdminPage />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
