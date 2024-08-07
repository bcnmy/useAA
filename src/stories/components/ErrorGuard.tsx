import type { ReactNode } from "react"

export const ErrorGuard = ({
  children,
  errors
}: {
  children: ReactNode
  errors?: (Error | null)[]
}) => {
  if (errors?.some(Boolean)) {
    return (
      <div>
        {errors?.[0]?.message ?? "Unknown Error"}
      </div>
    )
  }
  return children
}
