require('dotenv/config')
const express = require('express')
const shortUrl = require('node-url-shortener');

const app = express()
app.use(express.json())

app.post('/', (request, response) => {

  const linkUrl = request.body

  shortUrl.short(linkUrl, function(err, url){
      const resLink = url
      console.log(resLink);
      return response.status(200).json(resLink)
  });

})
app.listen(process.env.BACKEND_PORT, () => {
  console.log(`Backend run is`, process.env.BACKEND_PORT)
})