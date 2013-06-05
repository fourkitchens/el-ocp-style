# EL Online Curriculum Pilot style guide

Style guide for the Online Curriculum Pilot website.

## Requirements

### Jekyll

**How to install Jekyll**

* You must have the latest version of Xcode installed (4.6.x), which can be downloaded from the App Store.
* If you have an older version of Xcode, you must uninstall it first.
* After the new version of Xcode is installed, go to ```Xcode > Preferences > Downloads > Command Line Tools``` and click "Install".

Now, let's try installing Jekyll.

```
gem install jekyll
```

If you're getting an error about RubyGems being out of date, the following command will update RubyGems to the latest version.

```
gem update --system
```

**Running Jekyll**

```
cd my-awesome-site
jekyll serve -w
```

Open up [http://localhost:4000](http://localhost:4000) in your browser to view the site.


### Breakpoint

Media queries are written using the [Breakpoint](https://github.com/Team-Sass/breakpoint) project.

```
gem install breakpoint
```

### Singularity

Our grid framework comes from the [Singularity](https://github.com/Team-Sass/Singularity) project.

```
gem install singularitygs
```

- [Singularity documentation](https://github.com/Team-Sass/Singularity/wiki/Creating-Grids)

### Bundler

Bundler ensures we use the same gem versions across all environments.

```
gem install bundler
```

Then we can run compass with:
```
bundle exec compass watch
```

### Git

Please create a feature branch whenever making new changes.

**Creating a branch**

```
# from master
git pull
git checkout -b my-awesome-feature

# make changes
git add FILE1 FILE2 ...
git commit -m "Message"
```

**Push branch to Github**

```
# initial push
git push -u origin my-awesome-feature
 
# subsequent pushes
git push
```

**Pull requests**

Now you can go to [github.com/fourkitchens/el-ocp-style](http://github.com/fourkitchens/el-ocp-style) and [initiate a pull request](https://help.github.com/articles/using-pull-requests#initiating-the-pull-request).

## Code guidelines

**Tabs/indents**

Set your tabs/indents to 2 spaces in your text editor.

**Sass comments**

You can use ```//``` for both section headings, as well as inline comments.

```
// Headings

h1 {
  font-size: 2em; // Sets H1 to 32px
}
```

## References
- http://jancbeck.com/articles/btconf-brad-frost
- https://github.com/bradfrost/patternlab
- https://github.com/bjankord/Style-Guide-Boilerplate
