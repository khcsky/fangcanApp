// 公共组件  房产信息列表
import React, { Component } from 'react'
import {Flex} from 'antd-mobile'

export default class Houseinfo extends Component {

 
 static defaultProps ={
   data:{
     area: "地区",
     name: "楼盘名", 
      point: "面积",
      price: "均价",
      range: "区域",
      src: "http://img11.soufunimg.com/viewimage/house/2018_08/23/M1F/0E/FE/ChCE4Vt-TaeIdnCdAAFp4mos2FkABE-zAIGADcAAWn6181/880x600.jpg",
      type: "推荐户型"

   }
 }



  render() {
    let {src,name,area,range,type,point,price} = this.props.data
    return (
      <div>
          
         <Flex justify="between">
              <div className="list_left">
                  <div><img className="list_left_img" src={src}/></div>
                  <div className="list_left_rt">
                    <div className="list_left_adder">{name}</div>
                    <div className="list_left_adderss">{area}&ensp;{range}</div>
                    <div className="list_left_adderss">{type}&ensp;{point}平</div>
                  </div>
              </div> 
              <div className="list_right">
              {price}/平
              </div> 
            </Flex>
      </div>
    )
  }
}
