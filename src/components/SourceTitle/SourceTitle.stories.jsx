import { SourceTitle } from './SourceTitle'

export default {
  title: '🟠   📁 sources/Source Title',
  component: SourceTitle,
  args: {
    id: '#K0520A2',
    sourceName: 'IV Fluids in hospital',
    longTitle: true,
    whichProduct: 'dashboard',
    mdsAnswer: '1. Yes',
    patientName: 'Garcian, Kola A., 4567',
    facilityName: 'Beachgarden hostile facility New Jersey',
  },
  argTypes: {
    whichProduct: { control: 'select', options: ['dashboard', 'browser extension'] },
    longTitle:    { control: 'boolean' },
  },
  decorators: [(Story) => <div style={{ padding: '32px' }}><Story /></div>],
}

export const DashboardLong    = { args: { whichProduct: 'dashboard',          longTitle: true  } }
export const DashboardShort   = { args: { whichProduct: 'dashboard',          longTitle: false } }
export const BrowserLong      = { args: { whichProduct: 'browser extension',  longTitle: true  } }
export const BrowserShort     = { args: { whichProduct: 'browser extension',  longTitle: false } }
