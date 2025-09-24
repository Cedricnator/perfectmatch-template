import { NavItem } from "../../shared/interfaces/navigation-item.interface";

export const userNavItems: NavItem[] = [
  {
    icon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 4.5c4.142 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5S4.5 16.142 4.5 12 7.858 4.5 12 4.5Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z" fill="currentColor"/></svg>`,
    name: "Matches",
    subItems: [
      { name: "Sugerencias", path: "/user" },
      { name: "Mensajes", path: "/user/messages" },
    ],
  },
];

export const userOtherItems: NavItem[] = [
  {
    icon: `<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 12.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm0 1.5c-3.038 0-5.75 1.343-5.75 3v.5c0 .414.336.75.75.75h10c.414 0 .75-.336.75-.75v-.5c0-1.657-2.712-3-5.75-3Z" fill="currentColor"/></svg>`,
    name: "Perfil",
    subItems: [
      { name: "Mi perfil", path: "/user/profile" },
    ],
  },
];