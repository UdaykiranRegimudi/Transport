import { Sidenav, Nav } from 'rsuite';
import {useState} from 'react'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

const styles = {
  
  position: "fixed",
  left: 0,
  maxWidth:"15vw"
  
};

const CustomSidenav = ({ appearance, openKeys, expanded, onOpenChange, onExpand, ...navProps }) => {
  return (
    <div style={{...styles, backgroundColor: "#36454F",width:`${expanded?"100%":"3%"}`}}>
      <Sidenav
        appearance={appearance}
        expanded={expanded}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      >
        <Sidenav.Toggle onToggle={onExpand} />
        <Sidenav.Body >
          <Nav {...navProps} >
            <Nav.Item eventKey="1"  active icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2"  icon={<GroupIcon />}>
              New Taxes and Forms
            </Nav.Item>
            <Nav.Item eventKey="1"  active icon={<DashboardIcon />}>
              Regulations
            </Nav.Item>
            <Nav.Item eventKey="2"  icon={<GroupIcon />}>
              Norms
            </Nav.Item>
            
            
          </Nav>
        </Sidenav.Body>
        
      </Sidenav>
    </div>
  );
};

const Sidenavbar = () => {
  const [activeKey, setActiveKey] = useState('1');
  const [openKeys, setOpenKeys] = useState(['3', '4']);
  const [expanded, setExpand] = useState(false);

  return (
    <>
      <CustomSidenav
        activeKey={activeKey}
        openKeys={openKeys}
        onSelect={setActiveKey}
        onOpenChange={setOpenKeys}
        expanded={expanded}
        onExpand={setExpand}
      />
      
    </>
  );
};
export default Sidenavbar;
