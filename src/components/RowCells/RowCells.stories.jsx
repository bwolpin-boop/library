import { RowCells } from './RowCells'

export default {
  title: '🟢   🏓 Table/Row Cells',
  component: RowCells,
  args: { type: 'Primary Text', location: 'dashboard', size: 'Default', text: 'Sodium Chloride' },
  argTypes: {
    type:     { control: 'select', options: ['Primary Text','verify','Icon','source','status','MDS answer','indicator','2 icons','medical label','strength','Primary diag','NTA','2 lines paragraph','number and text','patient name','categories','1 lines $','MDS answer to answer','ipa state','checkbox','verify and deny and pending','strength 2','date filter','IV fluids +','IV fluids -'] },
    location: { control: 'select', options: ['dashboard', 'PCC'] },
    size:     { control: 'select', options: ['Default', 'small'] },
    text:     { control: 'text' },
    deny:     { control: 'boolean' },
    verify:   { control: 'boolean' },
    hasNewTag: { control: 'boolean' },
    hasPending: { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '32px' }}><Story /></div>],
}

export const PrimaryTextDashboard   = { args: { type: 'Primary Text', location: 'dashboard', size: 'Default', navIconLeft: 'dolphincare-logo', navIconRight: 'dolphincare-logo' } }
export const VerifyDashboard        = { args: { type: 'verify',       location: 'dashboard', size: 'Default', deny: true, verify: true } }
export const IconDashboard          = { args: { type: 'Icon',         location: 'dashboard', size: 'Default' } }
export const PrimaryTextPcc         = { args: { type: 'Primary Text', location: 'PCC',       size: 'small', navIconLeft: 'dolphincare-logo' } }
export const VerifyPcc              = { args: { type: 'verify',       location: 'PCC',       size: 'small' } }
export const SourcePcc              = { args: { type: 'source',       location: 'PCC',       size: 'small', sourceType: 'IV Fluids' } }
export const StatusPcc              = { args: { type: 'status',       location: 'PCC',       size: 'small', status: 'dismissed' } }
export const MdsAnswerPcc           = { args: { type: 'MDS answer',   location: 'PCC',       size: 'small' } }
export const MdsAnswerToAnswerPcc   = { args: { type: 'MDS answer to answer', location: 'PCC', size: 'small' } }
export const IndicatorPcc           = { args: { type: 'indicator',    location: 'PCC',       size: 'small' } }
export const CategoriesPcc          = { args: { type: 'categories',   location: 'PCC',       size: 'small', categories: ['nursing', 'OT/PT', 'SLP', 'NTA'] } }
export const StrengthPcc            = { args: { type: 'strength',     location: 'PCC',       size: 'small', strengthType: 'strong' } }
export const Strength2Pcc           = { args: { type: 'strength 2',   location: 'PCC',       size: 'small', strengthType: 'moderate', navIconRight: 'warning-small' } }
export const MedicalLabelPcc        = { args: { type: 'medical label',location: 'PCC',       size: 'small' } }
export const NtaPcc                 = { args: { type: 'NTA',          location: 'PCC',       size: 'small' } }
export const PrimaryDiagPcc         = { args: { type: 'Primary diag', location: 'PCC',       size: 'small' } }
export const NumberAndTextPcc       = { args: { type: 'number and text', location: 'PCC',    size: 'small' } }
export const PatientNamePcc         = { args: { type: 'patient name', location: 'PCC',       size: 'small', text: 'Patient name', hasNewTag: true } }
export const TwoLinesPcc            = { args: { type: '2 lines paragraph', location: 'PCC',  size: 'small', text: 'Sodium Chloride' } }
export const OneLinesDollarPcc      = { args: { type: '1 lines $',    location: 'PCC',       size: 'small' } }
export const IpaStatePcc            = { args: { type: 'ipa state',    location: 'PCC',       size: 'small' } }
export const CheckboxPcc            = { args: { type: 'checkbox',     location: 'PCC',       size: 'small' } }
export const VerifyAndDenyGroupPcc  = { args: { type: 'verify and deny and pending', location: 'PCC', size: 'small' } }
export const DateFilterPcc          = { args: { type: 'date filter',  location: 'PCC',       size: 'small' } }
export const IvFluidsPlusPcc        = { args: { type: 'IV fluids +',  location: 'PCC',       size: 'small', ivText: 'pg. 1, 2, 3' } }
export const IvFluidsMinusPcc       = { args: { type: 'IV fluids -',  location: 'PCC',       size: 'small', ivText: 'pg. 1, 2, 3, 4, 5, 6, 7' } }
