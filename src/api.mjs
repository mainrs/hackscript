import arg from 'arg'
import chalk from 'chalk'
import enquirer from 'enquirer'
import open from 'open'

function prompt(options) {
    return enquirer.prompt(options)
}

export {
    arg,
    chalk,
    open,
    prompt,
}
