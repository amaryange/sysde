export const BasicCardData = [
  {
    id: 1,
    title: "Basic Card",
    pare: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.",
  },
  {
    id: 2,
    title: "Flat Card",
    flatclass: "b-r-0",
    pare: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.",
  },
  {
    id: 3,
    title: "Without Shadow Card",
    flatclass: "shadow-0 border",
    pare: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.",
  },
  {
    id: 4,
    icon: <i className="icofont icofont-truck me-2"></i>,
    title: "Icon In Heading",
    pare: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.",
  },
  {
    id: 5,
    title: "Card Sub Title",
    span: "Using the card component, you can extend the default collapse behavior to create an accordion.",
    pare: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.",
  },
  {
    id: 6,
    title: "Card With Footer",
    pare: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. LoremIpsum has been the the industrys standard dummy text ever.",
    footer: "Card Footer",
  },
  {
    id: 7,
    title: "Primary Color Card",
    colorClass: "bg-primary",
    pare: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.",
    footer: "Card Footer",
    settingIcon: true,
  },
  {
    id: 8,
    title: "Secondary Color Card",
    colorClass: "bg-secondary",
    pare: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.",
    footer: "Card Footer",
    settingIcon: true,
  },
  {
    id: 9,
    title: "Success Color Card",
    colorClass: "bg-success",
    pare: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.",
    footer: "Card Footer",
    settingIcon: true,
  },
  {
    id: 10,
    title: "Primary Color Header",
    headerClass: "bg-primary",
    pare: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.",
    footer: "Card Footer",
    settingIcon: true,
  },
  {
    id: 11,
    title: "Primary Color Body",
    bodyClass: "bg-primary",
    pare: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.",
    footer: "Card Footer",
    settingIcon: true,
    settingPrimary: true,
  },
  {
    id: 12,
    title: "primary Color Footer",
    footerClass: "bg-primary",
    pare: "Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industrys standard dummy textever since the 1500s, when an unknown printer took a galley of type andscrambled. Lorem Ipsum is simply dummy text of the printing and typesettingindustry. Lorem Ipsum has been the industrys standard dummy text ever since the1500s, when an unknown printer took a galley of type and scrambled.",
    footer: "Card Footer",
    settingIcon: true,
    settingPrimary: true,
  },
];

export const BasicTreeData = [
  {
    text: "Use the dynamic tree view with checkboxes.",
  },
];

export const TreeViewList = {
  name: "",
  children: [
    {
      name: "root",
      children: [
        {
          name: "Applications",
          children: [
            {
              name: "Ecommerce",
              children: [{ name: "Product" }, { name: "Cart" }, { name: "Invoice" }],
            },
            {
              name: "Users",
              children: [{ name: "User-profile" }, { name: "User-edit" }, { name: "User-cards" }],
            },
            {
              name: "Chat",
              children: [{ name: "Chat-app" }, { name: "Video-chat" }],
            },
          ],
        },
        {
          name: "Components",
          children: [
            {
              name: "UI-Kits",
              children: [{ name: "Typography" }, { name: "Avatars" }, { name: "Grid" }],
            },
            {
              name: "Bonus-UI",
              children: [{ name: "Toasts" }, { name: "Rating" }, { name: "Pagination" }],
            },
            {
              name: "Charts",
              children: [{ name: "Apex-chart" }, { name: "Google-chart" }, { name: "Chartjs-chart" }],
            },
          ],
        },
        {
          name: "Miscellaneous",
          children: [
            {
              name: "Gallery",
              children: [{ name: "Gallery-grid" }, { name: "Gallery-grid-desc" }, { name: "Masonary-gallery" }],
            },
            {
              name: "Blog",
              children: [{ name: "Blog-details" }, { name: "Blog-single" }, { name: "Add-post" }],
            },
            {
              name: "Editors",
              children: [{ name: "CK-editors" }, { name: "MDE-editors" }, { name: "ACE-editors" }],
            },
          ],
        },
      ],
    },
  ],
};

export const DisableTreeData = [
  {
    text: "Use the dynamic tree view with checkboxes.",
  },
];