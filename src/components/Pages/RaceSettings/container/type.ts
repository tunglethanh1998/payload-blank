export type TalentOption = {
  value: number
  label: string
}

export type TalentSettingsState = {
  talent?: TalentOption
  days: boolean[]
}

export type ReporterOption = {
  value: number
  label: string
}

export type ReporterSettingsState = {
  reporter?: ReporterOption
  days: boolean[]
}
