import {
  getSuperAdminPending,
  getSuperAdminSuccess,
  getSuperAdminError,
  deleteSuperAdminPending,
  deleteSuperAdminSuccess,
  deleteSuperAdminError,
  postSuperAdminPending,
  postSuperAdminSuccess,
  postSuperAdminError,
  putSuperAdminPending,
  putSuperAdminSuccess,
  putSuperAdminError
} from './actions';

export const getSuperAdmins = async (dispatch) => {
  try {
    dispatch(getSuperAdminPending());
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/super-admin`);
    const data = await response.json();
    dispatch(getSuperAdminSuccess(data.data));
  } catch (error) {
    dispatch(getSuperAdminError(error));
  }
};

export const addSuperAdmin = async (dispatch, supAdminData) => {
  try {
    dispatch(postSuperAdminPending());
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/super-admin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(supAdminData)
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    dispatch(postSuperAdminSuccess(data.result));
  } catch (error) {
    dispatch(postSuperAdminError(error.message));
  }
};

export const updateSuperAdmin = async (dispatch, supAdminData, id) => {
  try {
    dispatch(putSuperAdminPending());
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/super-admin/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(supAdminData)
    });
    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message);
    }
    dispatch(putSuperAdminSuccess(data));
  } catch (error) {
    dispatch(putSuperAdminError(error.message));
  }
};

export const superAdminDelete = (superAdminID) => {
  return async (dispatch) => {
    try {
      dispatch(deleteSuperAdminPending(true));
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/super-admin/${superAdminID}`,
        {
          method: 'DELETE'
        }
      );
      if (response.ok) {
        dispatch(deleteSuperAdminPending(false));
        dispatch(deleteSuperAdminSuccess(superAdminID));
      }
    } catch (error) {
      dispatch(deleteSuperAdminError(error));
    }
  };
};
