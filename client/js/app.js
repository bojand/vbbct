const Vue = require('vue/dist/vue')

const Summary = require('./components/summary')
const Histogram = require('./components/histogram')
const Change = require('./components/change')

const template = `
<div>
  <section class="section">
    <div class="container">
      <div class="columns">
        <div class="column is-narrow">
          <component-summary></component-summary>
        </div>
      </div>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <component-histogram></component-histogram>
    </div>
  </section>
  <section class="section">
    <div class="container">
      <component-change></component-change>
    </div>
  </section>
</div>
`

const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  },
  template,
  components: {
    'component-summary': Summary,
    'component-histogram': Histogram,
    'component-change': Change
  }
})
