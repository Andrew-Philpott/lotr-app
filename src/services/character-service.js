import config from "config";
import { handleResponse } from "../helpers/handle-response";

export const characterService = {
  getCharacter,
  getCharacters,
  createCharacter,
  updateCharacter,
  deleteCharacter,
};

function getCharacter(id) {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${config.apiUrl}/api/characters/${id}`, requestOptions).then(
    handleResponse
  );
}

function getCharacters() {
  const requestOptions = {
    method: "GET",
  };

  return fetch(`${config.apiUrl}/api/characters`, requestOptions).then(
    handleResponse
  );
}

function createCharacter(character) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(character),
  };

  return fetch(`${config.apiUrl}/api/characters`, requestOptions).then(
    handleResponse
  );
}

function updateCharacter(id, character) {
  console.log("In update character service");
  const requestOptions = {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(character),
  };

  return fetch(`${config.apiUrl}/api/characters/${id}`, requestOptions).then(
    handleResponse
  );
}

function deleteCharacter(id) {
  const requestOptions = {
    method: "DELETE",
  };

  return fetch(`${config.apiUrl}/api/characters/${id}`, requestOptions).then(
    handleResponse
  );
}
