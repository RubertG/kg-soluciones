import clsx from 'clsx'
import React, { forwardRef } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  labelText?: string
  isObligatory?: boolean
  isValid?: boolean
}

export const Input = forwardRef(function Input({
  labelText, type = 'text', className, isObligatory = true, id, isValid = true, ...props

}: Props, ref: React.Ref<HTMLInputElement>) {
  return (
    <label
      htmlFor={id}
      className={`block ${className}`}
    >
      {
        labelText && (
          <span className='text-text-100 mb-2 block'>
            {labelText} {isObligatory && <span className='text-primary-100'>*</span>}
          </span>
        )
      }
      <input
        className={
          clsx("border border-bg-200 bg-bg-card/30 rounded-lg px-3.5 py-2.5 w-full focus:outline-none focus:border-primary-100 transition-colors text-text-200 placeholder:text-text-300 text-sm", {
            "focus:border-primary-100": isValid,
            "focus:border-red-500": !isValid
          })
        }
        type={type}
        ref={ref}
        id={id}
        {...props}
      />
    </label>
  )
})
