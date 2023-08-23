Page({

  /**
   * 页面的初始数据
   */
  data: {
    region:['甘肃省','兰州市','城关区'],
    now:''
  },
  changeRegion:function(e){
    this.setData({
      region:e.detail.value
    })
    this.getWeater();
  },
  getWeater: function(){
    var that=this;
    wx.request({
      url: 'https://geoapi.qweather.com/v2/city/lookup',
      data:{
        location:that.data.region[1],
        key:'92f38c639e114a34ab9056d712b0025a'
      },
      success:function(res){
        console.log(res.data)
        that.setData({
          Place_ID:res.data.location[0].id
        })
        wx.request({
          url:'https://devapi.qweather.com/v7/weather/now?',
          data:{
            location:that.data.Place_ID,
            key:'92f38c639e114a34ab9056d712b0025a'
          },
          success:function(res){
            console.log(res.data.now)
            that.setData({
              now:res.data.now
            })
          }
        })
      }
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getWeater();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})