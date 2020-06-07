import {Command, flags} from '@oclif/command'
const fs = require('fs')
const handlebars = require('handlebars')
const download = require('download-git-repo')

export default class Create extends Command {
  static description = 'Init a new project'

  static examples = [
    '$ iron new -n projectname',
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'project name', required: true}),
  }

  static args = [{name: 'file'}]

  async run() {
    const {flags} = this.parse(Create)
    const projectName = flags.name
    if (!projectName) {
      this.log('project name is required, for example: iron new -n projectname')
      throw new Error('project name not provided')
    }
    const projectPath = `./${projectName}`
    const packagePath = `${projectPath}/package.json`
    const meta = {
      name: projectName,
    }
    download('direct:https://github.com/moxiaohu/iron-express-starter.git', projectPath, {clone: true}, (err: string | undefined) => {
      this.log(err ? err : 'Download template project success')
      try {
        const content = fs.readFileSync(packagePath).toString()
        const result = handlebars.compile(content)(meta)
        fs.writeFileSync(packagePath, result)
      } catch (error) {
        this.log(error)
      }
    })
  }
}
