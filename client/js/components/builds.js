const Spinner = require('vue-spinner-component/src/Spinner.vue')

const { getBuilds } = require('../api')

const template = `<div class="content">
    <h3>Builds</h3>
    <p>
      <spinner v-bind:status="!loaded" :color="'#00D1B2'"></spinner>
      <table class="table is-striped">
      <thead>
        <tr>
          <th></th>
          <th>Name</th>
          <th>Last Run</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(b, i) in builds">
          <th>{{ i }}</th>
          <td>{{ b.name }}</td>
          <td>{{ b.lastRun }}</td>
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
      builds: []
    }
  },
  mounted () {
    getBuilds()
      .then(s => {
        this.loaded = true
        this.builds = s
      })
  },
  components: {
    spinner: Spinner.default
  }
}

module.exports = Summary
