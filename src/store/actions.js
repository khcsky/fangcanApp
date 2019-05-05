/* 改变Test值 */
export function changeTest(val){
    return {
        type: 'changeTest',
        val
    }
}
/*  添加一条历史记录
    item: 点击的房产数据
*/
export function addHouseInfo(item){
    return {
        type: 'addHouseInfo',
        item
    }
}