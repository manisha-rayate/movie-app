import Home from "../components/frontEnd/Home/home";
import Popular from "../components/frontEnd/Popular/Popular";
import TVSeries from "../components/frontEnd/TVSeries/tvSeries";
import HomeIcon from "@mui/icons-material/Home";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import SmartDisplayOutlinedIcon from "@mui/icons-material/SmartDisplayOutlined";
import MovieOutlinedIcon from "@mui/icons-material/MovieOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import Movies from "../components/frontEnd/Movies/movies";
import Profile from "../components/frontEnd/Profile/profile";
const routes = [
  {
    title: "Home",
    path: "/",
    icon: <HomeIcon sx={{ color: "primary.main" }} />,
    component: <Home />,
  },
  {
    title: "Popular",
    path: "/popular",
    icon: <LocalFireDepartmentIcon sx={{ color: "primary.main" }} />,
    component: <Popular />,
  },
  {
    title: "Tv Series",
    path: "/tvSeries",
    icon: <SmartDisplayOutlinedIcon sx={{ color: "primary.main" }} />,
    component: <TVSeries />,
  },
  {
    title: "Movies",
    path: "/Movies",
    icon: <MovieOutlinedIcon sx={{ color: "primary.main" }} />,
    component: <Movies />,
  },
  {
    title: "Profile",
    path: "/Profile",
    icon: <PermIdentityOutlinedIcon sx={{ color: "primary.main" }} />,
    component: <Profile />,
  },
];

export default routes;
