import React, { Component } from 'react'
import {InputItem,WingBlank,Checkbox,Button,WhiteSpace } from 'antd-mobile'
import { Link } from 'react-router-dom'
import './Reg.scss'
import{reg} from '../../apis/api'


export default class Reg extends Component {
  constructor(p){
    super(p)
    this.state={
      user:'',
      pwd:''
      
    }
  }
  render() {
    return (
      <div className="reg_content">
        <WingBlank size="xl">
        <InputItem
            placeholder="请输入你的手机号"
            value={this.state.user}
            onChange={(val)=>{this.setState({
              user:val
            })}}
            
          ></InputItem>
              <InputItem
                type="password"
                placeholder="请输入密码"
                value={this.state.pwd}
                onChange={(val)=>{this.setState({
                  pwd:val,
                  secetced:"false"
                })}}
                 >
               
              </InputItem>
              <InputItem
                 placeholder="请输验证码"
              >
              </InputItem>
              <WhiteSpace size="xl" />
             <label className="agre">&emsp;<Checkbox/> <span className="myagree">我以同意</span></label> <span className="Maincolor" onClick={()=>{this.props.history.push('/Useragreements')}}>《用户服务协议》及《隐私权政策》</span>
             <WhiteSpace size="xl" />
              <Button type="warning" onClick={this.clickReg.bind(this)}>注册</Button>
              <WhiteSpace size="md" />
              <Link  className="Maincolor" to="/login">&ensp;已有账号</Link>
             
            
              
        </WingBlank>
      </div>
    )
  }
 async clickReg(){
     let res = await reg(this.state.user,this.state.pwd)
       let data = res.data
     if(data.indexOf("ok") !== -1){
    // 注册成功跳转登录页面
     this.props.history.push('/login')
     }else{
      console.log("注册失败")
     }
  }
}
