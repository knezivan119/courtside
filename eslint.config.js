// eslint.config.js (ESM)
import js from '@eslint/js'
import globals from 'globals'

const commonRules = {
    quotes: [ 'warn', 'single' ],
    semi: [ 'warn', 'never' ],
    'brace-style': [ 'warn', 'stroustrup' ],
    'block-spacing': [ 'warn', 'always' ],
    'comma-dangle': [ 'warn', 'always-multiline' ],
    'comma-spacing': [ 'warn', { before: false, after: true } ],
    'computed-property-spacing': [ 'warn', 'always' ],
    indent: [ 'warn', 4, { SwitchCase: 1, ArrayExpression: 1, ObjectExpression: 1 } ],
    'linebreak-style': [ 'error', 'unix' ],
    'object-curly-spacing': [ 'warn', 'always' ],
    'object-curly-newline': [ 'warn', { multiline: true, consistent: true } ],
    'object-property-newline': [ 'warn', { allowAllPropertiesOnSameLine: true } ],
    'array-bracket-spacing': [ 'warn', 'always' ],
    'space-in-parens': [ 'warn', 'always' ],
    'func-call-spacing': [ 'error', 'never' ],
    'space-infix-ops': [ 'warn', { int32Hint: false } ],
    'no-unused-vars': [ 'warn', { argsIgnorePattern: '^_' } ],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
}

export default [
    { ignores: [ '**/node_modules/**', 'dist/**', 'build/**' ] },
    js.configs.recommended,

    // apply to all JS in the repo
    {
        files: [ '**/*.{js,mjs,cjs}' ],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: { ...globals.browser, ...globals.node }, // both are fine for most projects
        },
        rules: commonRules,
    },
]
