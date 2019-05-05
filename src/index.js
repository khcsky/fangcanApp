import React from 'react';
import ReactDOM from 'react-dom'

// antd-mobile移动端ui插件
import 'antd-mobile/dist/antd-mobile.css'


// 引入redux-store
import store from './store/store'
// 引入数据容器组件，并绑定store
import { Provider } from 'react-redux'

import App from './pages/App'

 ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

