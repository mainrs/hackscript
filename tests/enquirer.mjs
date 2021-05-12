#!/usr/bin/env hs

const question = {
    type: 'confirm',
    name: 'sunny',
    message: 'Is it sunny today?',
};
const answer = await prompt(question);
console.log(answer)
