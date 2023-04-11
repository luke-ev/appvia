import { useStoreData } from "./provider"

export type Steps = 'details' | 'features' | 'summary'

export type Alerts = {
  message: string | undefined
  show: boolean
  type: "error" | "success" | undefined
}

export interface StepProps {
  nextStep?: Steps
  prevStep?: Steps
}

export type SelectedFeatures = {
  description: string
  label: string
  value: string
}

export type WizardValues = {
  name: string
  description: string
  selectedFeatures: SelectedFeatures[] | null
}

export type UseContextDataReturnType = ReturnType<typeof useStoreData>
