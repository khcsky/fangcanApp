import React, { Component } from 'react'

import './login.scss'
import{login} from '../../apis/api'

import {Flex,InputItem,WingBlank,WhiteSpace,Button } from 'antd-mobile'
import { Link } from 'react-router-dom'

export default class Login extends Component {
  constructor(props){
       super(props)
       this.state={
         user:'',
         pwd:'',
         eorrtext:"none"
       }
  }

  render() {
    return (
      <div className="login_content">
         <Flex justify="center"><img className='pic' src={require('../../assets/images/logo.jpg')}/></Flex>
         <WhiteSpace size="xl" />

         <WingBlank size="xl">
              <InputItem
                placeholder="请输入用户名"
                value={this.state.user}
                onChange={(val)=>{this.setState({
                  user:val
                })}}
              >
              <div style={{ backgroundImage: `url(${require('../../assets/images/icon_user.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
              </InputItem>
              <InputItem
                type="password"
                placeholder="请输入密码"
                value={this.state.pwd}
                onChange={(val)=>{this.setState({
                  pwd:val
                })}}
              >
                <div style={{ backgroundImage:  `url(${require('../../assets/images/icon_pwd.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
              </InputItem>
              <p style={{display:this.state.eorrtext, color:"#e94747", margin:"10px 0 0 10px"}}>*您输入的账户或密码不正确！</p>
              <WhiteSpace size="xl" />
              <Button type="warning" onClick={this.clickLogin.bind(this)}>登录</Button>
              <WhiteSpace size="md"/>
              <Flex className="reg_pwd" justify="between">
                <Link to="/reg"><span>&ensp;手机快速注册</span></Link>
                <Link to="/reg"><span>忘记密码&ensp;</span></Link>
              </Flex>
            <Flex justify="center"><p className="useragree">登录/注册即代表同意《sky房产用户协议》</p></Flex>
           
        </WingBlank>
      </div>
    )
  }

  //点击登录
  async clickLogin(){
   let res = await login(this.state.user,this.state.pwd)
    let data =res.data

    if(data.indexOf("ok") !== -1){
      //登录成功本地存储用户名
    localStorage.name=this.state.user
       this.props.history.push("/")
    }else{
      this.setState({
        eorrtext:"block",
        pwd:""
      })
    }


  }
}

