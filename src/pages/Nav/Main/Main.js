import React, { Component } from 'react'
import {Flex,Carousel,Grid,WhiteSpace,WingBlank} from 'antd-mobile'
import './main.scss'
import {getlist} from '../../../apis/api'
import Houseinfo from '../../../components/Houseinfo/Houseinfo'
import { connect } from 'react-redux'
import {addHouseInfo} from '../../../store/actions'



//导航数据列表
const Navdata = [
  {icon:require('../../../assets/images/icon_xinfang.png'),text:"新房"},
  {icon:require('../../../assets/images/icon_ershoufang.png'),text:"二手房"},
  {icon:require('../../../assets/images/icon_zufang.png'),text:"租房"},
  {icon:require('../../../assets/images/icon_xiezilou.png'),text:"商铺写字楼"},
  {icon:require('../../../assets/images/icon_maifang.png'),text:"卖房"},
  {icon:require('../../../assets/images/icon_haiwai.png'),text:"海外房产"},
  {icon:require('../../../assets/images/icon_fangjia.png'),text:"小区房价"},
  {icon:require('../../../assets/images/chengjiao.png'),text:"问答"},
].map((_val) => ({
  icon: _val.icon,
  text: _val.text,
}));
// 房产百科数据列表
const Houseencyclopedia =[
  {icon:require('../../../assets/images/icon_money.png'),text:"我要贷款"},
  {icon:require('../../../assets/images/icon_jisuanqi.png'),text:"房贷计算"},
  {icon:require('../../../assets/images/icon_maozi.png'),text:"知识"},
  {icon:require('../../../assets/images/icon_erweima.png'),text:"扫一扫"}
].map((_val) => ({
  icon: _val.icon,
  text: _val.text,
}));

class Main extends Component {
   constructor(p){
     super(p)
     this.state={
      cityinfo:"定位中",
      data: ['1', '2', '3'],
      imgHeight: 176,
      listdata:[]
     }
     
   }
  render() {
    return (
        <div>
        
        {/* 顶部收索框 */}
          <Flex className='nav_bar' justify="around">
              <div onClick={()=>{ this.props.history.push('./citys')}}><span className='nav_bar_citys'>{this.state.cityinfo}▼</span> </div>
              <div className="nav_bar_search"> &ensp;
                <img className="nav_bar_imgs" src={require('../../../assets/images/icon_serach.png')}/>
                <span>挑好房，上sky房产app</span>
              </div>
              <div onClick={()=>{ console.log(this.props.history.push('./map'))}}>
              <img className="nav_bar_imgs" src={require('../../../assets/images/map.png')} />
              </div>
          </Flex>

         {/* 轮播内容 */}  

        <Carousel
          autoplay={true}
          infinite
        >
          {this.state.data.map(val => (
            <a
              key={val}
              href="http://www.alipay.com"
              style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
            >
              <img
                src={require(`../../../assets/images/banner${val}.jpg`)}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
                onLoad={() => {
                  // fire window resize event to change height
                  window.dispatchEvent(new Event('resize'));
                  this.setState({ imgHeight: 'auto' });
                }}
              />
            </a>
          ))}
        </Carousel>
        {/* 内容导航 */}
        <Grid data={Navdata} hasLine={false} />
        <WhiteSpace className="bgcolor" size="xl" />
        
        {/* 房产百科 */}
        <WingBlank size="xl">
         <WhiteSpace size="md" />
         <div>&emsp;<span className="house_baike">房产百科</span>&emsp;<span className="house_baike_word">专业的买房攻略</span></div>
         <Grid data={Houseencyclopedia} hasLine={false} />
       </WingBlank>
        <WhiteSpace className="bgcolor" size="xl" />
        {/* 猜你喜欢 */}
        
        <WingBlank size="xl">
            <div className="list_content">
              <h3>&emsp;猜你喜欢</h3>

            {   this.state.listdata.map(item=>
           <div key={item.id}  onClick={  this.clickHouse.bind(this,item)}><Houseinfo data={item}  /></div> 
          )} 
          </div>

          
          </WingBlank>
            <div style={{height:"100px"}}></div>
           
          </div>
      
    )
  }
  clickHouse(item){
    
    this.props.dispatch(addHouseInfo(item))
  
  }
    
  async  componentDidMount(){
    var _this=this

    // 列表数据
    let res =await getlist()
  //  更新数据
    this.setState({
      listdata:res.data 
    })
    
    
   
    
    // 轮播图片计时器
    setTimeout(() => {
      this.setState({
        data: ['1', '2', '3'],
      });
    }, 100);
  

  
  this.showCityInfo(_this);
  }



   showCityInfo(_this) {
    //实例化城市查询类
    var citysearch = new window.AMap.CitySearch();
    //自动获取用户IP，返回当前城市
    citysearch.getLocalCity(function(status, result) {
        if (status === 'complete' && result.info === 'OK') {
            if (result && result.city && result.bounds) {
                var cityinfo = result.city;
              
              //  console.log('您当前所在城市：'+cityinfo)
                //地图显示当前城市
                _this.setState( {
                  cityinfo
            } )
             
            }
        } else {
            console.log( result.info)
        }
    });
}


}

export default connect()(Main)
