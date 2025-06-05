import { clsx } from '../../lib/utils'

export function Input({ className, ...props }) {
  return (
    <input
      className={clsx(
        'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        className
      )}
      {...props}
    />
  )
}
