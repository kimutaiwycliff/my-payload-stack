import React from 'react'
import { Button } from '../ui/button'
import { Loader } from 'lucide-react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

type FormInputProps = {
  label: string
  name: string
  type: 'text' | 'password' | 'email'
  placeholder?: string
  required?: boolean
  defaultValue?: string
}

export const FormContainer = ({
  children,
  heading,
}: {
  children: React.ReactNode
  heading: string
}) => {
  return (
    <div className={`flex gap-8 min-h-full flex-col justify-center items-center`}>
      <div>
        <h1>{heading}</h1>
      </div>
      <div className={`w-full mx-auto sm:max-w-sm`}>{children}</div>
    </div>
  )
}

export const SubmitButton = ({
  loading,
  text,
}: {
  loading: boolean
  text: string
}): React.ReactElement => {
  return (
    <Button
      type="submit"
      disabled={loading}
      className={`${loading ? 'cursor-not-allowed' : 'cursor-pointer'}  p-2 w-full rounded-md flex items-center gap-4 justify-center`}
    >
      {text} <Loader className={`animate-spin ${loading ? 'inline-block' : 'hidden'}`} />
    </Button>
  )
}

export const FormInput = ({
  label,
  name,
  type,
  placeholder,
  required,
  defaultValue,
}: FormInputProps) => {
  return (
    <div className={`flex flex-col gap-2`}>
      <Label htmlFor={name}>{label}</Label>
      <Input
        defaultValue={defaultValue ? defaultValue : ''}
        required={required}
        className={`w-full textInput`}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder ? placeholder : `Enter your ${label.toLowerCase()}`}
      />
    </div>
  )
}
