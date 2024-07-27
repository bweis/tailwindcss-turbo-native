const plugin = require('tailwindcss/plugin')

const turboNativePlugin = plugin(
  function ({ addVariant, theme }) {
    const ios = theme('turboNativeCustomDataAttributes.ios')
    const android = theme('turboNativeCustomDataAttributes.android')

    addVariant('not-web', `:is(html[${ios}] &, html[${android}] &)`)
    addVariant('not-ios', `html:not([${ios}]) &`)
    addVariant('not-android', `html:not([${android}]) &`)
    addVariant('web', `html:not([${ios}]):not([${android}]) &`)
    addVariant('ios', `:is(html[${ios}] &)`)
    addVariant('android', `:is(html[${android}] &)`)
  },
  {
    theme: {
      turboNativeCustomDataAttributes: {
        android: 'data-turbo-native-android',
        ios: 'data-turbo-native-ios',
      },
    },
  }
)

module.exports = turboNativePlugin
