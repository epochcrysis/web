import {
  HumanizeDuration,
  HumanizeDurationLanguage,
  IHumanizeDurationOptions,
} from 'humanize-duration-ts'
import { IntlProvider as DefaultIntlProvider } from 'react-intl'

enum FormatDurationUnit {
  second,
  minute,
  hour,
  day,
  week,
  month,
  year,
}

interface FormatDurationOptions extends IHumanizeDurationOptions {
  unit?: FormatDurationUnit
}

const langService: HumanizeDurationLanguage = new HumanizeDurationLanguage()
const humanizer: HumanizeDuration = new HumanizeDuration(langService)

const unitMeasures = {
  second: 1000,
  minute: 60000,
  hour: 3600000,
  day: 86400000,
  week: 604800000,
  month: 2629800000,
  year: 31557600000,
}

const formatDuration = (value, { unit, ...options }: FormatDurationOptions) => {
  if (unit && unitMeasures[unit]) {
    return humanizer.humanize(value * unitMeasures[unit], options)
  }

  return humanizer.humanize(value, options)
}

class IntlProvider extends DefaultIntlProvider {
  getChildContext() {
    const context = super.getChildContext()
    const language = context.intl.locale

    return {
      ...context,
      intl: {
        ...context.intl,
        formatDuration: (value, options: FormatDurationOptions) =>
          formatDuration(value, { ...options, language }),
      },
    }
  }
}

export default IntlProvider
