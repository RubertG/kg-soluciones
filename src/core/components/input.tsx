import clsx from 'clsx'
import React, { DetailedHTMLProps, forwardRef, InputHTMLAttributes, LegacyRef } from 'react'
import { Selector, Upload } from '@/core'

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
          clsx("border border-bg-200 bg-bg-card/30 rounded-lg px-3.5 py-2.5 w-full focus:outline-none focus:border-primary-100 transition-colors text-text-100 placeholder:text-text-300 text-sm", {
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
  isValid?: boolean,
  labelText?: string
  isObligatory?: boolean
}

export const SelectInput = forwardRef(
  function SelectInput({
    className, isValid = true, items, title, id, labelText, isObligatory = true, ...props
  }: SelectInputProps,
    ref: LegacyRef<HTMLSelectElement> | undefined
  ) {
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
        <div className="relative cursor-pointer">
          <select
            className={
              clsx("border border-bg-200 bg-bg-card/30 rounded-lg px-3.5 py-2.5 w-full focus:outline-none focus:border-primary-100 transition-colors text-text-100 placeholder:text-text-300 text-sm cursor-pointer", {
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
      </label>
    )
  }
)

export const FileInput = forwardRef(function FileInput({ className, multiple, ...props }: Props, ref: LegacyRef<HTMLInputElement> | undefined) {
  return (
    <button className={`block w-full ${className}`}>
      <label
        className={"relative w-full inline-flex items-center justify-center py-2.5 px-3.5 rounded-lg bg-bg-300 text-text-100 gap-2 text-center text-sm lg:text-base lg:hover:bg-primary-100 lg:transition-colors cursor-pointer"}
        htmlFor="file"
      >
        <Upload className="absolute top-1/2 -translate-y-1/2 left-0 ml-3.5 stroke-text-100 w-6 h-6" />
        Cargar {multiple ? "imágenes" : "imagen"}
        <input
          type="file"
          id="file"
          accept="image/*"
          multiple={multiple}
          className="hidden"
          {...props} {...(ref == undefined) ? {} : { ref }} />
      </label>
    </button>
  )
})