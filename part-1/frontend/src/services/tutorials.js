const { VITE_API_DOMAIN } = import.meta.env;

const formUrlEncode = (fields) => {
  let formBody = [];
  for (let property in fields) {
    formBody.push(
      encodeURIComponent(property) + "=" + encodeURIComponent(fields[property])
    );
  }
  return formBody.join("&");
};

export const updateTutorial = async ({ id, video, ...data }) => {
  const response = await fetch(`${VITE_API_DOMAIN}/tutorials/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: formUrlEncode({ video_url: video, ...data }),
  });
  return response.json();
};

export const createTutorial = async ({ video, ...data }) => {
  const response = await fetch(`${VITE_API_DOMAIN}/tutorials`, {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    body: formUrlEncode({ video_url: video, ...data }),
  });
  return response.json();
};
