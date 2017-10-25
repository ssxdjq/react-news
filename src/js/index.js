import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
class Text extends React.Component {
  render() {
    return (
      <div>
      	  <p>This is a react Component,hello ssxs</p>
      	  <Menu mode="horizontal">
      	  		<Menu.Item key="mail">
		          <Icon type="mail" />头条
		        </Menu.Item>
      	  </Menu>
      </div>
      
    );
  }
}
// ReactDOM.render(<Text/>, document.getElementById('main'));
