"use client"

interface Props {
  count: number
  handleSubtract: () => void
  handleSum: () => void
}

export const Counter = ({ handleSubtract, count, handleSum }: Props) => {
  return (
    <div className="flex bg-bg-200 rounded-lg items-center justify-center">
      <button
        onClick={handleSubtract}
        className="py-4 px-3">
        <span className="w-3.5 h-[2px] bg-text-300 rounded-lg block" />
      </button>
      <p className="px-2 text-text-100 text-lg">
        {count}
      </p>
      <button
        onClick={handleSum}
        className="py-4 px-3">
        <span className="w-3.5 h-[2px] bg-text-300 rounded-lg block" />
        <span className="w-3.5 h-[2px] bg-text-300 rounded-lg block rotate-90 -translate-y-full" />
      </button>
    </div>
  )
}