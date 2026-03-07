Page({
  data: {
    package: {},
    selectedSpecId: 0,
    selectedPrice: 0,
    account: "",
    remark: ""
  },

  onLoad(options) {
    // 套餐数据（按ID匹配）
    const packageData = {
      1: {
        id: 1,
        name: "和平精英王牌陪玩1小时",
        price: 128,
        desc: "四排带飞，KD≥5，全程语音指挥",
        tag: "爆款",
        specs: [
          { id: 101, name: "1小时", price: 128 },
          { id: 102, name: "2小时（送1小时）", price: 256 },
          { id: 103, name: "5小时（送3小时）", price: 640 }
        ]
      },
      5: {
        id: 5,
        name: "三角洲行动护航1小时",
        price: 68,
        desc: "全程保护，物资全包，安全撤离",
        tag: "热销",
        specs: [
          { id: 501, name: "1小时", price: 68 },
          { id: 502, name: "3小时", price: 198 },
          { id: 503, name: "全天8小时", price: 498 }
        ]
      },
      3: {
        id: 3,
        name: "和平精英铂金到星钻",
        price: 98,
        desc: "高效代练，包售后，不掉段",
        tag: "特惠",
        specs: [
          { id: 301, name: "铂金IV→星钻V", price: 98 },
          { id: 302, name: "铂金III→星钻V", price: 128 },
          { id: 303, name: "铂金II→星钻V", price: 158 }
        ]
      }
    };

    // 默认显示ID=1的套餐
    const pkg = packageData[options.id] || packageData[1];
    this.setData({
      package: pkg,
      selectedSpecId: pkg.specs[0].id,
      selectedPrice: pkg.specs[0].price
    });
  },

  // 选择规格
  selectSpec(e) {
    this.setData({
      selectedSpecId: e.currentTarget.dataset.id,
      selectedPrice: e.currentTarget.dataset.price
    });
  },

  // 输入账号
  inputAccount(e) {
    this.setData({ account: e.detail.value });
  },

  // 输入备注
  inputRemark(e) {
    this.setData({ remark: e.detail.value });
  },

  // 加入购物车
  addToCart() {
    if (!this.data.account) {
      wx.showToast({ title: "请输入游戏账号", icon: "none" });
      return;
    }
    wx.showToast({ title: "加入购物车成功", icon: "success" });
  },

  // 立即购买（创建订单）
  buyNow() {
    if (!this.data.account) {
      wx.showToast({ title: "请输入游戏账号", icon: "none" });
      return;
    }

    // 生成订单ID，存储到本地
    const orderId = "ORD" + Date.now();
    const order = {
      id: orderId,
      name: this.data.package.name,
      spec: this.data.package.specs.find(item => item.id === this.data.selectedSpecId).name,
      price: this.data.selectedPrice,
      account: this.data.account,
      remark: this.data.remark,
      status: "pending", // 待付款
      createTime: new Date().toLocaleString()
    };
    wx.setStorageSync(orderId, order);

    // 跳转到订单详情
    wx.navigateTo({ url: `/pages/orderDetail/orderDetail?id=${orderId}` });
  }
});