const date = '20170929'
const total = 24 * 60 / 5
// const total = 10 * 60 / 5

let time = ''
let hours = 0
for (let i = 0; i < total; i++) {
  const current = i * 5 % 60
  if (current === 0 && i > 11) {
    hours++
  }

  time = `${hours < 10 ? `0${hours}` : hours}${current < 10 ? `0${current}` : current}`
  console.log(`http://www.weather.gov.sg/files/rainarea/50km/v2/dpsri_70km_${date}${time}0000dBR.dpsri.png`)
}
