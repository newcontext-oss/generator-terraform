'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);
  }
  writing() {
    this.fs.copy(
      this.templatePath('main.tf'),
      this.destinationPath('main.tf')
    )
    this.fs.copy(
      this.templatePath('outputs.tf'),
      this.destinationPath('outputs.tf')
    )
    this.fs.copy(
      this.templatePath('variables.tf'),
      this.destinationPath('variables.tf')
    )
    this.fs.copy(
      this.templatePath('Gemfile'),
      this.destinationPath('Gemfile')
    )
    this.fs.copy(
      this.templatePath('.kitchen.yml'),
      this.destinationPath('.kitchen.yml')
    )
    this.fs.copy(
      this.templatePath('test/fixtures/default/main.tf'),
      this.destinationPath('test/fixtures/default/main.tf')
    )
    this.fs.copy(
      this.templatePath('test/integration/default/controls/test.rb'),
      this.destinationPath('test/integration/default/controls/test.rb')
    )
  };
};
