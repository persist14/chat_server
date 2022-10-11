let PORT = 18300

if(process.env.NODE_ENV === 'development') {

}
if(process.env.NODE_ENV === "production") {
    PORT = 18400
    console.log(PORT)
}

module.exports = {
    PORT,
    ENV: process.env.NODE_ENV
}