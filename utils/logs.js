import chalk from 'chalk'
import { getRandomFrom } from './misc.js'
const log = console.log

const spheres = ['⨁', '◶', '✪', '◍', '⨂', '◉', '◎', '❂', '◐', '◑', '◒', '◓']
const colors = ['redBright', 'greenBright', 'yellowBright', 'blueBright', 'magentaBright', 'cyanBright']

export const divider = () => {
  log(chalk[getRandomFrom(colors)](getRandomFrom(spheres)))
}

export const dayHeader = (dayNumber) => {
  log(chalk[getRandomFrom(colors)](getRandomFrom(spheres)), chalk.redBright.bold(`-> DAY ${dayNumber}`))
}

export const logAnswer = (text, value) => {
  log(chalk[getRandomFrom(colors)](getRandomFrom(spheres)), chalk.greenBright(text), chalk.yellowBright(value))
}

export const logError = (e) => {
  log(`${chalk.redBright(e.message)}, ${chalk.cyanBright(e.stack)}`)
}

export const logInfo = (context, value) => {
  log(`${chalk.blackBright(context)}, ${chalk.cyanBright(JSON.stringify(value))}`)
}
