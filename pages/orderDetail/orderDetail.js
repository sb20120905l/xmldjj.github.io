Page({
  data: {
    order: {}
  },

  onLoad(options) {
    // 读取订单
    const order = wx.getStorageSync(options.id);
    if (!order) {
      wx.showToast({ title: "订单不存在", icon: "none" });
      wx.navigateBack();
      return;
    }

    // 状态映射
    const statusMap = {
      pending: { text: "待付款", class: "pending" },
      accept: { text: "待接单", class: "accept" },
      doing: { text: "进行中", class: "doing" },
      done: { text: "已完成", class: "done" },
      cancel: { text: "已取消", class: "cancel" }
    };

    this.setData({
      order: {
        ...order,
        statusText: statusMap[order.status]?.text || "未知",
        statusClass: statusMap[order.status]?.class || ""
      }
    });
  },

  // 取消订单
  cancelOrder() {
    const { id } = this.data.order;
    wx.showModal({
      title: "确认取消",
      content: "是否取消该订单？",
      success: (res) => {
        if (res.confirm) {
          const order = wx.getStorageSync(id);
          order.status = "cancel";
          wx.setStorageSync(id, order);
          this.setData({
            order: { ...this.data.order, status: "cancel", statusText: "已取消", statusClass: "cancel" }
          });
          wx.showToast({ title: "订单已取消", icon: "success" });
        }
      }
    });
  },

  // 模拟付款
  payOrder() {
    const { id } = this.data.order;
    wx.showModal({
      title: "模拟付款",
      content: "付款成功（仅测试，无真实扣款）",
      success: (res) => {
        if (res.confirm) {
          const order = wx.getStorageSync(id);
          order.status = "accept";
          wx.setStorageSync(id, order);
          this.setData({
            order: { ...this.data.order, status: "accept", statusText: "待接单", statusClass: "accept" }
          });
          wx.showToast({ title: "付款成功", icon: "success" });
        }
      }
    });
  },

  // 联系客服
  contactService() {
    wx.showModal({
      title: "客服信息",
      content: "微信：12345678901\n电话：400-123-4567",
      showCancel: false
    });
  }
});