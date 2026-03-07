Page({
  // 跳转到订单列表
  goToOrderList() {
    wx.navigateTo({ url: "/pages/orderList/orderList" });
  },

  // 联系客服
  contactService() {
    wx.showModal({
      title: "客服信息",
      content: "微信：12345678901\n电话：400-123-4567",
      showCancel: false
    });
  },

  // 跳转到数据中心
  goToData() {
    wx.navigateTo({ url: "/pages/data/data" });
  }
});