import React from "react";
import { Provider } from "react-redux";
import { UserProvider } from "./authprovider";

export const AppProviders = ({ children }) => {
  return (
    // <Provider store={store}>
        <UserProvider>{children}</UserProvider>
    // </Provider>
  );
};
