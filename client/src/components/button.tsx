interface ButtonProps {
  onClick?: (e: any) => void
  label?: string
  bgColor?: string
  type?: string
}

const Button: React.FC<ButtonProps> = ({ onClick, label, bgColor, type }) => {
  return (
    <button
      className={`w-full border p-2 rounded-md uppercase text-md  font-semibold my-2 transition ${bgColor}`}
      onClick={onClick}
      type="submit">
      {label}
    </button>
  )
}

export default Button
