import React, { useEffect, useState } from 'react'
import ReactSelect from 'react-select'

type ReactSelectProps = React.ComponentProps<typeof ReactSelect>

export type SelectFieldProps = ReactSelectProps

export const SelectField = (props: SelectFieldProps) => {
  const { options, ...innerProps } = props
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return null // Prevent SSR mismatches

  return (
    <ReactSelect
      menuPosition="fixed"
      options={options}
      menuPortalTarget={document.body}
      styles={{
        placeholder: (base) => ({ ...base, color: '#fff' }),
        singleValue: (base) => ({ ...base, color: '#fff' }),
        control: (base) => ({
          ...base,
          minHeight: 40,
          borderRadius: 3,
          outline: 0,
          zIndex: 1,
          border: '1px solid var(--theme-elevation-150)',
          background: 'var(--theme-input-bg)',
          boxShadow: '0 2px 2px -1px #0000001a',
          ':hover': { borderColor: 'var(--theme-elevation-250)' },
          ':focus': { borderColor: 'var(--theme-elevation-100)' },
          ':focus-within': { borderColor: 'var(--theme-elevation-100)' },
          ':active': { borderColor: 'var(--theme-elevation-100)' },
        }),
        menu: (base) => ({ ...base, margin: 0, borderRadius: 0 }),
        menuList: (base) => ({ ...base, padding: 0 }),
        option: (base, state) => ({
          ...base,
          color: 'var(--theme-elevation-800)',
          backgroundColor: state.isSelected
            ? 'var(--theme-elevation-100)' // when selected
            : state.isFocused
              ? 'var(--theme-elevation-100)' // when hovered
              : 'var(--theme-input-bg)',
        }),
        indicatorsContainer: (base) => ({
          ...base,
        }),
      }}
      components={{
        IndicatorSeparator: () => null,
      }}
      {...innerProps}
    />
  )
}
