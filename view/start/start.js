
const app = getApp()

Page({
  /* 页面的初始数据*/
  data: {
    imgUrls: [
      "../../assets/start/start1.jpg", 
      "../../assets/start/start2.jpg",
      "../../assets/start/start3.jpg"
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 2000,
    duration: 1000
  },
  /* 生命周期函数--监听页面加载 */
  onLoad () {
    this.onloadStart();
  },
  onloadStart(){
    setTimeout(this.goIndex,6000)
  },
  goIndex () {
    wx.switchTab({
      url: '../index/index',
    })
  }

})