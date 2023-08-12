const ErrorOutError = (error: any) => {
  throw new Error(`An error occurred: => ${error}`);
};

export default ErrorOutError;
