const express = require('express')
const fs = require('fs')
fs.mkdir('sami.txt', (err) => {
    console.log(err)
})