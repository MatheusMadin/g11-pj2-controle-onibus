var express = require('express');
var router = express.Router();

const { PrismaClient, Prisma} = require('@prisma/client');
const prisma = new PrismaClient ({errorFormat:'minimal'});

function exceptionHandler(e) {
  //respostas não tratadas 
  let error = {
    code: 500,
    message: "Internal Server Error"
  }
  //respostas exceções do prisma
  if (
    e instanceof Prisma.PrismaClientKnownRequestError ||
    e instanceof Prisma.PrismaClientValidationError
  ) {
    error.code = 400;
    error.mensage = e.message;
  }
  return error;
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
