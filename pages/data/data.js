import * as echarts from '../../ec-canvas/echarts';

// 模拟运营数据
const ALL_DATA = {
  peace: {
    orders: [86, 125, 98, 156, 189, 215],
    revenue: [8560, 12450, 9870, 15680, 18920, 21560],
    peakHour: 20,
    peakOrder: 156,
    userPortrait: "18-25岁男性占78%，夜间消费占65%",
    highPriceProduct: "和平精英王牌陪玩1小时",
    highPrice: 128
  },
  delta: {
    orders: [58, 96, 85, 112, 145, 168],
    revenue: [4064, 6528, 5780, 7616, 9860, 11424],
    peakHour: 21,
    peakOrder: 128,
    userPortrait: "20-30岁男性占85%，周末消费占70%",
    highPriceProduct: "三角洲行动代练等级",
    highPrice: 158
  },
  all: {
    orders: [144, 221, 183, 268, 334, 383],
    revenue: [12624, 18978, 15650, 23296, 28780, 32984],
    peakHour: 20,
    peakOrder: 284,
    userPortrait: "18-30岁男性占82%，夜间消费占68%",
    highPriceProduct: "三角洲行动代练等级",
    highPrice: 158
  }
};

Page({
  data: {
    gameTypes: ["全部", "和平精英", "三角洲行动"],
    gameIndex: 0,
    orderEc: { lazyLoad: true },
    revenueEc: { lazyLoad: true },
    peakHour: 0,
    peakOrder: 0,
    userPortrait: "",
    highPriceProduct: "",
    highPrice: 0
  },

  onLoad() {
    // 初始化图表和数据
    this.initCharts();
    this.loadInsightData("all");
  },

  // 初始化图表
  initCharts() {
    this.initOrderChart();
    this.initRevenueChart();
  },

  // 订单趋势折线图
  initOrderChart() {
    this.selectComponent("#order-chart").init((canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, { width, height, devicePixelRatio: dpr });
      canvas.setChart(chart);

      const option = {
        xAxis: { type: "category", data: ["1月", "2月", "3月", "4月", "5月", "6月"] },
        yAxis: { type: "value" },
        series: [{
          data: ALL_DATA.all.orders,
          type: "line",
          smooth: true,
          itemStyle: { color: "#1677ff" }
        }]
      };

      chart.setOption(option);
      this.orderChart = chart;
      return chart;
    });
  },

  // 营收柱状图
  initRevenueChart() {
    this.selectComponent("#revenue-chart").init((canvas, width, height, dpr) => {
      const chart = echarts.init(canvas, null, { width, height, devicePixelRatio: dpr });
      canvas.setChart(chart);

      const option = {
        xAxis: { type: "category", data: ["1月", "2月", "3月", "4月", "5月", "6月"] },
        yAxis: { type: "value" },
        series: [{
          data: ALL_DATA.all.revenue,
          type: "bar",
          itemStyle: { color: "#00b42a" }
        }]
      };

      chart.setOption(option);
      this.revenueChart = chart;
      return chart;
    });
  },

  // 切换游戏
  changeGame(e) {
    const index = e.detail.value;
    this.setData({ gameIndex: index });

    const gameKey = index === 1 ? "peace" : (index === 2 ? "delta" : "all");
    this.updateChartData(gameKey);
    this.loadInsightData(gameKey);
  },

  // 更新图表数据
  updateChartData(gameKey) {
    this.orderChart.setOption({ series: [{ data: ALL_DATA[gameKey].orders }] });
    this.revenueChart.setOption({ series: [{ data: ALL_DATA[gameKey].revenue }] });
  },

  // 加载运营洞察
  loadInsightData(gameKey) {
    const data = ALL_DATA[gameKey];
    this.setData({
      peakHour: data.peakHour,
      peakOrder: data.peakOrder,
      userPortrait: data.userPortrait,
      highPriceProduct: data.highPriceProduct,
      highPrice: data.highPrice
    });
  }
});