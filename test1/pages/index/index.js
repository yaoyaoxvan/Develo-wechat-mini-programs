Page({

  /**
   * 页面的初始数据
   */
 data: {
    src:'/images/logo.png',
    name:'Hello World',
    gender:"1",
    city:'lanzhou',
    province:'gansu'
  },
  getMyInfo:function(e){
    let that=this
    wx.getUserProfile({
      desc:'正在获取',
      success:function(res){
        var userInfo=res.userInfo
        console.log(userInfo)
        var nickName=userInfo.nickName
        var avatarUrl=userInfo.avatarUrl
        that.setData({
          src:userInfo.avatarUrl,
          name:userInfo.nickName,
        })
      }
    })
  } ,
  getProfile:function(e){

    wx.getUserProfile({
      desc:'展示用户信息',
      success:(res)=>{
        console.log(res)
         this.setData({
          src:res.userInfo.avatarUrl,
          name:res.userInfo.nickName,
          city:res.userInfo.city,
          province:res.userInfo.province
        })
      }

    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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
    
  },

})