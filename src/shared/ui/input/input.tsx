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
  hasError?: boolean
  errorMessage?: string
}

export default function Input<
  T extends FieldValues = FieldValues
>({
  type,
  fieldName,
  placeholder,
  register,
  onFocus,
  hasError,
  errorMessage
}: FieldProps<T>) {
  return (
    <div className='mb-5'>
      <input
        type={type}
        className={`bg-gray-200 border text-gray-900 text-md rounded-lg focus:outline-none block w-full p-2.5 ${
          hasError
            ? 'border-red-500 focus:border-red-600'
            : 'border-gray-300 focus:border-blue-500'
        }`}
        placeholder={placeholder}
        onFocus={onFocus}
        {...register(fieldName, {
          required: `${fieldName} is required`
        })}
      />
      {hasError && errorMessage && (
        <p className='mt-1 text-sm text-red-500'>
          {errorMessage}
        </p>
      )}
    </div>
  )
}
