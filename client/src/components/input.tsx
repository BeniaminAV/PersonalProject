interface InputProps {
  label: string
  type: string
  name: string
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  value: string
}

const FormField: React.FC<InputProps> = ({
  label,
  type,
  name,
  onChange,
  value,
}) => {
  return (
    <div className="relative py-2">
      <label className="text-md text-zinc-500">{label}</label>
      <input
        className="block rounded-md p-2 w-full text-md text-zinc-500 bg-neutral-200 appearance-none"
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
    </div>
  )
}

export default FormField
