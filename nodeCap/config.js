const rest = new(require('rest-mssql-nodejs'))(
{
    user:"sa",
    password:"12345",
    server:"127.0.0.1",
   // server:"LAPTOP-U0TUCMV9\SQL19",
    database:"SAKILA",
}
)

module.exports=rest;