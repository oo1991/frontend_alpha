import { clsx } from '../../lib/utils'

export function Input({ className, ...props }) {
  return (
    <input
      className={clsx(
        'flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2',
        'dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-gray-100 dark:focus:ring-offset-gray-950',
        className
      )}
      {...props}
    />
  )
}
