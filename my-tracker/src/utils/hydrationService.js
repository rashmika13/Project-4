const BASE_URL = "/api/hydrations";

export function getAll() {
  return fetch(BASE_URL).then((res) => res.json());
}

export function create(hydration) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(hydration),
  }).then((res) => res.json());
}

export function update(hydration) {
  return fetch(`${BASE_URL}/${hydration._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(hydration),
  }).then((res) => res.json());
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  }).then((res) => res.json());
}
