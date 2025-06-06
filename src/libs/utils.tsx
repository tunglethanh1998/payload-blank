/**
 * Utility functions for UI components automatically added by ShadCN and used in a few of our frontend components and blocks.
 *
 * Other functions may be exported from here in the future or by installing other shadcn components.
 */

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const renderCells = <T,>(data: T[], getContent: (item: T, idx: number) => React.ReactNode) =>
  data.map((item, idx) => <div key={`cell-${idx}`}>{getContent(item, idx)}</div>)
