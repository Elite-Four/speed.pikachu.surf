void function () {
  const SpeedmonCalculator = Vue.extend({
    template: '#calculator',
    data () {
      return {
        level: 50,
        base: 100,
        individual: 31,
        effort: 252,
        nature: 1,
        boost: 0
      }
    },
    computed: {
      speed () {
        let stat = this.base * 2 + this.individual + Math.floor(this.effort / 4)
        stat = Math.floor(stat * this.level / 100) + 5
        stat = Math.floor(stat * (1 + this.nature * 0.1))
        if (this.boost > 0) {
          stat = Math.floor(stat * (this.boost + 2) / 2)
        } else if (this.boost < 0) {
          stat = Math.floor(stat * 2 / (this.boost + 2))
        }
        return stat
      }
    }
  })
  new Vue({
    el: 'main',
    data: {
      calculatorsCount: 2
    },
    components: { SpeedmonCalculator }
  })
} ()
