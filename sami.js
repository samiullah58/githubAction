const express = require('express')
const fs = require('fs')

fs.writeFile('aqib.txt', 'sami is good', (err) => {
  console.log(err)
})
