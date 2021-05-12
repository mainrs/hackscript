#!/usr/bin/env hs

const argv = ['-AAAA', '-BBBB'];
const parsed = arg({
    '-A': arg.COUNT,
	'-B': [Boolean]
}, { argv })
console.log(parsed)
