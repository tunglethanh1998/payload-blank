import { ComponentPropsWithoutRef, forwardRef } from 'react'
import styles from './Checkbox.module.css'

export type CheckboxProps = ComponentPropsWithoutRef<'input'> & {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>((props, ref) => {
  return <div className={styles.checkbox}>text</div>
})

Checkbox.displayName = 'Checkbox'
