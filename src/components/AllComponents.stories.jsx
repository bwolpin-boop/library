/**
 * All Components — one overview per component, all in one place.
 * The 🗂️ emoji (U+1F5C2) sorts before 🟢/🟠 so this folder appears at the top.
 */

import { Overview as _Button }           from './Button/ButtonOverview.stories.jsx'
import { Overview as _Logo }             from './Logo/LogoOverview.stories.jsx'
import { Overview as _Toast }            from './Toast/ToastOverview.stories.jsx'
import { Overview as _Tooltip }          from './Tooltip/TooltipOverview.stories.jsx'
import { Overview as _TextField }        from './TextField/TextFieldOverview.stories.jsx'
import { Overview as _SearchField }      from './SearchField/SearchFieldOverview.stories.jsx'
import { Overview as _Status }           from './Status/StatusOverview.stories.jsx'
import { Overview as _CategoryTag }      from './CategoryTag/CategoryTagOverview.stories.jsx'
import { Overview as _SourceTypeTab }    from './SourceTypeTab/SourceTypeTabOverview.stories.jsx'
import { Overview as _NavIcons }         from './Icon/NavIconOverview.stories.jsx'
import { Overview as _SourceTypeIcons }  from './Icon/SourceTypeIconOverview.stories.jsx'
import { Overview as _IndicatorDolphin } from './Icon/IndicatorDolphinOverview.stories.jsx'
import { Overview as _Ribbon }           from './Ribbon/RibbonOverview.stories.jsx'
import { Overview as _H2YLetters }       from './Ribbon/H2YLettersOverview.stories.jsx'
import { Overview as _H2YSequence }      from './Ribbon/H2YSequenceOverview.stories.jsx'
import { Overview as _Sections }         from './Ribbon/SectionOverview.stories.jsx'
import { Overview as _SectionsRow }      from './Ribbon/SectionsRowOverview.stories.jsx'
import { Overview as _MedicaidLabel }    from './Ribbon/MedicaidLabelOverview.stories.jsx'
import { Overview as _CmiToggle }        from './Ribbon/CmiCategoryToggleOverview.stories.jsx'

export default {
  title: '🗂️ All Components',
  parameters: { controls: { disable: true }, actions: { disable: true } },
}

export const Button           = { ..._Button,           name: '🆗 Button' }
export const Logo             = { ..._Logo,             name: '💜 Logo' }
export const Toast            = { ..._Toast,            name: '🏷 Toast' }
export const Tooltip          = { ..._Tooltip,          name: '🏷 Tooltip' }
export const TextField        = { ..._TextField,        name: '🍃 TextField' }
export const SearchField      = { ..._SearchField,      name: '🍃 SearchField' }
export const Status           = { ..._Status,           name: '📮 Status' }
export const CategoryTag      = { ..._CategoryTag,      name: '📮 CategoryTag' }
export const SourceTypeTab    = { ..._SourceTypeTab,    name: '📮 SourceTypeTab' }
export const NavIcons         = { ..._NavIcons,         name: '😂 NavIcons' }
export const SourceTypeIcons  = { ..._SourceTypeIcons,  name: '😂 SourceTypeIcons' }
export const IndicatorDolphin = { ..._IndicatorDolphin, name: '😂 IndicatorDolphin' }
export const Ribbon           = { ..._Ribbon,           name: '🎀 Ribbon' }
export const H2YLetters       = { ..._H2YLetters,       name: '🎀 H2YLetters' }
export const H2YSequence      = { ..._H2YSequence,      name: '🎀 H2YSequence' }
export const Sections         = { ..._Sections,         name: '🎀 Sections' }
export const SectionsRow      = { ..._SectionsRow,      name: '🎀 SectionsRow' }
export const MedicaidLabel    = { ..._MedicaidLabel,    name: '🎀 MedicaidLabel' }
export const CmiCategoryToggle = { ..._CmiToggle,       name: '🎀 CmiCategoryToggle' }
