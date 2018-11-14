/**
 * Created by chintec on 20../../1/23.
 * {
    className: '刺身',    //分类名
    color:true,          //确定每页底部padding 颜色  有这字段 为 蓝色 没有为白色
    value: [
      {
        num:5,           // 当前类别索引 用于 导航与页面联动
        picPath: require('../img/cishen/001.jpg'),   //图片
        cuisine: [
          {
            name: '北极贝',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '48',                             // 价格
            history: '45',                           // 历史价格
            left: 343,
            top: 182,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
            amount3:'',
          }
        ]
      }
    ]
  },
*/

const data = [
  {
    className: '花胶锅底',
    value: [
      {
        num:0,
        picPath: require('../img/guodi/001.jpg'),
        cuisine: [
          {
            name: '胶原花胶锅',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '39',                             // 价格
            history: '',                           // 历史价格
            left: 614,
            top: 55,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'锅',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '胶原三宝锅',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '69',                             // 价格
            history: '',                           // 历史价格
            left: 416,
            top: 397,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'例',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '养生菌王锅',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 416,
            top: 514,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'例',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鲜熬三个番茄锅',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 416,
            top: 632,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'例',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '川香麻辣锅',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '22',                             // 价格
            history: '',                           // 历史价格
            left: 416,
            top: 748,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'例',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          }
        ]
      },
    ]
  },
  {
    className: '丸滑世家',
    value: [
      {
        num:1,
        picPath: require('../img/wanzi/001.jpg'),
        cuisine: [
          {
            name: '300次手工捶打纯虾仁滑',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '59',                             // 价格
            history: '',                           // 历史价格
            left: 634,
            top: 100,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '豆捞大虾仁丸',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '52',                             // 价格
            history: '',                           // 历史价格
            left: 488,
            top: 370,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '特色墨鱼滑',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '45',                             // 价格
            history: '',                           // 历史价格
            left: 360,
            top: 730,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
        ]
      },
      {
        num:1,
        picPath: require('../img/wanzi/002.jpg'),
        cuisine: [
          {
            name: '6眼飞鱼籽福袋',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '32',                             // 价格
            history: '',                           // 历史价格
            left: 43,
            top: 99,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '蟹粉蟹子丸',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '29',                             // 价格
            history: '',                           // 历史价格
            left: 354,
            top: 390,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '乒乓手打牛丸',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '38',                             // 价格
            history: '',                           // 历史价格
            left: 452,
            top: 732,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
        ]
      },
    ]
  },
  {
    className: '面朝大海有点甜',
    value: [
      {
        num:2,
        picPath: require('../img/haixian/001.jpg'),
        cuisine: [
          {
            name: '胶原王花胶',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '69',                             // 价格
            history: '',                           // 历史价格
            left: 564,
            top: 128,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鲜活斑节虾',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '35',                             // 价格
            history: '',                           // 历史价格
            left: 454,
            top: 350,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'50g',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '海参',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '38',                             // 价格
            history: '',                           // 历史价格
            left: 75,
            top: 490,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'根',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '现点活片牛乳黑鱼',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '69',                             // 价格
            history: '',                           // 历史价格
            left: 40,
            top: 725,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鲜活鲍鱼仔',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '19',                             // 价格
            history: '',                           // 历史价格
            left: 647,
            top: 698,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'只',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鲜活鲍鱼',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '19',                             // 价格
            history: '',                           // 历史价格
            left: 647,
            top: 775,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'只',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },

        ]
      },
      {
        num:2,
        picPath: require('../img/haixian/002.jpg'),
        cuisine: [
          {
            name: '鲜活红贝',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '48',                             // 价格
            history: '',                           // 历史价格
            left: 335,
            top: 98,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鲜脆鱿鱼',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '36',                             // 价格
            history: '',                           // 历史价格
            left: 444,
            top: 353,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鲜脆扇贝',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '15',                             // 价格
            history: '',                           // 历史价格
            left: 299,
            top: 508,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'只',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '竹蛏王',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '19',                             // 价格
            history: '',                           // 历史价格
            left: 344,
            top: 754,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'只',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
        ]
      },
      {
        num:2,
        picPath: require('../img/haixian/003.jpg'),
        cuisine: [
          {
            name: '梭子蟹',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '48',                             // 价格
            history: '',                           // 历史价格
            left: 401,
            top: 74,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'只',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '巴沙鱼片',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '28',                             // 价格
            history: '',                           // 历史价格
            left: 402,
            top: 300,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '海鲜组合(中)',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '158',                             // 价格
            history: '',                           // 历史价格
            left: 250,
            top: 456,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '缤纷海鲜组合(大)',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '258',                             // 价格
            history: '',                           // 历史价格
            left: 225,
            top: 736,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
        ]
      },

    ]
  },
  {
    className: '澳牛蒙羊',
    value: [
      {
        num:3,
        picPath: require('../img/niuyang/001.jpg'),
        cuisine: [
          {
            name: '三色上选和牛组合',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '228',                             // 价格
            history: '',                           // 历史价格
            left: 641,
            top: 100,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '相间肥牛',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '59',                             // 价格
            history: '',                           // 历史价格
            left: 260,
            top: 400,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鲜切安格斯牛肉',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '79',                             // 价格
            history: '',                           // 历史价格
            left: 660,
            top: 400,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '厚切雪花牛肉',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '128',                             // 价格
            history: '',                           // 历史价格
            left: 284,
            top: 630,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '厚切霜降牛肉',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '280',                             // 价格
            history: '',                           // 历史价格
            left: 404,
            top: 765,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },

        ]
      },
      {
        num:3,
        picPath: require('../img/niuyang/002.jpg'),
        cuisine: [
          {
            name: '澳洲和牛',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '79',                             // 价格
            history: '',                           // 历史价格
            left: 392,
            top: 131,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '饮泉食蕨羔羊肋卷',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '48',                             // 价格
            history: '',                           // 历史价格
            left: 166,
            top: 312,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '雪花和牛粒',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '99',                             // 价格
            history: '',                           // 历史价格
            left: 353,
            top: 419,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '8秒牛舌',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '59',                             // 价格
            history: '',                           // 历史价格
            left: 328,
            top: 578,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '尚品牛羊组合',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '78',                             // 价格
            history: '',                           // 历史价格
            left: 323,
            top: 782,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
        ]
      },
    ]
  },
  {
    className: '豆捞伴侣',
    value: [
      {
        num:4,
        picPath: require('../img/doulao/001.jpg'),
        cuisine: [
          {
            name: '胶原三宝(鲍鱼+花胶+蹄筋)',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '98',                             // 价格
            history: '',                           // 历史价格
            left: 45,
            top: 125,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '藕遇小鲜肉',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '22',                             // 价格
            history: '',                           // 历史价格
            left: 156,
            top: 528,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '胶原蹄筋',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '39',                             // 价格
            history: '',                           // 历史价格
            left: 634,
            top: 435,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '空运大刀毛肚',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '59',                             // 价格
            history: '',                           // 历史价格
            left: 272,
            top: 733,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '牛百叶',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '32',                             // 价格
            history: '',                           // 历史价格
            left: 658,
            top: 640,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
        ]
      },
      {
        num:4,
        picPath: require('../img/doulao/002.jpg'),
        cuisine: [
          {
            name: '酥脆炸腐竹',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '20',                             // 价格
            history: '',                           // 历史价格
            left: 355,
            top: 72,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鸭血',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 281,
            top: 250,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鹌鹑蛋',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 297,
            top: 472,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '蟹肉棒',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '28',                             // 价格
            history: '',                           // 历史价格
            left: 331,
            top: 715,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '午餐肉',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '25',                             // 价格
            history: '',                           // 历史价格
            left: 647,
            top: 730,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },

        ]
      },
    ]
  },
  {
    className: '鲜蔬活菌',
    value: [
      {
        num:5,
        picPath: require('../img/shucai/001.jpg'),
        cuisine: [
          {
            name: '比肉好吃的绣球菌',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '38',                             // 价格
            history: '',                           // 历史价格
            left: 399,
            top: 75,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '花胶绣球菌拼盘',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '48',                             // 价格
            history: '',                           // 历史价格
            left: 373,
            top: 350,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鲜嫩海芽菜',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '15',                             // 价格
            history: '',                           // 历史价格
            left: 185,
            top: 517,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '活体松香菇',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '39',                             // 价格
            history: '',                           // 历史价格
            left: 574,
            top: 500,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '活体蔬菜',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '29',                             // 价格
            history: '',                           // 历史价格
            left: 435,
            top: 600,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '蔬菜组合',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '38',                             // 价格
            history: '',                           // 历史价格
            left: 245,
            top: 761,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '活体豆苗',                           //菜名
            colorFlag:2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '22',                             // 价格
            history: '',                           // 历史价格
            left: 490,
            top: 725,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
        ]
      },
      {
        num:5,
        picPath: require('../img/shucai/002.jpg'),
        cuisine: [
          {
            name: '铁杆山药',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '28',                             // 价格
            history: '',                           // 历史价格
            left: 241,
            top: 190,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鲜竹荪',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '58',                             // 价格
            history: '',                           // 历史价格
            left: 651,
            top: 55,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '虫草花',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 412,
            top: 290,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '养生菌菇组合',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '48',                             // 价格
            history: '',                           // 历史价格
            left: 295,
            top: 405,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '金针菇',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 199,
            top: 574,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '火锅川粉',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 199,
            top: 612,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '魔芋丝',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 199,
            top: 648,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '中百叶',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '12',                             // 价格
            history: '',                           // 历史价格
            left: 199,
            top: 685,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '龙口粉丝',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '12',                             // 价格
            history: '',                           // 历史价格
            left: 199,
            top: 723,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '冻豆腐',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '15',                             // 价格
            history: '',                           // 历史价格
            left: 199,
            top: 763,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '自制石磨豆腐',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '25',                             // 价格
            history: '',                           // 历史价格
            left: 199,
            top: 804,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '圆生菜',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '15',                             // 价格
            history: '',                           // 历史价格
            left: 536,
            top: 537,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '生菜',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '12',                             // 价格
            history: '',                           // 历史价格
            left: 536,
            top: 575,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '菠菜',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '12',                             // 价格
            history: '',                           // 历史价格
            left: 536,
            top: 612,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '娃娃菜',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '15',                             // 价格
            history: '',                           // 历史价格
            left: 536,
            top: 647,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '土豆片',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '10',                             // 价格
            history: '',                           // 历史价格
            left: 536,
            top: 682,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '冬瓜',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '10',                             // 价格
            history: '',                           // 历史价格
            left: 536,
            top: 722,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '竹笋尖',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 536,
            top: 762,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '黑木耳',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '16',                             // 价格
            history: '',                           // 历史价格
            left: 536,
            top: 804,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
        ]
      },
    ]
  },
  {
    className: '中华面点',
    value: [
      {
        num:6,
        picPath: require('../img/mianshi/001.jpg'),
        cuisine: [
          {
            name: '三色蔬汁手擀面',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 523,
            top: 90,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '香蕉蛋飞饼',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '19',                             // 价格
            history: '',                           // 历史价格
            left: 258,
            top: 530,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '印度原味飞饼',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 611,
            top: 440,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '桂花酒酿糕',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 303,
            top: 765,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '原味年糕',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '16',                             // 价格
            history: '',                           // 历史价格
            left: 645,
            top: 770,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },

        ]
      },
      {
        num:6,
        picPath: require('../img/mianshi/002.jpg'),
        cuisine: [
          {
            name: '红糖糍粑',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 586,
            top: 261,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '现煎手工虾肉蛋饺',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 217,
            top: 430,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'5只',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '花胶红枣银耳冻',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '22',                             // 价格
            history: '',                           // 历史价格
            left: 315,
            top: 601,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '茴香小油条',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 186,
            top: 761,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'份',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },

        ]
      },
    ]
  },
  {
    className: '青春酒肆',
    value: [
      {
        num:7,
        picPath: require('../img/jiushui/001.jpg'),
        cuisine: [
          {
            name: '青春时分燕窝水',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '22',                             // 价格
            history: '',                           // 历史价格
            left: 387,
            top: 114,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'杯',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '绝命毒师',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '48',                             // 价格
            history: '',                           // 历史价格
            left: 179,
            top: 290,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'杯',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '热带雨林',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '38',                             // 价格
            history: '',                           // 历史价格
            left: 179,
            top: 448,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'杯',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '粉红莫吉托',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '38',                             // 价格
            history: '',                           // 历史价格
            left: 172,
            top: 602,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'杯',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '芒果莫吉托',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '38',                             // 价格
            history: '',                           // 历史价格
            left: 170,
            top: 758,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'杯',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '桃花酿',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '28',                             // 价格
            history: '',                           // 历史价格
            left: 377,
            top: 470,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'壶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '玫瑰酿',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '28',                             // 价格
            history: '',                           // 历史价格
            left: 504,
            top: 470,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'壶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '奇异果酿',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '32',                             // 价格
            history: '',                           // 历史价格
            left: 630,
            top: 470,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'壶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '花生冰沙',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '22',                             // 价格
            history: '',                           // 历史价格
            left: 511,
            top: 552,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'杯',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鲜芒果冰沙',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '28',                             // 价格
            history: '',                           // 历史价格
            left: 511,
            top: 602,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'杯',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鲜西瓜汁(杯)',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '15',                             // 价格
            history: '',                           // 历史价格
            left: 511,
            top: 650,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'杯',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鲜西瓜汁(扎)',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '48',                             // 价格
            history: '',                           // 历史价格
            left: 511,
            top: 698,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'扎',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鲜柳橙汁(杯)',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 511,
            top: 746,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'杯',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '鲜柳橙汁(扎)',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '58',                             // 价格
            history: '',                           // 历史价格
            left: 511,
            top: 794,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'扎',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
        ]
      },
      {
        num:7,
        picPath: require('../img/jiushui/002.jpg'),
        cuisine: [
          {
            name: '金桔柠檬饮(杯)',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '19',                             // 价格
            history: '',                           // 历史价格
            left: 163,
            top: 39,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'杯',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '金桔柠檬饮(扎)',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '48',                             // 价格
            history: '',                           // 历史价格
            left: 163,
            top: 88,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'扎',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '麦苗薏米露',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '15',                             // 价格
            history: '',                           // 历史价格
            left: 163,
            top: 139,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'杯',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '七喜',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '8',                             // 价格
            history: '',                           // 历史价格
            left: 163,
            top: 187,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'瓶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '椰奶',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '12',                             // 价格
            history: '',                           // 历史价格
            left: 163,
            top: 235,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'瓶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '加多宝',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '12',                             // 价格
            history: '',                           // 历史价格
            left: 163,
            top: 283,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'瓶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '百事可乐',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '8',                             // 价格
            history: '',                           // 历史价格
            left: 163,
            top: 331,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'瓶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '雪花脸谱',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '38',                             // 价格
            history: '',                           // 历史价格
            left: 163,
            top: 379,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'瓶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '雪花晶尊',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '22',                             // 价格
            history: '',                           // 历史价格
            left: 163,
            top: 427,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'瓶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '雪花纯生',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '15',                             // 价格
            history: '',                           // 历史价格
            left: 163,
            top: 475,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'瓶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '1664白啤',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '30',                             // 价格
            history: '',                           // 历史价格
            left: 163,
            top: 524,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'瓶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '金色年华合酒五年陈',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '48',                             // 价格
            history: '',                           // 历史价格
            left: 532,
            top: 40,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'瓶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '石库门红标',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '48',                             // 价格
            history: '',                           // 历史价格
            left: 532,
            top: 87,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'瓶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '罗莎科尼拉赤霞珠干红',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '108',                             // 价格
            history: '',                           // 历史价格
            left: 532,
            top: 134,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'瓶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '杰卡斯梅洛干红',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '218',                             // 价格
            history: '',                           // 历史价格
            left: 532,
            top: 182,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'瓶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '洋河蓝色经典(海之蓝)52°',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '288',                             // 价格
            history: '',                           // 历史价格
            left: 532,
            top: 230,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'瓶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },

          {
            name: '豆捞蔗艮饮(杯)',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '19',                             // 价格
            history: '',                           // 历史价格
            left: 150,
            top: 772,
            count: 0,                                // 点了几份
            status: 2,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'杯',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '豆捞蔗艮饮(扎)',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '38',                             // 价格
            history: '',                           // 历史价格
            left: 150,
            top: 818,
            count: 0,                                // 点了几份
            status: 2,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'扎',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '科罗娜',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '18',                             // 价格
            history: '',                           // 历史价格
            left: 423,
            top: 539,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'瓶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '雪花黑啤',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '15',                             // 价格
            history: '',                           // 历史价格
            left: 660,
            top: 506,
            count: 0,                                // 点了几份
            status: 1,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'瓶',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '豆捞梅子饮(杯)',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '19',                             // 价格
            history: '',                           // 历史价格
            left: 580,
            top: 742,
            count: 0,                                // 点了几份
            status: 2,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'杯',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },

          {
            name: '豆捞梅子饮(扎)',                           //菜名
            colorFlag: 1,                            // 当前菜背景色 1 白底  2 蓝底
            price: '48',                             // 价格
            history: '',                           // 历史价格
            left: 580,
            top: 788,
            count: 0,                                // 点了几份
            status: 2,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'扎',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },

        ]
      },
    ]
  },
  {
    className: '其他',
    value: [
      {
        num:8,
        picPath: require('../img/qita/001.jpg'),
        cuisine: [
          {
            name: '自助调料',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '8',                             // 价格
            history: '',                           // 历史价格
            left: 156,
            top: 140,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'位',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '打包盒／袋',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '1',                             // 价格
            history: '',                           // 历史价格
            left: 535,
            top: 136,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'个',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '湿巾',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '2',                             // 价格
            history: '',                           // 历史价格
            left: 535,
            top: 182,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'袋',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
          {
            name: '盒装餐巾纸',                           //菜名
            colorFlag: 2,                            // 当前菜背景色 1 白底  2 蓝底
            price: '2',                             // 价格
            history: '',                           // 历史价格
            left: 535,
            top: 230,
            count: 0,                                // 点了几份
            status: 3,                               //1 正常  2 大字横排 3 小字横排 4 酒水类单位值  5 酒水类单位2行显示
            unit:'盒',                               //单位
            amount:'',                               // 每份几个
            gram:'',                                 //每份多少g   有些有
            amount2:'',
          },
        ]
      },

    ]
  },
]


export default data