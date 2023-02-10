export const actions = (state,actions) => {
    switch (actions.type) {
        case 'SET_DATA':
            return { ...state, data: actions.data, initialData: actions.data}
            
        case 'FILTER_DATA':
            const data =  state.data.filter((element) => {
                return element.title.toLowerCase().includes(actions.query)
            })
            return {...state, data : actions.query ? data:state.initialData}
        default:
            break;
    }
}