import React, { Component } from 'react'
import {Flex} from 'antd-mobile'

import './wetalker.scss'
export default class Wetalker extends Component {
  render() {
    return (
      <div>
      
          <div className="Wetalker_content">
          <Flex direction="column">
                 <img src={require('../../../assets/images/userimg.jpg')}/>
                 <span className="char">我要聊天</span> 
                 </Flex>
          </div>
         
     
      </div>
    )
  }
}
