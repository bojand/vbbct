const britecharts = require('britecharts')
const d3 = require('d3-selection')

const { getHistogram } = require('../api')

const template = `
<div class="content">
  <h3>Historam</h3>
  <p>
    <div class="js-bar-container"></div>
  </p>
</div>
`

const Histogram = {
  template,
  mounted () {
    createHorizontalBarChart()
    getHistogram().then(v => {
      data = v
      createHorizontalBarChart()
    })
  }
}

module.exports = Histogram

let data = null

function createHorizontalBarChart () {
  let barChart = britecharts.bar()
  let tooltip = britecharts.miniTooltip()
  let barContainer = d3.select('.js-bar-container')
  let containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false
  let tooltipContainer
  let dataset

  if (containerWidth) {
    barContainer.html('')
    if (!data) {
      barContainer.html(barChart.loadingState())
      return
    }

    dataset = data

    barChart
      .isHorizontal(true)
      .isAnimated(true)
      .margin({
        left: 80,
        right: 20,
        top: 20,
        bottom: 20
      })
      .colorSchema(britecharts.colors.colorSchemas.teal)
      //   .width(containerWidth)
      .height(400)
      .hasPercentage(true)
      .enableLabels(true)
      .labelsNumberFormat('.0%')
      .percentageAxisToMaxRatio(1.3)
      .on('customMouseOver', tooltip.show)
      .on('customMouseMove', tooltip.update)
      .on('customMouseOut', tooltip.hide)

    barContainer.datum(dataset).call(barChart)

    tooltipContainer = d3.select('.js-bar-container .bar-chart .metadata-group')
    tooltipContainer.datum([]).call(tooltip)
  }
}
