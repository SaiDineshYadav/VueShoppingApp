Vue.component('plan-component', {
    template: '#plan-template',
    props: {
        name: {type: String},
        selectedPlan: {
            type: String
        }
    },
    data() {
        return {
            selected: false
        }
    },
    computed: {
        isSelected() {
            return this.name == this.selectedPlan;
        }
    },
    methods: {
        select() {
            this.$emit('select', this.name)
        }
    }
});

Vue.component('plan-picker-component', {
    template: '#plan-picker-template',
    data() {
        return {
            plans: ['Plan 1', 'Plan 2', 'Plan 3', 'Plan 4'],
            selectedPlan: null
        }
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan;
        }
    }
});
