import { Airplay, BarChart, Box, CreditCard,  FileText, FolderPlus, GitPullRequest, Home, Map, Server, Sliders } from "react-feather";

export const subnavArr = [
  { logo: <Box />, tittle: "Base" },
  {
    logo: <FolderPlus />,
    tittle: "Advance",
    children: ["Scrollable", "Tree View", "Rating"],
  },
  { logo: <FileText />, tittle: "Forms" },
  { logo: <Server />, tittle: "Tables" },
];

export const TogleSubNavArr = [
  { logo: <Box />, tittle: "Base" },
  {
    logo: <FolderPlus />,
    tittle: "Advance",
    active: true,
    children: ["Scrollable", "Tree View", "Rating"],
  },
  { logo: <FileText />, tittle: "Forms" },

  {
    active: false,
    logo: <Server />,
    tittle: "Tables",
    children: ["New", "Replied", "Panding"],
  },
];

 export let deafultNavData = [
  { logo: <Home />, tittle: "Dashboard" },
  { logo: <Airplay />, tittle: "Widgets" },
  { logo: <Box />, tittle: "Base" },
  { logo: <FileText />, tittle: "Forms" },
  { logo: <Server />, tittle: "Tables" },
];

 export let ItemBulletsNavData = [
  { tittle: "Dashboard" },
  { tittle: "Widgests" },
  { tittle: "Base" },
  { tittle: "Forms" },
  { tittle: "Tables" },
];

export let ACtivNavData = [
  { aClassName: "active", logo: <Home />, tittle: "Dashboard" },
  { logo: <Airplay />, tittle: "Widgets" },
  { aClassName: "disabled", logo: <Box />, tittle: "Base" },
  { logo: <FileText />, tittle: "Forms" },
  { logo: <Server />, tittle: "Tables" },
  { logo: <CreditCard />, tittle: "Cards" },
  { aClassName: "disabled", logo: <Sliders />, tittle: "Timeline" },
  { logo: <BarChart />, tittle: "Charts" },
  { logo: <Map />, tittle: "Maps" },
  { logo: <GitPullRequest />, tittle: "Editors" },
];