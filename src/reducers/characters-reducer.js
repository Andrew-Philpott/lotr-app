import { characterConstants } from "../constants/character-constants";

export function characters(state = {}, action) {
  switch (action.type) {
    case characterConstants.GETALL_REQUEST:
      return {
        loading: true,
      };
    case characterConstants.GETALL_SUCCESS:
      return {
        items: action.characters,
      };
    case characterConstants.GETALL_FAILURE:
      return {
        error: action.error,
      };
    case characterConstants.GET_REQUEST:
      return {
        loading: true,
      };
    case characterConstants.GET_SUCCESS:
      return {
        item: action.character,
      };
    case characterConstants.GET_FAILURE:
      return {
        error: action.error,
      };
    case characterConstants.CREATE_REQUEST:
      return {
        creating: true,
        character: action.character,
      };
    case characterConstants.CREATE_SUCCESS:
      return {};
    case characterConstants.CREATE_FAILURE:
      return {
        error: action.error,
      };
    case characterConstants.UPDATE_REQUEST:
      return {
        ...state,
        updating: true,
        character: action.character,
      };
    case characterConstants.UPDATE_SUCCESS:
      return {};
    case characterConstants.UPDATE_FAILURE:
      return {
        ...state,
        items: state.items.map((x) =>
          x.id == action.character.id ? action.character : x
        ),
      };
    case characterConstants.DELETE_REQUEST:
      return {
        ...state,
        items: state.items.map((character) =>
          character.id === action.id
            ? { ...character, deleting: true }
            : character
        ),
      };
    case characterConstants.DELETE_SUCCESS:
      return {
        ...state,
        items: state.items.filter((character) => character.id !== action.id),
      };
    case characterConstants.DELETE_FAILURE:
      return {
        ...state,
        items: state.items.map((character) => {
          if (character.id === action.id) {
            const { deleting, ...characterCopy } = character;
            return { ...characterCopy, deleteError: action.error };
          }

          return character;
        }),
      };
    default:
      return state;
  }
}
