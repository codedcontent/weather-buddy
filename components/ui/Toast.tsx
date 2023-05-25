import Image from "next/image";
import { toast as hotToast, Toaster } from "react-hot-toast";

interface ToastProps {
  title?: string;
  message: string;
  type?: "success" | "error" | "info";
  duration?: number;
}

const toast = (opts: ToastProps) => {
  const { message, duration = 100000, title, type = "info" } = opts;

  const toastIcon =
    type === "success"
      ? " 👍 "
      : type === "error"
      ? " 👎 "
      : type === "info"
      ? " 👀 "
      : null;

  const toastTitleColor =
    type === "success"
      ? "text-success-green"
      : type === "error"
      ? "text-danger-red"
      : type === "info"
      ? "text-blue-500"
      : null;

  const toastBgColor =
    type === "success"
      ? "bg-success-green"
      : type === "error"
      ? "bg-danger-red"
      : type === "info"
      ? "bg-blue-500"
      : null;

  return hotToast.custom(
    (t) => (
      <div
        className={`${
          t.visible ? "animate-enter" : "animate-leave"
        } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
      >
        {/* Toast content container */}
        <div className="flex-1 w-0 p-2">
          <div className="flex items-center">
            {/* Toast Icon */}
            <div className="flex-shrink-0 pt-0.5">
              <div
                className={`h-10 w-10 flex justify-center items-center  rounded-full ${toastBgColor}`}
              >
                <span className="text-lg font-bold">{toastIcon}</span>
              </div>
            </div>

            {/* Toast title and message */}
            <div className="ml-3 flex-1">
              <p className={`text-sm font-semibold ${toastTitleColor}`}>
                {title}
              </p>

              <p className="mt-1 text-sm text-gray-500 font-light">{message}</p>
            </div>
          </div>
        </div>

        {/* Close toast button */}
        <div className="flex border-l border-gray-200">
          <button
            onClick={() => hotToast.dismiss(t.id)}
            className="w-full border border-transparent rounded-none rounded-r-lg px-2 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Close
          </button>
        </div>
      </div>
    ),
    {
      duration,
    }
  );
};

export { toast, Toaster };
