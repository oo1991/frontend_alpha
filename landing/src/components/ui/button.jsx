import { clsx } from '../../lib/utils'

export function Button({ className, variant = 'default', size = 'default', ...props }) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-background',
        variant === 'outline'
          ? 'border border-primary text-primary hover:bg-primary/10'
          : 'bg-primary hover:bg-primary/90',
        size === 'sm'
          ? 'h-9 px-3'
          : size === 'lg'
            ? 'h-11 px-8'
            : size === 'icon'
              ? 'h-10 w-10 p-0'
              : 'h-10 px-4 py-2',
        className,
      )}
      {...props}
    />
  )
}
