import clsx from 'clsx'
import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes, LegacyRef } from 'react'
import { Selector } from './icons'

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

interface SelectInputProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLSelectElement>, HTMLSelectElement> {
  items?: {
    name: string
    id: string
  }[]
  title: string,
  isValid?: boolean
}

export const SelectInput = forwardRef(
  function SelectInput({
    className, isValid, items, title, ...props
  }: SelectInputProps,
    ref: LegacyRef<HTMLSelectElement> | undefined
  ) {
    return (
      <div className="relative cursor-pointer">
        <select
          className={
            clsx(`border border-bg-200 bg-bg-card/30 rounded-lg px-3.5 py-2.5 w-full focus:outline-none focus:border-primary-100 transition-colors text-text-200 placeholder:text-text-300 text-sm ${className}`, {
              "focus:border-primary-100": isValid,
              "focus:border-red-500": !isValid
            })
          }
          defaultValue={title}
          {...props} {...(ref == undefined) ? {} : { ref }}>
          <option
            className="text-text-300 py-1 bg-bg-card hover:bg-bg-200"
            disabled
            selected
            aria-selected
            value="">{title}</option>
          {
            items?.map((item) => (
              <option
                className="text-text-200 py-1 bg-bg-card cursor-pointer hover:bg-bg-200"
                key={item.id}
                value={item.id}
              >
                {item.name}
              </option>
            ))
          }
        </select>
        <Selector className="absolute stroke-text-200 right-3 top-1/2 -translate-y-1/2" />
      </div>
    )
  })
