"use client"

import { Share } from "@/core"

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  title: string
  url: string
  text: string
}

export const ButtonShare = ({
  text, title, url, className, ...props
}: Props) => {

  const handleShare = async () => {
    try {
      await navigator.share({
        title,
        url: url,
        text
      })
    } catch (error) {
      console.log(error)
      if (!window) return 

      window.location.href = `https://wa.me/?text=${text}%20${url}`
    }
  }

  return (
    <button
      onClick={handleShare}
      className={`group ${className}`}
      {...props}
    >
      <Share className="stroke-primary-100 lg:group-hover:stroke-primary-200 transition-colors"  />
    </button>
  )
}