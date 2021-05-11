import chalk from 'chalk'
import enquirer from 'enquirer'

function prompt(options) {
    return enquirer.prompt(options)
}

export {
    chalk,
    prompt,
}
