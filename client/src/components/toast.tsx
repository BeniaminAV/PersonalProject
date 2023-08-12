import { Toaster } from "react-hot-toast"

const ToastProvider = () => {
  return (
    <>
      <Toaster
        toastOptions={{
          success: {
            iconTheme: {
              primary: "#00FF7F",
              secondary: "black",
            },
            duration: 2500,
          },
          style: {
            background: "#000",
            color: "#fff",
            padding: "10px",
            maxWidth: "100%",
          },
          position: "bottom-center",
        }}
      />
    </>
  )
}

export default ToastProvider
