import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import HomePage from "./Pages/HomePage/HomePage";
import AnimePage from "./Pages/AnimeCompontentes/AnimePage";
import Layout from "./Pages/Layout/Layout";
import { createBrowserRouter } from "react-router-dom";
import Favorito from "./components/Favoritos/Favorito";
import NotesPage from "./Pages/NotesPage/NotesPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element:<Layout></Layout>,
        children: [
            {
                path: "/",
                element: <HomePage></HomePage>
            },
            {
                path: "/anime",
                element: <AnimePage></AnimePage>
            },
            {
                path: "/notes",
                element: <NotesPage/>
            },
            {
                path: "/favorito",
                element: <Favorito></Favorito>,
                loader: async () => {
                    return fetch(`https://api.jikan.moe/v4/anime?q=pokemon`)
                }
            }

        ],errorElement: <ErrorPage></ErrorPage>
    }
])