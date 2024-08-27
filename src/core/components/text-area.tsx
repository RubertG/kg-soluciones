import React, { forwardRef } from 'react'

interface Props extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  labelText?: string
  isObligatory?: boolean
}

export const TextArea = forwardRef(function TextArea({
  labelText, className, isObligatory = true, id, ...props

}: Props, ref: React.Ref<HTMLTextAreaElement>) {
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
      <textarea
        className="border border-bg-200 bg-bg-card/30 rounded-lg px-3.5 py-2.5 w-full focus:outline-none focus:border-primary-100 transition-colors text-text-200 placeholder:text-text-300 text-sm"
        ref={ref}
        id={id}
        {...props}
      />
    </label>
  )
})
