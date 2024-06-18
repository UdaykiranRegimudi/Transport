import { Sidenav, Nav } from 'rsuite';
import {useState} from 'react'
import DashboardIcon from '@rsuite/icons/legacy/Dashboard';
import GroupIcon from '@rsuite/icons/legacy/Group';
import MagicIcon from '@rsuite/icons/legacy/Magic';
import GearCircleIcon from '@rsuite/icons/legacy/GearCircle';

const styles = {
  
  position: "fixed",
  left: 0,
  maxWidth:"20vw"
  
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
              User Group
            </Nav.Item>
            <Nav.Menu eventKey="3" title="Advanced"  icon={<MagicIcon />}>
              <Nav.Item eventKey="3-1">Geo</Nav.Item>
              <Nav.Item eventKey="3-2">Devices</Nav.Item>
              <Nav.Item eventKey="3-3">Loyalty</Nav.Item>
              <Nav.Item eventKey="3-4">Visit Depth</Nav.Item>
            </Nav.Menu>
            <Nav.Menu eventKey="4" title="Settings"   icon={<GearCircleIcon />}>
              <Nav.Item eventKey="4-1">Applications</Nav.Item>
              <Nav.Item eventKey="4-2">Channels</Nav.Item>
              <Nav.Item eventKey="4-3">Versions</Nav.Item>
              
            </Nav.Menu>
            <Nav.Item eventKey="1"  active icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2"  icon={<GroupIcon />}>
              User Group
            </Nav.Item>
            <Nav.Item eventKey="1"  active icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2"  icon={<GroupIcon />}>
              User Group
            </Nav.Item>
            <Nav.Item eventKey="1"  active icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2"  icon={<GroupIcon />}>
              User Group
            </Nav.Item>
            <Nav.Item eventKey="1"  active icon={<DashboardIcon />}>
              Dashboard
            </Nav.Item>
            <Nav.Item eventKey="2"  icon={<GroupIcon />}>
              User Group
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
  const [expanded, setExpand] = useState(true);

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
