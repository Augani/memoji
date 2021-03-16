<div align="center" id="top"> 
  <img src="./.github/app.gif" alt="Memoji" />

  &#xa0;

  <!-- <a href="https://memoji.netlify.app">Demo</a> -->
</div>

<h1 align="center">Memoji</h1>

<p align="center">
  <img alt="Github top language" src="https://img.shields.io/github/languages/top/augani/memoji?color=56BEB8">

  <img alt="Github language count" src="https://img.shields.io/github/languages/count/augani/memoji?color=56BEB8">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/augani/memoji?color=56BEB8">

  <img alt="License" src="https://img.shields.io/github/license/augani/memoji?color=56BEB8">

  <!-- <img alt="Github issues" src="https://img.shields.io/github/issues/augani/memoji?color=56BEB8" /> -->

  <!-- <img alt="Github forks" src="https://img.shields.io/github/forks/augani/memoji?color=56BEB8" /> -->

  <!-- <img alt="Github stars" src="https://img.shields.io/github/stars/augani/memoji?color=56BEB8" /> -->
</p>

<!-- Status -->

<!-- <h4 align="center"> 
	🚧  Memoji 🚀 Under construction...  🚧
</h4> 

<hr> -->

<p align="center">
  <a href="#dart-about">About</a> &#xa0; | &#xa0; 
  <a href="#sparkles-features">Features</a> &#xa0; | &#xa0;
  <a href="#rocket-technologies">Technologies</a> &#xa0; | &#xa0;
  <a href="#white_check_mark-requirements">Requirements</a> &#xa0; | &#xa0;
  <a href="#checkered_flag-starting">Starting</a> &#xa0; | &#xa0;
  <a href="#memo-license">License</a> &#xa0; | &#xa0;
  <a href="https://github.com/augani" target="_blank">Author</a>
</p>

<br>

## :dart: About ##

This is a project to provide memoji images based on a preference

## :rocket: How it works ##


```js
# To use the api, this is the main link
`https://memoji.herokuapp.com/{version}/{quantity}/{gender}/{race}`

# The various params are as follows

# Version number will always remain the same since its the first
 version = v1

# Quantities supported are all ie. All the photos currently supported or 1 which is randomly generated
 quantity = Either 'all' || 1

# Either male or female
 gender(optional) = Either "m" || "f"


# Either black or white
 race(optional) = Either "b" || "w"


The gender or race param is optional, when not provided, the api will return a random memoji

This project is using images by egokomarov, thanks to him


```

## :memo: License ##

This project is under license from MIT. For more details, see the [LICENSE](LICENSE.md) file.


Made with :heart: by <a href="https://github.com/augani" target="_blank">Augustus Otu</a>

&#xa0;

<a href="#top">Back to top</a>
