"use client";

import { SnackbarProvider } from "notistack";

const Snackbar: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      {children}
    </SnackbarProvider>
  );
};

export default Snackbar;
