// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential', 
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
   

     'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // allow paren-less arrow functions
    "indent": "off",
     "semi" : "off",
     "quotes" : "off",
    "space-before-function-paren" : "off",
     "no-trailing-spaces" : "off",
     "key-spacing" : "off",
    "spaced-comment" :"off",
    "no-unused-vars" : "off",
    "no-multiple-empty-lines" :"off",
     "no-undef" : "off",
     "comma-dangle" : "off",
     "padded-blocks" : "off",
     "space-infix-ops" : "off",
     "brace-style" : "off",
     "curly" : "off",
     "space-before-blocks" : "off",
     "space-in-parens" : "off",
     "keyword-spacing" : "off",
     "comma-spacing" : "off",
     "no-sequences" : "off",
     "eqeqeq" : "off",
     "func-call-spacing" :"off",
     "no-unexpected-multiline" : "off",
     "camelcase" : "off",
     "no-lone-blocks" : "off",
     "no-multi-spaces": "off",
     "no-tabs" : "off"
  }
}
