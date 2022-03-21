export const TUTORIALS_PATH = "/tutoriales";
export const TUTORIALS_CREATE_PATH = "/crear";
export const TUTORIALS_EDIT_PATH = "/edit";

export const TUTORIALS_CREATE_FULL_PATH =
  TUTORIALS_PATH + TUTORIALS_CREATE_PATH;

export const GET_TUTORIALS_EDIT_FULL_PATH = (id) =>
  `${TUTORIALS_PATH}/${id}${TUTORIALS_EDIT_PATH}`;
