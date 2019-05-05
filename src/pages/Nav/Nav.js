import React, { Component } from 'react'

import {TabBar} from 'antd-mobile'

import Main from './Main/Main'
import Wetalker from './Wetalker/Wetalker'
import History from './History/History'
import Mine from './Mine/Mine'

import './nav.scss'



export default class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'main',
      hidden: false,
      navlist:[
        {title:"首页",key:"main",imgurl:"icon_main.png",imgurlactive:"icon_main_a.png"},
        {title:"微聊",key:"wetalker",imgurl:"icon_wetalker.png",imgurlactive:"icon_wetalker_a.png"},
        {title:"足迹",key:"history",imgurl:"icon_history.png",imgurlactive:"icon_history_a.png"},
        {title:"我的",key:"mine",imgurl:"icon_mine.png",imgurlactive:"icon_mine_a.png"},
      ]
    };
  }

  renderContent() {
   switch(this.state.selectedTab){
     case "main":return <Main history={this.props.history}/>
     case "wetalker":return <Wetalker/>
     case "history":return <History/>
     case "mine":return <Mine history={this.props.history}/>
   }
  }

  render() {
    return (
      <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 } }>
        <TabBar
          unselectedTintColor="#707070"
          tintColor="#e94747"
          barTintColor="white"
          hidden={this.state.hidden}
        >
        {this.state.navlist.map(item=>
            <TabBar.Item
            title={item.title}
            key={item.key}
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${require('../../assets/images/'+ item.imgurl)}) center center /  21px 21px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: `url(${require('../../assets/images/'+ item.imgurlactive)}) center center /  21px 21px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === item.key}
            onPress={() => {
              this.setState({
                selectedTab: item.key,
              });
            }}
          
          >
            {this.renderContent()}
          </TabBar.Item>
        )}

        </TabBar>
      </div>
    );
  }
}
