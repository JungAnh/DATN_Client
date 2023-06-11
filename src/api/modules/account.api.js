import publicClient from "../client/public.client.js";

const accountEndpoints = {
  signin: "auth/signin",
  signup: "auth/signup",
  // getInfo: "user/info",
  // passwordUpdate: "user/update-password",
};

const accountApi = {
  signin: async ({ gmail, password }) => {
    try {
      const response = await publicClient.post(accountEndpoints.signin, {
        gmail,
        password,
      });
      // console.log(response);
      return { response };
    } catch (err) {
      return { err };
    }
  },
  signup: async ({ firstName, lastName, password,  gmail }) => {
    try {
      const response = await publicClient.post(accountEndpoints.signup, {
        firstName, lastName, password,  gmail
      });

      return { response };
    } catch (err) {
      return { err };
    }
  },
  // getInfo: async ({}) => {
  //   try {
  //     const response = await privateClient.get(accountEndpoints.getInfo);
  //     return { response };
  //   } catch (err) {
  //     return { err };
  //   }
  // },
  // passwordUpdate: async ({ password, newPassword, confirmNewPassword }) => {
  //   try {
  //     const response = await privateClient.put(accountEndpoints.register, {
  //       password,
  //       newPassword,
  //       confirmNewPassword,
  //     });
  //     return { response };
  //   } catch (err) {
  //     return { err };
  //   }
  // },
};

export default accountApi;