"use client"

import { Popup, PrincipalActionButton, SecondaryActionButton } from "@/core"

interface Props {
  className?: string
  title: string
  description?: string
  actionAccept: () => void
  actionCancel: () => void
}

export const ConfirmPopup = ({
  className, actionAccept,
  actionCancel, title, description
}: Props) => {
  return (
    <Popup className={className}>
      <main
        className="w-full max-w-xl p-3 lg:p-5 border border-bg-200 rounded-lg bg-bg-card/30"
      >
        <h2 className="text-xl text-text-100 font-bold text-center">
          {title}
        </h2>
        <hr className="mt-5 mb-3 border-bg-300" />
        <p className="text-text-200 text-sm lg:text-base">
          {description}
        </p>
        <footer className="flex mt-4 gap-4 items-center justify-end">
          <SecondaryActionButton onClick={actionCancel}>
            Cancelar
          </SecondaryActionButton>
          <PrincipalActionButton onClick={actionAccept}>
            Aceptar
          </PrincipalActionButton>
        </footer>
      </main>
    </Popup>
  )
}