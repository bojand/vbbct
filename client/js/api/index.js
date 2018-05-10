function getSummary () {
  let summary = {
    Count: 2000,
    Total: 345.52,
    Slowest: 15.41,
    Fastest: 0.66,
    Average: 6.83,
    'Requests / sec': 5788.35
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(summary)
    }, 200)
  })
}

function getHistogram () {
  const data = [
    { name: '0.664 ms', value: 0.0005 },
    { name: '2.138 ms', value: 0.013 },
    { name: '3.613 ms', value: 0.007 },
    { name: '5.087 ms', value: 0.0325 },
    { name: '6.561 ms', value: 0.6525 },
    { name: '8.035 ms', value: 0.137 },
    { name: '9.509 ms', value: 0.033 },
    { name: '10.983 ms', value: 0.00 },
    { name: '12.458 ms', value: 0.0295 },
    { name: '13.932 ms', value: 0.065 },
    { name: '15.406 ms', value: 0.025 }
  ]
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 500)
  })
}

function getChangeOverTime () {
  const data = {
    dataByTopic: [{
      topicName: 'Average',
      topic: 1,
      dates: [{
        date: '2018-01-01T16:00:00-08:00',
        value: 6.83
      },
      {
        date: '2018-01-02T16:00:00-08:00',
        value: 5.83
      },
      {
        date: '2018-01-03T16:00:00-08:00',
        value: 4.83
      },
      {
        date: '2018-01-04T16:00:00-08:00',
        value: 5.25
      },
      {
        date: '2018-01-05T16:00:00-08:00',
        value: 7.25
      },
      {
        date: '2018-01-06T16:00:00-08:00',
        value: 6.25
      },
      {
        date: '2018-01-07T16:00:00-08:00',
        value: 5.25
      },
      {
        date: '2018-01-08T16:00:00-08:00',
        value: 6.25
      },
      {
        date: '2018-01-09T16:00:00-08:00',
        value: 7.65
      }
      ]
    }, {
      topicName: '95th',
      topic: 2,
      dates: [{
        date: '2018-01-01T16:00:00-08:00',
        value: 13.26
      },
      {
        date: '2018-01-02T16:00:00-08:00',
        value: 12.86
      },
      {
        date: '2018-01-03T16:00:00-08:00',
        value: 12.26
      },
      {
        date: '2018-01-04T16:00:00-08:00',
        value: 11.95
      },
      {
        date: '2018-01-05T16:00:00-08:00',
        value: 10.25
      },
      {
        date: '2018-01-06T16:00:00-08:00',
        value: 11.25
      },
      {
        date: '2018-01-07T16:00:00-08:00',
        value: 13.45
      },
      {
        date: '2018-01-08T16:00:00-08:00',
        value: 12.34
      },
      {
        date: '2018-01-09T16:00:00-08:00',
        value: 15.67
      }
      ]
    }]
  }
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, 345)
  })
}

module.exports = {
  getSummary,
  getHistogram,
  getChangeOverTime
}
