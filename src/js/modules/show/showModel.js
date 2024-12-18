export default class showModel {
    smi = {
        count_init: 3,
        coun_total: 0,
        counter: 0
    }

    setTotalSmi(value) {
        this.smi.coun_total = Number(value)
    }

    updateCounterSmi() {
        this.smi.counter += this.smi.count_init
    }
}