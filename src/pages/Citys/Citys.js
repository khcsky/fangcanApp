import React, { Component } from 'react'
import citys from '../Json/city.json'
import {List } from 'antd-mobile'
import BScroll from 'better-scroll'
import './city.scss'


export default class Citys extends Component {
  constructor(p){
    super(p)
    this.moveRightBar = this.moveRightBar.bind(this)
    this.state={
      hotcitys:["成都","重庆","北京","武汉","深圳","上海","海南","南京"]
      
    }
  }
  render() {
    
    return (
      <div className="city_content">
       
       <div className="left_div">
            <ul className='content'>
          <h3 style={{background:"#e94747",height:"3rem",margin:0, lineHeight:"3rem",textAlign:'center',color:"#fff"}}>请选择你的城市</h3>       
              <h3>热门城市</h3>
              
                <div className= "hotcity_content">
              {
                  this.state.hotcitys.map(item=>
                    <div key={item} className="hotcity"><label className= "hotctiys">{item}</label></div>)
                }
                </div>
          <h3>城市分类</h3>
         
        
                <div style={{ marginTop: 10, marginBottom: 10 }}>


                {citys.citylist.map(item=>
                <div  key={item.title} className="my-accordion" onChange={this.onChange}>
                  <h3 id={item.title} className="city_title"> {item.title}</h3>
                    

                    {item.lists.map(i=>
                      <List  onClick={()=>{
                        this.props.history.push('/')
                      }} key={i}>{i}</List>
                    )}
                  
                </div>)}       
                </div>
              </ul>
          </div>
          <div className="right_div" onTouchMove={this.moveRightBar}>
           {citys.citylist.map(item=>
            <p className='right_city' key={item.title}>{item.title}</p>)}
          </div>
         
      </div>
    )
  }
   //监听手指在右侧移动
   moveRightBar(e) {
    // console.log(e.targetTouches[0].clientX, e.targetTouches[0].clientY)
    
    // 通过坐标获取当前节点
    let curElt = document.elementFromPoint(e.targetTouches[0].clientX, e.targetTouches[0].clientY)
console.log(curElt.innerHTML)
    if (curElt.className === 'right_city') {

      /* 进行判断，如果标签发生改变，才进行节点滚动！否则不滚 */
      if (this._curDivId !== curElt.innerHTML) {
        //根据当前选中标签，取出左侧对应DIV，进行滚动
        this._left_box.scrollToElement(document.getElementById(curElt.innerHTML), 500)
        //记录当前滚动到的DIV ID
        this._curDivId = curElt.innerHTML

      }


    }
   }
  componentDidMount() {

    this._left_box = new BScroll(document.getElementsByClassName('left_div')[0],{
      click: true
    })
  }
}
