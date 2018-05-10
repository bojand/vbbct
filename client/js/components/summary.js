const Spinner = require('vue-spinner-component/src/Spinner.vue')

const { getSummary } = require('../api')

const template = `<div class="content">
    <h3>Summary</h3>
    <p>
      <spinner v-bind:status="!loaded" :color="'#00D1B2'"></spinner>
      <table class="table">
        <tbody>
        <tr v-for="(val, key) in summary">
            <th>{{ key }}</th>
            <td>{{ val }}</td>
        </tr>
        </tbody>
      </table>
    </p>
</div>`

const Summary = {
  template,
  data () {
    return {
      loaded: false,
      summary: {}
    }
  },
  mounted () {
    getSummary()
      .then(s => {
        this.loaded = true
        this.summary = s
      })
  },
  components: {
    spinner: Spinner.default
  }
}

module.exports = Summary
