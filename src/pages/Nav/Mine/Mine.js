import React, { Component } from 'react'
import {Flex,WhiteSpace,List} from 'antd-mobile'

import './mine.scss'
const Item = List.Item


export default class Mine extends Component {
  constructor(p){
    super(p)
    this.state={
      loginreg:"登录/注册",
       mylist:[
        {id:13},
        { id: '1', icon: 'my_icon_jifen2.png.png', title: '我的积分' },
       { id: '2', icon: 'my_icon_wifi.png', title: '我的订阅' },
       { id: '3', icon: 'my_icon_lianxiren.png', title: '微聊联系人' },
       {id:10},
       { id: '4', icon: 'my_icon_jishuanqi.png', title: '房贷计算器' },
       { id: '5', icon: 'my_icon_myhouse.png', title: '我的房子' },
       {id:11},
       { id: '6', icon: 'my_icon_jilu.png', title: '我的看房记录' },
       { id: '7', icon: 'my_icon_huida.png', title: '我的问答' },
       {id:12},
       { id: '8', icon: 'my_icon_set.png', title: '设置' },
       { id: '9' ,icon:'my_icon_lianxiren.png', title: '意见反馈' },
   
   ]
    }
  }

  render() {
    return (
      <div className="my_content">
       <WhiteSpace size='md' />
        
        {/* 顶部内容 */}
              <div  className="my_content_header_tp">
                  <Flex>
                    <div>
                      <img className="userimg" src={require('../../../assets/images/userimg.jpg')}/>
                   </div>&emsp;
                    <div>
                      <p onClick={()=>{ console.log(this.props.history.push('/reg'))}}>{this.state.loginreg}</p>
                      <p>可以与经济人发起聊天</p>
                    </div>                  
                  </Flex>                 
                  <img className="my_icon" src={require('../../../assets/images/my_icon_set1.png')}/>
               
              </div>
             
              <WhiteSpace size='md' />

          <Flex className="my_content_header_bt" justify="around">
              <div>
                <span>0</span>
                <div>
                <img className="my_icon" src={require('../../../assets/images/my_icon_qianbao.png')}/>
                <span className="my_word">&emsp;钱包</span> 
                </div>
              </div>
              <div>
                <span>0</span>
                <div>
                <img className="my_icon" src={require('../../../assets/images/my_icon_youhui.png')}/>
                <span className="my_word">&emsp;优惠</span> 
                </div>
              </div>
              <div>
                <span>0</span>
                <div>
                <img className="my_icon" src={require('../../../assets/images/my_icon_jifen1.png')}/>
                <span className="my_word">&emsp;积分</span> 
                </div>
              </div>
              
          </Flex>
         
           <div style={{ marginTop: 10, marginBottom: 10 }}>    
          
          
        <List>
        {
            this.state.mylist.map(item => {
              if (item.icon) {
                return <Item
                  thumb={require('../../../assets/images/' + item.icon)} 
                  arrow="horizontal"
                  onClick={() => { }}
                  key={item.id}
                >{item.title}</Item>
              }
              return <div key={item.id} style={{height: '10px', backgroundColor: '#F3F3F3'}}></div>
            })
          }
      
      </List>


   
      
      </div>
         
      </div>
    )
  }

  componentDidMount(){
    this.setState({
      loginreg: localStorage.name ? localStorage.name : '登录/注册'
    })
  }
}
