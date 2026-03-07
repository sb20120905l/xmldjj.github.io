Page({
  data: {
    gameTypes: ["全部", "和平精英", "三角洲行动"],
    gameIndex: 0,
    categoryTypes: ["全部", "陪玩", "代练", "装备"],
    categoryIndex: 0,
    packages: [
      // 和平精英-陪玩
      { id: 1, name: "和平精英王牌陪玩1小时", price: 128, desc: "四排带飞，KD≥5", game: "peace", category: "peilian", tag: "爆款" },
      { id: 2, name: "和平精英小姐姐陪玩1小时", price: 158, desc: "语音互动，氛围拉满", game: "peace", category: "peilian", tag: "热销" },
      // 和平精英-代练
      { id: 3, name: "和平精英铂金到星钻", price: 98, desc: "高效代练，包售后", game: "peace", category: "dailian", tag: "特惠" },
      { id: 4, name: "和平精英赛季手册代肝", price: 88, desc: "满级手册，快速完成", game: "peace", category: "dailian", tag: "新品" },
      // 三角洲行动-陪玩
      { id: 5, name: "三角洲行动护航1小时", price: 68, desc: "全程保护，物资全包", game: "delta", category: "peilian", tag: "热销" },
      // 三角洲行动-代练
      { id: 6, name: "三角洲行动代练等级", price: 158, desc: "1-50级，快速升级", game: "delta", category: "dailian", tag: "特惠" },
      // 装备
      { id: 7, name: "和平精英稀有皮肤代抽", price: 298, desc: "出为止，保底保障", game: "peace", category: "zhuangbei", tag: "限量" }
    ]
  },

  onLoad(options) {
    // 接收首页分类参数
    if (options.type) {
      const typeMap = { peilian: "陪玩", dailian: "代练", zhuangbei: "装备" };
      const index = this.data.categoryTypes.findIndex(item => item === typeMap[options.type]);
      if (index > -1) {
        this.setData({ categoryIndex: index }, () => this.filterPackages());
      }
    }
  },

  // 切换游戏
  changeGame(e) {
    this.setData({ gameIndex: e.detail.value }, () => this.filterPackages());
  },

  // 切换分类
  changeCategory(e) {
    this.setData({ categoryIndex: e.detail.value }, () => this.filterPackages());
  },

  // 筛选套餐
  filterPackages() {
    const { gameIndex, categoryIndex, packages } = this.data;
    const gameKey = gameIndex === 1 ? "peace" : (gameIndex === 2 ? "delta" : "");
    const categoryKey = categoryIndex === 1 ? "peilian" : (categoryIndex === 2 ? "dailian" : (categoryIndex === 3 ? "zhuangbei" : ""));

    let filtered = packages;
    if (gameKey) filtered = filtered.filter(item => item.game === gameKey);
    if (categoryKey) filtered = filtered.filter(item => item.category === categoryKey);

    this.setData({ packages: filtered });
  },

  // 加入购物车（模拟）
  addToCart(e) {
    wx.showToast({ title: "加入购物车成功", icon: "success" });
  },

  // 跳转到详情页
  goToDetail(e) {
    const id = e.currentTarget.dataset.id;
    wx.navigateTo({ url: `/pages/detail/detail?id=${id}` });
  }
});