# Whats new with Bootstrap 4

In short... a lot is new! Let's explore some of the major changes coming to Bootstrap 4.

## Highlights

* Officially dropped support for IE8 and below.
* Flexbox support
  * Still support for IE 9. So, if you need to support that you can turn off flexbox or you should include a pollyfill.  [(option)](https://jonathantneal.github.io/flexibility/)
* No more LESS support. 
* Still built on Grunt.
* Grid system is now "rems"
* Reboot.css - A new reset component
* ES6 Support
* 30% Smaller Footprint



## Intro

I should start of saying, I don't know when this is coming out of beta and be 'production' ready. ( As of this writing in mid February 2017 ). That being said, it seems as though it's ready for prime time. In this repo I am going to show off some of the cool thing that I use in practice for clients. 

All the example code can be found at our [codepen](http://codepen.io/pbCodeSchool/pen/YNmKRM) account. @([pbCodeSchool](http://codepen.io/pbCodeSchool/)) 

### The Grid

So we all love bootstrap for the super flexible grid. It's gotten even better that now that we have Flexbox at our disposal. You can add automatic columns just by specifying a class of `col`.

```html
<div class="container">
   <div class="row">
    <div class="col">.col</div>
    <div class="col">.col</div>
    <div class="col">.col</div>
    <div class="col">.col</div>
  </div>
</div>
```

This does exactly what you think it should, gives you four equal columns. 

You can specify more space for one like so.

```html
<div class="container"> 
  <div class="row">
    <div class="col">.col</div>
    <div class="col-3">.col</div>
    <div class="col-5">.col</div>
    <div class="col">.col</div>
  </div>
</div>
```

You still have the control to specify what you want at different break points. 

```html
<div class="container">
  <div class="row">
    <div class="col-12 col-md-4 col-lg-8">
    	.col.col-md-4.col-lg-8
    </div>
    <div class="col-12 col-md-4 col-lg-2">
    	.col.col-md-4.col-lg-2
    </div>
    <div class="col-12 col-md-4 col-lg-2">
    	.col.col-md-4.col-lg-2
    </div>
  </div>
</div>
```

Bootstrap keeps the same approach for the mobile first stance. You have 5 grid options at your disposal. ( [more info](https://v4-alpha.getbootstrap.com/layout/grid/#grid-options) ) 

|                 | Extra Small   | Small    | Medium   | Large    | Extra Large |
| --------------- | ------------- | -------- | -------- | -------- | ----------- |
| size            | < 576px       | >= 576px | >= 786px | >= 992px | >= 1200px   |
| max container   | none ( auto ) | 540px    | 720px    | 960px    | 1140px      |
| prefix          | .col-         | .col-sm- | .col-md  | .col-lg  | .col-xl     |
| gutter width    | 30px          |          |          |          |             |
| nestable        | yes           |          |          |          |             |
| offsets         | yes           |          |          |          |             |
| column ordering | yes           |          |          |          |             |
|                 |               |          |          |          |             |

## Cards

Cards are pretty cool.

```html
<div class="container">
  <div class="demo-card">
    <div class="card">
      <p class="card-header">A card header</p>
      <img class="card-img-top" src="http://lorempixel.com/500/200">
      <div class="card-block">
        <h4 class="card-title">Card title</h4>
        <h6 class="card-subtitle text-muted">Support card subtitle</h6>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
      <div class="card-block">
        <a href="#" class="card-link">Card link</a>
        <a href="#" class="card-link">Another link</a>
      </div>
      <div class="card-block">
        <a href="#" class="btn btn-primary">Button</a>
      </div>
      <p class="card-footer text-muted">
        This is a card footer
      </p>
    </div>
  </div>
</div>
```

More examples at [here](http://codepen.io/ncerminara/pen/gpVXxz?editors=1000).

