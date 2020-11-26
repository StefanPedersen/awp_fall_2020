export const addHobby = (kittenId, hobby) => ({
  type: 'ADD_HOBBY',
  hobby: hobby,
  kittenId: kittenId
});

export const addKitten = (id, name, hobbies) => ({
  type: 'ADD_KITTEN',
  id: id,
  name: name,
  hobbies: hobbies
});

const API_URL = process.env.REACT_APP_API_URL;

export const fetchKittens = _ => async function (dispatch) {
  const url = `${API_URL}/kittens`;
  console.log(`Fetching from ${url}`);
  const result = await fetch(url);
  const data = await result.json();
  for (const kitten of data) {
    dispatch(addKitten(kitten._id, kitten.name, kitten.hobbies));
  }
};

export const postKitten = (name) => async function (dispatch) {
  const response = await fetch(`${API_URL}/kittens`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({ name: name })
  });
  const newKitten = await response.json();
  dispatch(addKitten(newKitten._id, newKitten.name, newKitten.hobbies));
};

export const postHobby = (kittenId, hobby) => async function (dispatch) {
  const response = await fetch(`${API_URL}/kittens/${kittenId}/hobbies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8"
    },
    body: JSON.stringify({ hobby: hobby })
  });
  const kitten = await response.json();
  dispatch(addHobby(kitten._id, hobby));
};