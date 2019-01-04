const util = require('util')
const exec = util.promisify(require('child_process').exec)

const DUMMYENV = {
  printerName: 'RICOH_MP_C4503',
  printerInput: 'Manual',
}

module.exports = async function print(filename) {
  const { printer, input } = process.env

  const { stdout, stderr } = await exec(`/usr/bin/lpr -P ${printer} -o InputSlot=${input || 'Standard'} ${filename}`)
}
