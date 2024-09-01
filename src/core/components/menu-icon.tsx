import clsx from "clsx"

interface Props {
  open: boolean
}

export const MenuIcon = ({
  open
}: Props) => {
  return (
    <>
      <span className={clsx("h-[2px] w-5 bg-gray-200 rounded-lg transition-transform", {
        "translate-y-[5px] -rotate-45": open
      })}></span>
      <span className={clsx("h-[2px] w-5 bg-gray-200 rounded-lg transition-transform", {
        "opacity-0": open
      })}></span>
      <span className={clsx("h-[2px] w-5 bg-gray-200 rounded-lg transition-transform", {
        "-translate-y-[5px] rotate-45": open
      })}></span>
    </>
  )
}