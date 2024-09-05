import { Spinner } from "@/core"

function Loading () {
  return (
    <div className='w-full h-full grid place-content-center pt-28'>
      <Spinner className="m-auto" />
    </div>
  )
}

export default Loading