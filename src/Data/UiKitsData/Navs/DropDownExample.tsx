import { Airplay, CloudLightning, Home, Layout, Sidebar } from "react-feather";

export let NavsExampleDatas = [
  { Heading: "General" },
  { Tittle: "Dashboard", icon: <Home /> },
  { Tittle: "Widgets", icon: <Airplay /> },
  { Heading: "Layout", className: "main-section" },
  { Tittle: "Sidebar", icon: <Sidebar /> },
  { Tittle: " Page Layout", icon: <Layout /> },
  { Tittle: " Footers", icon: <CloudLightning />, className: "pb-0" },
  { className: "separator" },
  { className: "pt-0", button: true },
];
