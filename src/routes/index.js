const { loggerUtil } = require("../utils/logger")
const auth = require("./auth")

const routes = (app) => {
    // Test Route for API
    app.get("/welcome", (req, res) => {
        loggerUtil("Welcome API called.")
        res.send("Welcome to API for Wellness Spoiled.\n Servers are Up and Running")
    })

    app.use("/v1/api" , auth)

    return app
}


module.exports = routes