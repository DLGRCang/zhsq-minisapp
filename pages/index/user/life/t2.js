import http from '../../../../utils/api'
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   
  },
 
  /**
   * 组件的初始数据
   */
  data: {
    lifeList:[
      {id:0,title:"一般饭后多久可以跑步(饭后多久开始运动合适)",img:"https://www.zhuanboke.cn/tupian/6F17A5FE4.jpg",cont:"俗话说，“饭后百步走，活到九十九”，意思是饭后散步的好处。然而，从健康的角度来看，它不适合饭后立即锻炼，尤其是剧烈运动。如果剧烈运动导致血液分布紊乱，夺取消化器官的血容量，导致胃的血液供应不足，剧烈运动还会拉动连接胃肠道的肠系膜，导致腹痛和其他胃肠疾病。那么饭后你能锻炼多长时间？",data:[
        {tite:"1.根据锻炼的强度来判断",content:"轻度运动，如散步、广场舞和太极拳，可在饭后半小时至一小时内进行；中度运动，如慢跑、有氧运动和骑自行车，可在饭后一小时至两小时内进行；高强度运动，如长跑、跳绳、踢足球和打篮球，应在饭后两至三小时内进行。"},
        {tite:"2.根据吃的食物量来判断",content:"如果你在锻炼前吃大量的食物，并且吃主要由蛋白质和脂肪组成的食物，如鸡蛋、牛羊肉、猪肉等。这些食物不容易消化，所以最好在饭后锻炼两个小时以上。如果进餐量少，食物主要是碳水化合物、蔬菜、水果或流质食物，那么根据锻炼的强度，进食和锻炼之间的间隔可以相对缩短。"},
        {tite:"3.饭后如何正确进行养生锻炼",content:"不要在饭后立即参加剧烈运动或学习，而是适当地听一些舒缓的音乐，这样大脑更容易发出指令，这样血红蛋白就可以给胃供氧，让胃更好地消化。饭后不要躺下，很容易堆积食物。最好散步半个小时左右，一定要慢慢走，这样可以让胃消化得更好。"}
      ]},
      {id:1,title:"隔夜茶有什么危害(喝隔夜茶有没有害处)",img:"https://www.zhuanboke.cn/tupian1/new_29.png",cont:"茶圣鲁豫曾说三三三六零：“苦而甜，茶也甜”。几个简单的字勾勒出茶的特殊滋味，唐代著名诗人白居易曾写过一首诗：“吃与睡，起两碗茶”，说茶离不开日常生活。许多人对此深深着迷，不惜代价购买香茶，只是为了品尝它的甜味。茶太贵了。茶含有许多对人体有益的成分，如茶多酚、儿茶素、各种氨基酸和维生素。然而，在茶汤停留一夜之后，淡黄色的液体被空气氧化成棕红色，甚至是一点红色和黑色，这基本上是茶锈。平时喜欢茶道的朋友们都知道，不同泡茶方法的水温是极其特殊的，这种隔夜的茶盘味道已经变得很差了。在隔夜茶的长期静态氧化过程中，大部分维生素都被破坏了。这种茶汤几乎没有营养。茶汤之所以是甜的，是因为它含有糖和蛋白质，这些都是细菌所喜爱的。放一夜后，茶壶就相当于一个细菌培养皿，成为细菌和霉菌生长繁殖的温床。人体饮用隔夜茶后，茶锈会与人体内的脂肪和蛋白质发生连锁反应，容易引起腹泻、胃溃疡等症状，危害健康。因此，建议大家不要喝隔夜茶，茶具要经常清洗。",data:[]},
      {id:2,title:"晕车怎么办最有效方法(在车上晕车了怎么办)",img:"https://www.zhuanboke.cn/tupian1/new_151.png",cont:"人们晕车的主要生理机能原因之一是我们的内耳前庭和眼睛之间的不协调。当我们在车里时，内耳的前庭可以感觉到身体处于运动状态；如果我们的眼睛将静态图像传送到大脑，它会使大脑中的神经毒素产生一种错觉，以为我们“中毒”了，所以大脑会发出“呕吐”的命令来帮助身体“解毒”。",data:[
        {tite:"1.晕车的人在车里时，最好不要玩手机",content:"晕车的人在乘坐公交车时最好不要玩手机，这会加重晕车的程度。放下手机，看看窗外，会降低晕车的几率。"},
        {tite:"2.生姜、白醋和香膏是治疗晕动病的三大法宝",content:"骑车前，我们可以在手腕上贴上贴有创可贴的生姜，或者用纸巾把生姜包起来，然后在纸巾外面蘸一点白醋，贴在肚脐眼上，这样可以很好地防止晕车。对于那些晕动病反应较轻的人，你可以随身携带一小瓶香膏，在太阳穴轻轻擦拭来预防晕动病。"},
        {tite:"3.透明胶带、藿香正气水和桔皮也有助于缓解运动病症状。",content:"此外，用透明胶带包裹左臂手腕，将藿香正气水滴在创可贴上，贴在肚脐上，甚至生病时闻一下桔皮，都可以起到预防晕动病的作用。"}
      ]},
      {id:3,title:"消除打嗝的最快办法(哪种打嗝是不好的)",img:"https://www.zhuanboke.cn/tupian/E7928438D.jpg",cont:"每个人在生活中都经常打嗝，所以成年人和孩子都会经历这种现象，甚至十月份怀孕期间的胎儿也可能打嗝。什么导致打嗝？是因为某种疾病吗？解决打嗝的几点建议？让我们一起学习。",data:[
        {tite:"1.事实上，呃逆与饮食有很大关系。这可能是因为吃得太多或吃得太快，这会导致胃的负担暂时过大。然后，它被称为膈肌痉挛，医学上称为呃逆。这是胃气逆行上升引起的生理现象，所以慢慢吃不仅有助于消化，还有助于防止打嗝。",content:""},
        {tite:"2.打嗝有几个主要原因。首先，主要原因是身体患有某些疾病：脑瘤、脑膜炎、脑炎、尿毒症、酒精中毒和其他疾病。这些疾病的出现会使抑制打嗝的功能丧失。二是外周性，即呃逆反射弧被刺激，或膈肌周围出现病变。第三是饮食不当，即吃得太快或太多。第四是情绪受挫，这意味着很容易发脾气，导致精神抑郁，生气，导致胃气上升。最后一个是身体缺乏正气，会导致打嗝。",content:""},
        {tite:"3.还有几种预防打嗝的措施。第一个是慢慢吃。你吃得越慢，气体就越难进入你的胃。这可以有效减少打嗝。慢慢吃，至少咀嚼20次。第二是少吃产气食物，如碳酸饮料、酒精饮料、洋葱、芋头、薄荷、红薯、栗子、巧克力等。第三是吃饭时不要说话或少说话，以免大量空气进入口腔并随食物到达胃部。第四是不要吃热的食物，如热茶、咖啡和汤。",content:""}
      ]},
      {id:4,title:"如何消灭蟑螂？(彻底消灭蟑螂的小妙招)",img:"https://www.zhuanboke.cn/wp-content/uploads/2020/08/85.png",cont:"",data:[
        {tite:"1.巧用黄瓜驱赶蟑螂。",content:"将黄瓜切成小块，放在蟑螂出没的地方，蟑螂也会避开它"},
        {tite:"2.用桔皮驱除蟑螂",content:"将剩余的桔皮放在蟑螂经常出没的地方，尤其是散热器、橱柜和厨房的死角，可以有效地清除蟑螂，而且桔皮是否干燥也没关系。"},
        {tite:"3.熟练使用洋葱驱赶蟑螂",content:"在室内放一盘洋葱片，蟑螂闻到后会立即逃跑。同时，它可以延缓其他室内食物的变质。"}
      ]},
      {id:5,title:"蔬菜对人体有什么好处(海牙菜吃了对身体有什么好处)",img:"https://www.zhuanboke.cn/tupian1/new_107.png",cont:"从古至今，蔬菜可能不是人类生存所需食物的绝对主角，但它们永远不会被忽视。每个人都知道吃蔬菜是好的，那么它有什么好的呢？蔬菜有什么营养？不同的人在不同的季节需要不同的饮食方式吗？今天，让我们来学习一下蔬菜的魅力。首先，蔬菜含有大量的维生素。人体所需的大部分维生素A和C来自蔬菜。补充优质维生素可以提高人体免疫力，促进人体新陈代谢，维持血管正常通透性；此外，蔬菜中的油和糖含量极低，有助于人体消化，是一种非常健康的食品。此外，蔬菜中所含的各种营养素被认为能有效预防慢性病。一般来说，食用时令新鲜蔬菜是首选，有各种烹饪方法，如油炸和凉菜，不同的蔬菜含有不同的营养成分。 例如，富含铁和钙的蔬菜包括菠菜、西红柿、芹菜、花椰菜等；土豆和红薯淀粉含量更高；富含蛋白质的蔬菜，如胡萝卜、茄子、南瓜等。总之，在日常生活中，我们必须注意肉和蔬菜的结合，多吃健康绿色的蔬菜，根据自己的口味做一些简单美味的菜肴，从而丰富人体所需的营养。",data:[]
    },
    ],
    imgUrl: app.globalData.imgUrl,
    dataTab:[
      {label:"全部",value:0}
    ],
    TabCur:0,
    scrollLeft:0,
    swiperList: [{
      id: 0,
      type: 'image',
      url: 'https://www.yjhlcity.com:9000/fileService/downloadFTP/private/1dd78dfb78cf48479cdc3680a1bbb063',
      name:'康师傅香菇面',
      price:'2.5'
    }, {
      id: 1,
        type: 'image',
        url: 'https://www.yjhlcity.com:9000/fileService/downloadFTP/private/6b8bc699cd4d4e47b10279323730fd8c',
      name:'笨鸡蛋',
      price:'5.5'
    }, {
      id: 2,
      type: 'image',
      url: 'https://www.yjhlcity.com:9000/fileService/downloadFTP/private/9436263f18384596978b528c75b8352b',
      name:'美汁源果粒橙',
      price:'10'
    }, {
      id: 3,
      type: 'image',
      url: 'https://www.yjhlcity.com:9000/fileService/downloadFTP/private/59c7a182d87748738dfdcbf102170a3e',
      name:'凤爪',
      price:'7',
    }],
    cur:1,
      type:0,
      rows:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabSelect(e) {
      this.setData({
        type:e.currentTarget.dataset.ids,
        TabCur: e.currentTarget.dataset.id,
        scrollLeft: (e.currentTarget.dataset.id-1)*60
      })
      this.listpageshoplisArr()
    },
   // 搜索页面跳转
  Search:function(){
    wx.navigateTo({
      url: '/pages/index/business/Search/Search'
    })
  },
  // 生活跳转详情页面
  life_details:function(e){
    //console.log(e)
    wx.navigateTo({
      url: '/pages/index/user/life_details/life_details?item='+JSON.stringify(e.currentTarget.dataset.item)
    })
  },
  listpageshoplisArr(){

    http.listpageshoplisApi({
      data:{
        type:this.data.type,
        page:this.data.cur,
        villageid:wx.getStorageSync('xzvillage').village.villageId,
        number:0
      },
      success:res=>{
        console.log(res)
        this.setData({
          rows:res.rows
        })
      },
      fail:err=>{
        console.log(err)
      }
    })
  },
  getGoodsCategoryTreeByOneArr(){
    http.getGoodsCategoryTreeByOneApi({
      data:{
        level:0
      },
      success:res=>{
      //  console.log(res)
        var dataTab = this.data.dataTab
        for(var i in res){
          dataTab.push(res[i])

        }
       
        this.setData({
          dataTab:dataTab
        })
      },
      fail:err=>{
        console.log(err)
      }
    })
  }
  },
 
  /*组件生命周期*/ 
  lifetimes: {
    //在组件实例刚刚被创建时执行
    created() {
  
     this.listpageshoplisArr()
      this.getGoodsCategoryTreeByOneArr()
    },
    
    //在组件实例进入页面节点树时执行
    attached() { 
   
    },
    //在组件在视图层布局完成后执行
    ready() {

    },
 
    //在组件实例被移动到节点树另一个位置时执行
    moved() {

    },
    //在组件实例被从页面节点树移除时执行
    detached() {
  
    },
    //每当组件方法抛出错误时执行
    error() {

    },
    /*组件所在页面的生命周期 */
    pageLifetimes: {
      show: function () {
        
        // 页面被展示
        
      },
      hide: function () {
        // 页面被隐藏

      },
      resize: function (size) {
        // 页面尺寸变化
   
      }
    }
   
  }
 
})
