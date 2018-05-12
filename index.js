var workshop = require("workshopper-adventure")({
  appDir: __dirname,
  languages: ["es"],
  header: require("workshopper-adventure/default/header"),
  footer: require("./lib/footer.js")
})

workshop.addAll(
  require("./menu.json").map(function(problem) {
    return {
      name: problem,
      fn: function() {
        var p = problem.toLowerCase().replace(/\s/g, "-")
        var dir = require("path").join(__dirname, "problems", p)
        return require(dir)
      }
    }
  })
)

module.exports = workshop
