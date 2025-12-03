import { Center, Spinner } from "@chakra-ui/react";
import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";

const GameDetailPage = lazy(() => import("./pages/GameDetailPage"));
const FavoritesPage = lazy(() => import("./pages/FavoritesPage"));

const LoadingFallback = () => (
  <Center height="100vh">
    <Spinner size="xl"></Spinner>
  </Center>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "games/:slug",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <GameDetailPage />
          </Suspense>
        ),
      },
      {
        path: "favorites",
        element: (
          <Suspense fallback={<LoadingFallback />}>
            <FavoritesPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
