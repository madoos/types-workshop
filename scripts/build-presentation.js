const R = require('ramda')
const fs = require('fs')
const path = require('path')
const revealOpt = require('../reveal-md.json')

const EOL = require('os').EOL
const SRC_PATH = path.join(__dirname, '../presentation/')
const VERTICAL_SEPARATOR = `${EOL}${revealOpt.verticalSeparator}${EOL}`
const SEPARATOR = `${EOL}${revealOpt.separator}${EOL}`
const SLIDES_PATH = path.join(__dirname, '../slides.md')
const isMdFile = name => name.includes('.md')
const folders = R.pipe(R.unary(fs.readdirSync), R.reject(isMdFile))

const makeVerticalSliders = src => {
    const slides = fs.readdirSync(src)
    const verticalSliders = slides
        .map(R.concat(src + '/'))
        .map(R.unary(fs.readFileSync))

    return R.intersperse(VERTICAL_SEPARATOR, verticalSliders)
}

const makeSliders = (src, dest) => {
    const mainSlider = fs.createWriteStream(dest)
    const horizontalSliders = folders(src).map(R.concat(src))
    const verticalSliders = R.map(makeVerticalSliders, horizontalSliders)

    for (const content of verticalSliders) {
        mainSlider.write(content.join(''))
        mainSlider.write(SEPARATOR)
    }

    mainSlider.end()
}

makeSliders(SRC_PATH, SLIDES_PATH)
