import { TypeTag } from './TypeTag'

export default {
  title: '🟢   💊 IPA components/Type Tag',
  component: TypeTag,
  args: { label: 'Acute' },
  argTypes: { label: { control: 'text' } },
}

export const Acute             = { args: { label: 'Acute' } }
export const MedicalManagement = { args: { label: 'Medical Management' } }
