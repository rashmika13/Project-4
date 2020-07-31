import tokenService from "./tokenService";
const BASE_URL = "/api/activities/";

export default {
  index,
  create,
  update,
  delete: deleteOne,
};

function index() {
  return fetch(BASE_URL).then((res) => res.json());
}

function create(activity) {
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(activity),
  };
  if (tokenService.getToken()) {
    options.headers.Authorization = "Bearer " + tokenService.getToken();
  }
  return fetch(BASE_URL, options).then((res) => res.json());
}

function update(activity) {
  return fetch(`${BASE_URL}/${activity._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(activity),
  }).then((res) => res.json());
}

function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
