export const useTestStore = defineStore('test', {
    state: () => ({
        count: 0
    }),
    actions: {
        add() {
            this.count++;
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2,
    }
})