# how to contribute?

## preparing presentation

* npm run dev: to launch the presentation
* Add information in the presentation folder
* With every new change in the presentation folder the slides.md file is built
* To separate vertical slides use '--'
* To separate horizontal slides use '---'
* The sliders separator can be defined in reveal-md.json

## Add challenges

To analyze the results of the challenges the stdout or console.log is used.

* Add the problem in the problem folder
* Add the solution in the solution folder

problem folder structure:

```bash
problems
++your-problem
++--index.js (copy the file)
++--problem_es.md
++--solution_es.md
++--template.js (this file will be copied to the working directory of the user of the cli
)
```
