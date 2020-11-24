const Generator = require('yeoman-generator')

module.exports = class extends Generator {
  prompting(){
    return this.prompt([
      {
        type: "input",
        name: "name",
        message: "请输入您的姓名",
        default: this.appname  // appname 为项目生成目录名称
      },{
        type: "input",
        name: "age",
        message: "请输入您的年龄",
        default: 18
      }
    ]).then(answers => {
      this.answers = answers
    })
  }
  writing () {

    this.fs.write(
      this.destinationPath('temp.txt'),
      Math.random().toString()
    )

    const tmpl = this.templatePath('fra.txt')
    const output = this.destinationPath('intro.txt')

    const context = Object.assign({}, { name: "Jack", age: 18 }, this.answers )

    this.fs.copyTpl(tmpl, output, context)
  }
}
