/* 创建仓库并返回 */
import {createStore} from 'redux'
import reducers from './reducers'

export default createStore(reducers)

