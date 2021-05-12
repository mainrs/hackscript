#!/usr/bin/env node

import { arg, chalk, open, prompt } from './api.mjs'
import { resolve } from 'path'

// Make hackscript API accessible for scripts.
Object.assign(global, {
    arg,
    chalk,
    open,
    prompt,
})

// Parse user input.
const file = process.argv[2]
const path = resolve(process.cwd(), file)
await import(path)
