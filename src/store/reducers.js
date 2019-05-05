
import {combineReducers} from 'redux'

var test =(state = '测试的值',action)=>{
    switch(action.type){
        case 'changeTest':return action.val
        default:return state
    }
}
/* 房产历史列表 */
var historylist = (state = [], action) => {
    switch(action.type){
        case 'addHouseInfo': 
           /*  //对象深拷贝（产生一个新数组，把点击的item放进去，覆盖更新）
           let newArr = JSON.parse(JSON.stringify(state))
           newArr.push(action.item) */

           /* 1. 先删掉老数据源
              2. 把新数据源放到数组的最前位置 */
              for(let i = 0; i < state.length; i++){
                if(state[i].id === action.item.id){
                    //如果有老数据，则删掉老数据
                    state.splice(i,1)
                    break
                }
              }

            /* ES6方式来创建新数组并返回 */
            return [action.item,  ...state]

        default: return state
    }   
}


export default combineReducers ({
    historylist,test
})