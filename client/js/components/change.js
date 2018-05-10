const britecharts = require('britecharts')
const d3 = require('d3-selection')

const { getChangeOverTime } = require('../api')

const template = `
<div class="content">
  <h3>Change over time</h3>
  <p>
    <div class="js-line-container card--chart"></div>
  </p>
</div>
`

const Change = {
  template,
  mounted () {
    createLineChart()
    getChangeOverTime().then(v => {
      data = v
      createLineChart()
    })
  }
}

module.exports = Change

let data = null

function createLineChart () {
  let lineChart = britecharts.line()
  let tooltip = britecharts.tooltip()
  let container = d3.select('.js-line-container')
  let containerWidth = container.node() ? container.node().getBoundingClientRect().width : false
  let tooltipContainer
  let dataset

  if (containerWidth) {
    container.html('')
    if (!data) {
      container.html(lineChart.loadingState())
      return
    }

    dataset = data

    lineChart
      .isAnimated(true)
      .aspectRatio(0.5)
      .grid('horizontal')
      .tooltipThreshold(600)
      .width(containerWidth)
      .margin({
        top: 60,
        bottom: 50,
        left: 50,
        right: 30
      })
      // .colorSchema(britecharts.colors.colorSchemas.green)
      .dateLabel('date')
      .on('customMouseOver', tooltip.show)
      .on('customMouseMove', tooltip.update)
      .on('customMouseOut', tooltip.hide)

    container.datum(dataset).call(lineChart)

    tooltip
      // In order to change the date range on the tooltip title, uncomment this line
      // .dateFormat(chartTooltip.axisTimeCombinations.DAY)
      .title('Data')
      .valueFormatter(value => value + ' ms')
      .topicsOrder(dataset.dataByTopic.map(function (topic) {
        return topic.topic
      }))

    tooltipContainer = d3.select('.js-line-container .metadata-group .hover-marker')
    tooltipContainer.datum([]).call(tooltip)
  }
}
