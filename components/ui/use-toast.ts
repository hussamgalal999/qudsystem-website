// Simplified version of the toast hook
"use client"

import type React from "react"

import { useState, createContext, useContext, createElement } from "react"

type ToastProps = {
  id: string
  title?: string
  description?: string
  action?: React.ReactNode
  duration?: number
}

type ToastContextType = {
  toasts: ToastProps[]
  toast: (props: Omit<ToastProps, "id">) => void
  dismiss: (id: string) => void
}

const ToastContext = createContext<ToastContextType>({
  toasts: [],
  toast: () => {},
  dismiss: () => {},
})

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = (props: Omit<ToastProps, "id">) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast = { id, ...props }
    setToasts((prev) => [...prev, newToast])

    if (props.duration !== Number.POSITIVE_INFINITY) {
      setTimeout(() => {
        dismiss(id)
      }, props.duration || 5000)
    }
  }

  const dismiss = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return createElement(ToastContext.Provider, { value: { toasts, toast, dismiss } }, children)
}

export const useToast = () => useContext(ToastContext)
