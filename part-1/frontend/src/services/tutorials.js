const { VITE_API_DOMAIN } = import.meta.env;
const BASE_DOMAIN = VITE_API_DOMAIN || "";

const formUrlEncode = (fields) => {
  let formBody = [];
  for (let property in fields) {
    formBody.push(
      encodeURIComponent(property) + "=" + encodeURIComponent(fields[property])
    );
  }
  return formBody.join("&");
};

const getAuthenticationHeader = async () => {
  const token = await (await fetch(`${BASE_DOMAIN}/token`)).json();
  return { "authentication-token": await token };
};

export const createTutorial = async ({ video, ...data }) => {
  const response = await fetch(`${BASE_DOMAIN}/tutorials`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      ...(await getAuthenticationHeader()),
    },
    body: formUrlEncode({ video_url: video, ...data }),
  });
  return response.json();
};

export const updateTutorial = async ({ id, video, ...data }) => {
  const response = await fetch(`${BASE_DOMAIN}/tutorials/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      ...(await getAuthenticationHeader()),
    },
    body: formUrlEncode({ video_url: video, ...data }),
  });
  return response.json();
};

export const removeTutorial = async (id) => {
  const response = await fetch(`${BASE_DOMAIN}/tutorials/${id}`, {
    method: "DELETE",
    headers: await getAuthenticationHeader(),
  });
  return response.json();
};

export const removeAllTutorials = async () => {
  const response = await fetch(`${BASE_DOMAIN}/tutorials`, {
    method: "DELETE",
    headers: await getAuthenticationHeader(),
  });
  return response.json();
};
