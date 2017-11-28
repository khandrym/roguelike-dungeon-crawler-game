* Check if Git installed  
`git --version`

* Check Git configuration  
`git config --list`

* If configuration is not satisfying
  * Configure your Git name  
  `git config --global user.name "Andrii Khandymailov"`

  * Configure your Git email address  
  `git config --global user.email "khandrym@gmail.com"`

  * Configure your Git username  
  `git config --global user.username "khandrym"`

  * Configure Git to handle line endings properly (for Windows)  
  `git config --global core.autocrlf true`

* Initialize repository  
`git init`

* Commit changes

* Add the project to GitHub  
https://help.github.com/articles/adding-an-existing-project-to-github-using-the-command-line/

* Add origin
`git remote add origin https://github.com/khandrym/--app-name--.git`

* Push changes to Bitbucket  
`git push -u origin master`
