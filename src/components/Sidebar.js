import React from 'react';
import { Menu, Icon } from 'antd';
import { Link, IndexLink } from 'react-router';

const SubMenu = Menu.SubMenu

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ''
    }
  }

  handleClick(e) {
    console.log('click', e);
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        style={{ width: 240 }}
        mode="inline">
        <Menu.Item key="home"><IndexLink to="/"><span><Icon type="home" />Home</span></IndexLink></Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="user" /><span>用户管理</span></span>}>
            <Menu.Item key="1"><Link to="/user">User</Link></Menu.Item>
        </SubMenu>
        <Menu.Item><Link to="/">谷歌地图</Link></Menu.Item>
      </Menu>
    )
  }
}
export default Sidebar;
