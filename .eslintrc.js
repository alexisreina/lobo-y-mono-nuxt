module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'plugin:prettier/recommended'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 'off',
    'vue/mustache-interpolation-spacing': 'off',
    'vue/multiline-html-element-content-newline': 'off'
  }
}
