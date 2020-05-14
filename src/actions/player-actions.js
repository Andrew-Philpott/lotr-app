export const NEW_BEER = "NEW_BEER";
export const DELETE_BEER = "DELETE_BEER";
export const UPDATE_BEER = "UPDATE_BEER";
export const INCREASE_BEER_PINT_QUANTITY = "INCREASE_BEER_PINT_QUANTITY";
export const DECREASE_BEER_PINT_QUANTITY = "DECREASE_BEER_PINT_QUANTITY";
export const TOGGLE_EDIT_BEER_FORM_VISIBILITY =
  "TOGGLE_EDIT_BEER_FORM_VISIBILITY";
export const TOGGLE_NEW_BEER_FORM_VISIBILITY =
  "TOGGLE_NEW_BEER_FORM_VISIBILITY";
export const SELECT_BEER = "SELECT_BEER";
export const DESELECT_BEER = "DESELECT_BEER";

export const COMBINED_ROLL = "COMBINED_ROLL";
export const ATTACK = "ATTACK";
export const MAGIC_ROLL = "MAGIC_ROLL";
export const CHANGE_PLAYER = "CHANGE_PLAYER";
export const NEW_GAME = "NEW_GAME";
export const SET_PLAYER1 = "SET_PLAYER1";
export const SET_PLAYER2 = "SET_PLAYER2";
export const GET_PLAYERS = "GET_PLAYERS";

//

export default (state = {}, action) => {
  let player1 = {};
  let player2 = {};
  let beer = null;
  switch (action.type) {
    case a.SET_PLAYER1:
      player1 = { ...state.player1 };

    case a.NEW_BEER:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case a.DELETE_BEER:
      newState = { ...state };
      delete newState[action.payload];
      return newState;
    case a.UPDATE_BEER:
      newState = { ...state };
      newState[action.payload.id] = action.payload;
      return newState;
    case a.INCREASE_BEER_PINT_QUANTITY:
      newState = { ...state };
      beer = newState[action.payload];
      beer["pints"] += 1;
      newState[action.payload] = beer;
      return newState;
    case a.DECREASE_BEER_PINT_QUANTITY:
      newState = { ...state };
      beer = newState[action.payload];
      beer["pints"] -= 1;
      return newState;
    default:
      return state;
  }
};
