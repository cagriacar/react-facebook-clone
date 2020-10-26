import React from "react";
import "./styles/Sidebar.css";
import SidebarRow from "./SidebarRow";
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import { useStateValue } from '../authentication/stateprovider/StateProvider'



function Sidebar() {
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
    
      <SidebarRow
        Icon={LocalHospitalIcon}
        title="COVID-19 Bilgi Merkezi" />

      <SidebarRow Icon={EmojiFlagsIcon} title="Sayfalar" />
      <SidebarRow Icon={PeopleIcon} title="Arkadaşlarını Bul" />
      <SidebarRow Icon={ChatIcon} title="Messenger" />
      <SidebarRow Icon={StorefrontIcon} title="Marketplace" />
      <SidebarRow Icon={VideoLibraryIcon} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Daha Fazlasını Gör" />
  
    </div>
  );
}

export default Sidebar;
