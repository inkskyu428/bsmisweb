// 给action注册事件处理函数。当这个函数被触发时候，将状态提交到mutations中处理
// ES6精简写法
export const setOperation = ({commit}, val) => commit('setOperation', val)
