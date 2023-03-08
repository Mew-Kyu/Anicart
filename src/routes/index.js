import MovieHome from "../components/pages/home/MovieHome";
import MovieLogin from "../components/pages/login/MovieLogin";
import MovieDetail from "../components/pages/MovieDetail";
import MovieSearch from "../components/pages/search/MovieSearch";

const privateRoutes = [
    {
        path:"/",
        element:<MovieHome />
    },
    {
        path: "/search",
        element:<MovieSearch />
    },
    {
        path: "/detail/:id",
        element: <MovieDetail />
    }
];

const publicRoute = [
    {
        path: "/login",
        element: <MovieLogin />
    }
]

export  {privateRoutes, publicRoute}