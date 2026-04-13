import React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { SidebarMenuDropDownType } from "@/Type/SideBarType";
import { Javascript } from "@/Constant";
import { ListGroup, ListGroupItem } from "reactstrap";
import { useTranslation } from "react-i18next";
const SidebarMenuDropDown = ({ setLinkActive, linkActive, items, handleOpen, active, level, setActive }: SidebarMenuDropDownType) => {
  const { t } = useTranslation("common");

  const router = useRouter();
  const pathname = useSearchParams().get("layout");
  return items?.map((element, index) => (
    <ListGroupItem className='dropdown' key={index} style={level === 0 ? { marginBottom: '8px' } : {}}>
      <a
        onClick={() => {
          if (element.children && element.type == "sub") {
            handleOpen(element.pathSlice, level);
          } else {
            if (element.path.split("/")[1] === "pages") {
              router.push(element.path);
            } else {
              setLinkActive(element.path.split("/")[element.path.split("/").length - 1]);
              router.push(`${element.path}`);
            }
          }
        }}
        className={`${(element.pathSlice && active?.includes(element.pathSlice)) || linkActive == element.path?.split("/")[element.path.split("/").length - 1] ? "active" : ""} ${level == 0 ? `nav-link menu-title` : ""}`}
        id='nav-link'
        style={{ cursor: 'pointer' }}
      >
        {level === 0 ? (
          <>
            {element.icon}
            <span>{t(element.title)}</span>
            <div className='according-menu'>{element.type == "sub" && <i className={`fa  ${element.pathSlice && active?.includes(element.pathSlice) ? "fa-angle-down" : "fa-angle-right"}`}></i>}</div>
          </>
        ) : (
          <>
            {t(element.title)}&nbsp;&nbsp;
            <div className='according-menu'>
              <i className={element.type == "sub" ? `fa  ${element.pathSlice && active?.includes(element.pathSlice) ? "fa-angle-down" : "fa-angle-right"}` : ""}></i>
            </div>
          </>
        )}
      </a>

      {element.children && (
        <ListGroup style={{ marginLeft: "arrowStyle" }} className={`nav-submenu ${pathname == "compact-sidebar" ? "pt-4" : ""}  menu-content list-group ${element.pathSlice && active?.includes(element.pathSlice) ? "d-block" : "d-none"} `}>
          <SidebarMenuDropDown linkActive={linkActive} setLinkActive={setLinkActive} items={element.children} setActive={setActive} handleOpen={handleOpen} active={active} level={level + 1} />
        </ListGroup>
      )}
    </ListGroupItem>
  ));
};

export default SidebarMenuDropDown;
