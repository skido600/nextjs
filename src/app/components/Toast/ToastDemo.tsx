import * as Toast from "@radix-ui/react-toast";
import { useState } from "react";

type ToastStatus = "success" | "error";

const ToastDemo: React.FC = () => {
  const [toast, setToast] = useState<{
    open: boolean;
    message: string;
    status: ToastStatus;
  }>({
    open: false,
    message: "",
    status: "success",
  });

  const showToast = (message: string, status: ToastStatus) => {
    setToast({ open: true, message, status });
    setTimeout(() => setToast((prev) => ({ ...prev, open: false })), 3000); // Auto-close after 3 seconds
  };

  return (
    <>
      <div className="space-x-4">
        <button
          onClick={() => showToast("Action was successful!", "success")}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          Show Success Toast
        </button>

        <button
          onClick={() => showToast("Something went wrong!", "error")}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          Show Error Toast
        </button>
      </div>

      <Toast.Provider>
        <Toast.Root
          open={toast.open}
          onOpenChange={(open) => setToast({ ...toast, open })}
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-md shadow-md text-white transition-transform duration-300 ${
            toast.open ? "translate-y-0" : "translate-y-10 opacity-0"
          } ${toast.status === "success" ? "bg-green-600" : "bg-red-600"}`}
        >
          <Toast.Title className="font-bold capitalize">
            {toast.status === "success" ? "Success" : "Error"}
          </Toast.Title>
          <Toast.Description>{toast.message}</Toast.Description>
        </Toast.Root>
        <Toast.Viewport className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50" />
      </Toast.Provider>
    </>
  );
};

export default ToastDemo;
