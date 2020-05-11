import { characterConstants } from "../constants/character-constants";
import { characterService } from "../services/character-service";
import { alertActions } from "./alert-actions";
import { history } from "../helpers/history";

export const characterActions = {
  getCharacter,
  getCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};

function getCharacter(id) {
  return (dispatch) => {
    dispatch(request(id));

    characterService.getCharacter(id).then(
      (character) => dispatch(success(character)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: characterConstants.GET_REQUEST, id };
  }
  function success(character) {
    return { type: characterConstants.GET_SUCCESS, character };
  }
  function failure(id, error) {
    return { type: characterConstants.GET_FAILURE, id, error };
  }
}

function getCharacters() {
  return (dispatch) => {
    dispatch(request());

    characterService.getCharacters().then(
      (characters) => dispatch(success(characters)),
      (error) => dispatch(failure(error.toString()))
    );
  };

  function request() {
    return { type: characterConstants.GETALL_REQUEST };
  }
  function success(characters) {
    return { type: characterConstants.GETALL_SUCCESS, characters };
  }
  function failure(error) {
    return { type: characterConstants.GETALL_FAILURE, error };
  }
}

function createCharacter(character) {
  return (dispatch) => {
    dispatch(request(character));

    characterService.createCharacter(character).then(
      (character) => {
        dispatch(success());
        history.push("/");
        dispatch(alertActions.success("character created"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(character) {
    return { type: characterConstants.CREATE_REQUEST, character };
  }
  function success() {
    return { type: characterConstants.CREATE_SUCCESS };
  }
  function failure(error) {
    return { type: characterConstants.CREATE_FAILURE, error };
  }
}

function updateCharacter(id, character) {
  return (dispatch) => {
    dispatch(request(id, character));
    characterService.updateCharacter(id, character).then(
      (character) => {
        dispatch(success(character));
        history.push("/");
        dispatch(alertActions.success("character updated"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(character) {
    return { type: characterConstants.UPDATE_REQUEST, character };
  }
  function success() {
    return { type: characterConstants.UPDATE_SUCCESS };
  }
  function failure(error) {
    return { type: characterConstants.UPDATE_FAILURE, error };
  }
}

function deleteCharacter(id) {
  return (dispatch) => {
    dispatch(request(id));

    characterService.deleteCharacter(id).then(
      (id) => dispatch(success(id)),
      (error) => dispatch(failure(id, error.toString()))
    );
  };

  function request(id) {
    return { type: characterConstants.DELETE_REQUEST, id };
  }
  function success(id) {
    return { type: characterConstants.DELETE_SUCCESS, id };
  }
  function failure(id, error) {
    return { type: characterConstants.DELETE_FAILURE, id, error };
  }
}
