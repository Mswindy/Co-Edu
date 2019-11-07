//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../../images/slide1.png',
      '../../images/slide2.png',
      '../../images/slide3.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,

    itemlist: [
      {
        title: '课程名称1',
        userlogo: '../../images/userlogo.png',
        desc: '课程1的描述，老师挺厉害的！',
        prices: "20",
        star: '../../images/star.png',
      },
      {
        title: '课程名称2',
        userlogo: '../../images/userlogo.png',
        desc: '课程2的描述，老师挺好好的！',
        prices: "22",
      },
      {
        title: '课程名称3',
        userlogo: '../../images/userlogo.png',
        desc: '课程3的描述，老师挺shui的……！',
        prices: "0.01",
        star: '../../images/star.png',
      },
      {
        title: '课程名称4',
        userlogo: '../../images/userlogo.png',
        desc: '课程2的描述，老师挺好好的！',
        prices: "29",
      },
      {
        title: '课程名称5',
        userlogo: '../../images/userlogo.png',
        desc: '课程2的描述，老师挺好好的！',
        prices: "856",
      },
      {
        title: '课程名称6',
        userlogo: '../../images/userlogo.png',
        desc: '课程2的描述，老师挺好好的！',
        prices: "93",
      },
      {
        title: '课程名称7',
        userlogo: '../../images/userlogo.png',
        desc: '课程2的描述，老师挺好好的！',
        prices: "32",
      },
      {
        title: '课程名称8',
        userlogo: '../../images/userlogo.png',
        desc: '课程2的描述，老师挺好好的！',
        prices: "74",
      },
      {
        title: '课程名称9',
        userlogo: '../../images/IMG_20150206_180621.jpg',
        desc: '课程2的描述，老师挺好好的！',
        prices: "2221",
      },
      {
        title: '课程名称10',
        userlogo: '../../images/userlogo.png',
        desc: '课程2的描述，老师挺好好的！',
        prices: "55",
      },
      {
        title: '课程名称11',
        userlogo: '../../images/userlogo.png',
        desc: '课程2的描述，老师挺好好的！',
        prices: "26",
      },
    ],

    Onload: function(){
      this.setdata({
        test: "01",
      })
    },

    ToDetails:function(e){
      console.log(e);
      var index = e.currentTarget.dataset.index;
      console.log(index);
    }


  },
  


})
