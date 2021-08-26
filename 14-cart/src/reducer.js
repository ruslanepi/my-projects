const reducer = (state, action) => {
  if (action.type === 'CLEAR_CART') {
    return { ...state, cart: [] }
  }

  if (action.type === 'REMOVE_ITEM') {
    const findItem = action.payload

    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== findItem),
    }
  }
  return state
}

export default reducer
