/**
 * Created by yaopeng on 2018/1/27.
 */
import Data from './data'

let picData = []
Data.map((value,i) => {
  value.value.map((v,k)=>{
    picData.push(v)
  })
})

const orderData = [
  {
    num:0,
    className:'花胶锅底',
    list:[]
  },
  {
    num:1,
    className:'丸滑世家',
    list:[]
  },
  {
    num:2,
    className:'面朝大海有点甜',
    list:[]
  },
  {
    num:3,
    className:'澳牛蒙羊',
    list:[]
  },
  {
    num:4,
    className:'豆捞伴侣',
    list:[]
  },
  {
    num:5,
    className:'鲜蔬活菌',
    list:[]
  },
  {
    num:6,
    className:'中华面点',
    list:[]
  },
  {
    num:7,
    className:'青春酒肆',
    list:[]
  },
  {
    num:8,
    className:'其他',
    list:[]
  },
]

const hotSearch = [
  {
    num: 0,
    picIndex: 0,
    name: '川香麻辣锅',
  },
  {
    num: 1,
    picIndex: 4,
    name: '豆捞大虾仁滑',
  },
  {
    num: 0,
    picIndex: 2,
    name: '泰式冬荫功锅',
  },
  {
    num: 2,
    picIndex: 7,
    name: '澳洲和牛上脑',
  },
  {
    num: 2,
    picIndex: 6,
    name: '热气羊肉',
  },
  {
    num: 3,
    picIndex: 14,
    name: '海鲜组合',
  },
  {
    num: 3,
    picIndex: 14,
    name: '墨鱼仔',
  },
  {
    num: 4,
    picIndex: 15,
    name: '鲜活扇贝',
  },
  {
    num: 5,
    picIndex: 17,
    name: '三文鱼',
  },
]

export {picData, orderData, hotSearch}

