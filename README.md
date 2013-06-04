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

Open up ```http://localhost:4000``` in your browser to view the site.


### Breakpoint

Media queries are written using the Breakpoint project.

```
gem install breakpoint
```

- [Breakpoint project on Github](https://github.com/Team-Sass/breakpoint)


### Singularity

Our grid framework comes from the Singularity project.

```
gem install singularitygs
```

- [Singularity project on Github](https://github.com/Team-Sass/Singularity)
- [Singularity documentation](https://github.com/Team-Sass/Singularity/wiki/Creating-Grids)

### Bundler
Bundler ensures we use the same gem versions across all environments

```
gem install bundler
```

Then we can run compass with:
```
bundle exec compass watch
```


## Code guidelines

**Tabs/indents**

Set your tabs/indents to 2 spaces in your text editor.

**Comments**

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
