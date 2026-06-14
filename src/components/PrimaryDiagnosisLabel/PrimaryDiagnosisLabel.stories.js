import { PrimaryDiagnosisLabel } from './PrimaryDiagnosisLabel'

export default {
  title: '🟢   💊 IPA components/Primary Diagnosis Label',
  component: PrimaryDiagnosisLabel,
  argTypes: {
    type:    { control: 'select', options: ['nta-blue', 'nta-yellow', 'primary-set', 'primary-unset', 'primary-active'] },
    hasIcon: { control: 'boolean' },
    hasText: { control: 'boolean' },
  },
}

export const NtaBlue       = { args: { type: 'nta-blue' } }
export const NtaYellow     = { args: { type: 'nta-yellow' } }
export const PrimarySet    = { args: { type: 'primary-set' } }
export const PrimaryUnset  = { args: { type: 'primary-unset' } }
export const PrimaryActive = { args: { type: 'primary-active' } }
