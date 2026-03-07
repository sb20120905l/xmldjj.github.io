Page({
  data: {
    status: "all",
    orders: []
  },

  onShow() {
    // 每次打开页面刷新订单
    this.loadOrders();
  },

  // 加载本地订单
  loadOrders() {
    const storage = wx.getStorageInfoSync();
    // 筛选以ORD开头的订单ID
    const orderKeys = storage.keys.filter(key => key.startsWith("ORD"));
    let orders = [];

    orderKeys.forEach(key => {
      const order = wx.getStorageSync(key);
      // 状态文字/样式映射
      const statusMap = {
        pending: { text: "待付款", class: "pending" },
        accept: { text: "待接单", class: "accept" },
        doing: { text: "进行中", class: "doing" },
        done: { text: "已完成", class: "done" },
        cancel: { text: "已取消", class: "cancel" }
      };
      orders.push({
        ...order,
        statusText: statusMap[order.status]?.text || "未知",
        statusClass: statusMap[order.status]?.class || ""
      });
    });

    // 筛选订单
    if (this.data.status !== "all") {
      orders = orders.filter(item => item.status === this.data.status);
    }

    this.setData({ orders });
  },

  // 切换订单状态
  changeStatus(e) {
    this.setData({ status: e.currentTarget.dataset.status }, () => this.loadOrders());
  },

  // 取消订单
  cancelOrder(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: "确认取消",
      content: "是否取消该订单？",
      success: (res) => {
        if (res.confirm) {
          const order = wx.getStorageSync(id);
          order.status = "cancel";
          wx.setStorageSync(id, order);
          this.loadOrders();
          wx.showToast({ title: "订单已取消", icon: "success" });
        }
      }
    });
  },

  // 模拟付款
  payOrder(e) {
    const id = e.currentTarget.dataset.id;
    wx.showModal({
      title: "模拟付款",
      content: "付款成功（仅测试，无真实扣款）",
      success: (res) => {
        if (res.confirm) {
          const order = wx.getStorageSync(id);
          order.status = "accept"; // 付款后变为待接单
          wx.setStorageSync(id, order);
          this.loadOrders();
          wx.showToast({ title: "付款成功", icon: "success" });
        }
      }
    });
  },

  // 跳转到订单详情
  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/orderDetail/orderDetail?id=${id}` });
  }
});