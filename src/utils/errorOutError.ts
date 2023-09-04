import { AxiosError } from "axios";

const ErrorOutError = (error: any) => {
  if (error instanceof Error) {
    console.log(`An error occurred: => ${error.message}`);
  }

  if (error instanceof AxiosError) {
    console.log(`An error occurred: => ${error.response?.data}`);
  }
};

export default ErrorOutError;
