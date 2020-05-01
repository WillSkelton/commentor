/**
 * Axios Request Wrapper
 * ---------------------
 *
 * @author  Sheharyar Naseer (@sheharyarn)
 * @license MIT
 * From https://gist.github.com/sheharyarn/7f43ef98c5363a34652e60259370d2cb
 */

import axios from "axios";

const baseUrl = "http://localhost:42201";

export const request = (options) => {
  const onSuccess = (response) => {
    console.debug("Request Successful");

    if (response.data) {
      return response.data;
    }
  };

  const onError = (err) => {
    console.error(err);
    if (err.response) {
      console.error("Status:", err.response.status);
      console.error("Data:", err.response.data);
      console.error("Headers:", err.response.headers);
    } else {
      console.error("Error Message:", err.message);
    }
    return Promise.reject(err.response || err.message);
  };

  return axios
    .create({
      baseURL: baseUrl,
    })(options)
    .then(onSuccess)
    .catch(onError);
};

export const getFiles = (endpoint, directory) => {
  return request({
    url: `/${endpoint}?wd=${directory}`,
    method: "PUT",
  });
};
