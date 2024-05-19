const express = require('express')
const cors = require('cors')
const app = express()

const port = 3000

app.use(cors())

let dog  = new Object()
let cat = new Object()
let horse = new Object()
let lion = new Object()
let axolotl = new Object()

dog.img = 'https://www.z-pracowni.pl/25603-large_default/obraz-na-plotnie-50x40cm-rudy-piesek.jpg'
dog.img2 = 'https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*'
dog.attr = new Object()
dog.attr.weigh = 25
dog.attr.maxAge = 15
dog.attr.speed = 48
dog.desc = 'dog desc'

cat.img = 'https://www.pap.pl/sites/default/files/styles/main_image/public/202312/pap_20060522_089.jpg?itok=vpGbp_36'
cat.img2 = 'https://static01.nyt.com/images/2024/03/05/autossell/00TB-MEOWS/00TB-MEOWS-square640.jpg'
cat.attr = new Object()
cat.attr.weigh = 2
cat.attr.maxAge = 10
cat.attr.speed = 35
cat.desc = 'cat desc'

horse.img = 'https://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTwNtVZs9UtjUQwIEKQLM0oJgqTDOcn5FdlloNbcdStp2Y7Px5r_RI59PgySSTxNPyz'
horse.img2 = 'https://labgenvet.ca/wp-content/uploads/2020/05/wild-horses-1760581_640-pixabay.png'
horse.attr = new Object()
horse.attr.weigh = 450
horse.attr.maxAge = 25
horse.attr.speed = 65
horse.desc = 'horse desc'

lion.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/1200px-Lion_waiting_in_Namibia.jpg'
lion.img2 = 'https://cdn.britannica.com/30/150930-120-D3D93F1E/lion-Namibia.jpg'
lion.attr = new Object()
lion.attr.weigh = 450
lion.attr.maxAge = 25
lion.attr.speed = 65
lion.desc = 'lion desc'

axolotl.img = 'https://i.natgeofe.com/n/de94c416-6d23-45f5-9708-e8d56289268e/naturepl_01132178_square.jpg'
axolotl.img2 = 'https://c402277.ssl.cf1.rackcdn.com/photos/20852/images/magazine_medium/axolotl_WWsummer2021.jpg?1618758847'
axolotl.attr = new Object()
axolotl.attr.weigh = 450
axolotl.attr.maxAge = 25
axolotl.attr.speed = 65
axolotl.desc = 'axolotl desc'

let zoo = new Object()
    zoo.dog = dog
    zoo.cat = cat
    zoo.horse = horse
    zoo.lion = lion
    zoo.axolotl = axolotl

app.get('/animal', (req, res) => {
	console.log(zoo[req.query.name])
  res.status(200).json(zoo[req.query.name])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



