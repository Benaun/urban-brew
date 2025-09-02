import {
  FieldValues,
  Path,
  UseFormRegister
} from 'react-hook-form'

interface FieldProps<T extends FieldValues = FieldValues> {
  type: string
  fieldName: Path<T>
  placeholder: string
  register: UseFormRegister<T>
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void
}

export default function Input<
  T extends FieldValues = FieldValues
>({
  type,
  fieldName,
  placeholder,
  register,
  onFocus
}: FieldProps<T>) {
  return (
    <div className='mb-5'>
      <input
        type={type}
        className='bg-gray-200 border border-gray-300 text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2.5'
        placeholder={placeholder}
        onFocus={onFocus}
        {...register(fieldName, {
          required: `${fieldName} is required`
        })}
      />
    </div>
  )
}
