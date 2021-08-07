const palette = {
  'pale-pink': 'rgb(247, 141, 167)',
  'vivid-red': 'rgb(207, 46, 46)',
  'luminous-vivid-orange': 'rgb(255, 105, 0)',
  'luminous-vivid-amber': 'rgb(252, 185, 0)',
  'light-green-cyan': 'rgb(123, 220, 181)',
  'vivid-green-cyan': 'rgb(0, 208, 132)',
  'pale-cyan-blue': 'rgb(142, 209, 252)',
  'vivid-cyan-blue': 'rgb(6, 147, 227)',
  'very-light-gray': 'rgb(238, 238, 238)',
  'cyan-bluish-gray': 'rgb(171, 184, 195)',
  'very-dark-gray': 'rgb(49, 49, 49)',
}

const color = (attr, field) => props => {
  if (props[attr] && palette[props[attr]]) {
    return {
      [field]: palette[props[attr]],
    }
  }

  return {}
}

export const textColor = color('textColor', 'color')
export const backgroundColor = color('backgroundColor', 'backgroundColor')
