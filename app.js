Vue.createApp({
    data () {
        return {
            valueInput: '',
            needDoList: [],
            copmpleteList: []
        };
    },
    methods: {
        handleInput (event) {
            this.valueInput = event.target.value;
        },
        addTask () {
            if (this.valueInput === '') { return };
            this.needDoList.push({
                title: this.valueInput,
                id: Math.random()
            });
            this.valueInput = '';
        },
        doCheck(index, type) {
            if (type === 'need') {
                const copmpleteList = this.needDoList.splice(index, 1);
                this.copmpleteList.push(...copmpleteList);
            } else {
                const noCompleteMask = this.copmpleteList.splice(index, 1);
                this.needDoList.push(...noCompleteMask);
            }
        },
        removeMask(index, type) {
            const toDoTist = type === 'need' ? this.needDoList : this.copmpleteList;
            toDoTist.splice(index, 1);
        },
        removeAllMask(index, type) {
            if (type === 'need') {
                this.needDoList = [];
            } else {
                this.copmpleteList = [];
            }
        }
    }
}).mount('#app');