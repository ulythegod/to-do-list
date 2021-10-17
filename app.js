Vue.createApp({
    data () {
        return {
            valueInput: '',
            needDoList: [],
            copmpleteList: [],
            visible: true,
            visibleCorrect: false,
            changedItemId: null
        };
    },
    methods: {
        handleInput (event) {
            this.valueInput = event.target.value;
        },
        addTask () {
            if (this.valueInput === '') { 
                return 
            };
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
        },
        correctTask(index) {
            this.valueInput = this.needDoList[index].title;
            this.visible = false;
            this.visibleCorrect = true;
            this.changedItemId = index;
        },
        correctTaskClick() {
            if (this.valueInput === '' && this.changedItemId === null) {
                 return 
            };
            this.needDoList[this.changedItemId].title = this.valueInput;
            this.valueInput = '';
            this.changedItemId = null;
        }
    }
}).mount('#app');