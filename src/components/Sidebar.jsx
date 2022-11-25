import '../css/component/sidebar.css'
import { AuthContext } from '../context/AuthContext'


import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,
  LocalHospital,
  HouseOutlined,
  Announcement
} from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { useContext } from 'react';

function Sidebar() {
  const { dispatch } = useContext(AuthContext);

  const logOut = async () => {
    dispatch({ type: "LOGOUT" });
  }
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <NavLink to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                <span>Inicio</span>
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Listas</h3>
          <ul className="sidebarList">
            <NavLink to="/persons" className="link">
              <li className="sidebarListItem">
                <LocalHospital className="sidebarIcon" />
                <span>Personas</span>
              </li>
            </NavLink>
            <NavLink to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                <span>Usuarios</span>
              </li>
            </NavLink>
            <NavLink to="/areas" className="link">
              <li className="sidebarListItem">
                <HouseOutlined className="sidebarIcon" />
                <span>Areas</span>
              </li>
            </NavLink>
            <NavLink to="/alerts" className="link">
              <li className="sidebarListItem">
                <Announcement className="sidebarIcon" />
                <span>Alertas</span>
              </li>
            </NavLink>
            <a to="!#" className="link" onClick={logOut}>
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />

                <span>LogOut</span>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;