import { useState, useCallback } from "react"
import axios from "axios"
import FormField from "../../input"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const defaultFormField = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
}

//@ts-ignore
type Variant = "LOGIN" | "REGISTER"

const AuthForm = () => {
  const [variant, setVariant] = useState("LOGIN")
  const [formField, setFormField] = useState(defaultFormField)
  const { displayName, email, password, confirmPassword } = formField
  let navigate = useNavigate()

  const handleVariant = useCallback(() => {
    if (variant === "LOGIN") {
      setVariant("REGISTER")
    } else {
      setVariant("LOGIN")
    }
  }, [variant])

  const resetField = () => {
    setFormField(defaultFormField)
  }

  const onSubmitR = async (event: any) => {
    event.preventDefault()

    if (password !== confirmPassword) {
      toast.error("Password doesn't match!")
      return
    }

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }

      await axios.post(
        "http://localhost:5000/auth/register",
        {
          displayName,
          email,
          password,
          confirmPassword,
        },
        config
      )
      toast.success("Resgistred !")
      resetField()
    } catch (error) {
      console.log("Something went wrong")
    }
  }

  const onSubmitL = async (event: any) => {
    event.preventDefault()

    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      }

      await axios.post(
        "http://localhost:5000/auth/login",
        {
          email,
          password,
        },
        config
      )
      navigate("/home")
      toast.success("You logged in!")
      resetField()
    } catch (error) {
      console.log("Something went wrong")
    }
  }

  const handleChange = (event: any) => {
    const { name, value } = event.target

    setFormField({ ...formField, [name]: value })
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <form
          className="space-y-6"
          onSubmit={variant === "LOGIN" ? onSubmitL : onSubmitR}>
          {variant === "REGISTER" && (
            <FormField
              label="User Name"
              type="text"
              name="displayName"
              value={displayName}
              onChange={handleChange}
            />
          )}
          <FormField
            label="Email"
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
          <FormField
            label="Password*"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          {variant === "REGISTER" && (
            <FormField
              label="Confirm Password*"
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleChange}
            />
          )}
          <div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "LOGIN" ? "Login" : "Sign up"}
            </button>
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-white px-2 text-gray-500">
                Or continue with
              </span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 justify-center text-sm mt-6 px-2 text-gray-500">
          <div>
            {variant === "LOGIN"
              ? "New to this App?"
              : "Aleardy have an account?"}
          </div>
          <div onClick={handleVariant} className="underline cursor-pointer">
            {variant === "LOGIN" ? "Create an account" : "Login"}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthForm
