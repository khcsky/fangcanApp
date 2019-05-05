import React, { Component } from 'react'
import { connect } from 'react-redux'
import Houseinfo from '../../../components/Houseinfo/Houseinfo'
 class History extends Component {
  render() {

    return (
      <div>
        <h3 style={{background:"#e94747",height:"3rem",margin:0, lineHeight:"3rem",textAlign:'center',color:"#fff"}}>历史记录</h3>
        {this.props.historylist.map(item=><Houseinfo key={item.id} data={item}/>)}
      </div>
    )
  }
}
//数据注入函数
function filter(state){
  // state === store.getState()
  //此函数return的值就会被注入到当前组件的props中
  //需要用什么数据，就注入什么数据
  return {
    historylist: state.historylist,
  }
}
export default connect(filter)(History)