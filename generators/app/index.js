var mkdirp = require('mkdirp');

var Generator = require('yeoman-generator');

module.exports = class extends Generator {
    writing() {
        this.fs.copy(
            this.templatePath('data.xml'),
            this.destinationPath('data.xml')
        );
        this.fs.copy(
          this.templatePath('layout.xml'),
          this.destinationPath('layout.xml')
        );
        // not necessary, just a hint for organizing things
        mkdirp.sync('fonts');
        mkdirp.sync('images');
        this.log('run `sp` on the command line to get the PDF');
    }
};
