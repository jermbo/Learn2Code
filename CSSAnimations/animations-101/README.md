# Animation 101

This section is all about the what and where. We are going to learn the basics necessary to start animating in CSS. We will create some examples that will demonstrate the fundamentals and work our way up to practical examples.

Before we can get into the details about how to animate, there are a few prerequisites that you need to have an understanding of. We will cover terms to know, what items can be animated, what types of animations do we have at our disposal, and how animations are triggered.  

## Prerequisites

### What is Animation

**an-i-ma-tion** /ˌanəˈmāSH(ə)n/ ***noun*** : [source](https://www.google.com/search?q=what+is+animation)

1. the state of being full of life or vigor; liveliness.
2. the technique of photographing successive drawings or position of puppets or models to create an illusion of movement when the movie is show in sequence.

We are going to focus on the second definition, more specifically "the illusion of movement".

### What can be animated?

It is safe to state that anything you want to animate is able to be animated. Though there are exceptions to the rules, and those exceptions are : display || font-family || position || text-align || visibility. Out side of that, everything else can be animated. *

I have put together a [set of fun examples](https://codepen.io/pbCodeSchool/full/Qpqvpp/) of things that I typically animate. In that example you see I am animating a number of properties. All animations are triggered on the hover of the .item class. Some animate just one property and some animate multiple properties. What you choose to animate is entirely up to you and the situation you are in. We will focus on the "When, and Why" of animation at a later date.

[^*]: I'm sure I am missing some items that cannot be animated, but I don't run into a whole bunch and the information is sparse out there.

### Triggering Animation

We have two ways to trigger an animation in CSS. When the user hovers over an item or when a class changes on the element.

The hover state is trigger when the user mover the cursor over the bounding box on an element. The CSS pseudo class is then triggered and all the rules defined in that block are fired.

A class change requires JavaScript. Basically JavaScript adds or removes a class. And based on that change, if the transition property is set, this will trigger an animation. Either to a new state, if the class was added. Or back to a default state, if the class was removed.

### Types of Animation

CSS offers two ways to animate things. Transition or Animation + Keyframes. In this lecture we will be focusing mainly on the Transition property, but we will break down the syntax of each option.

#### Transition

```CSS
.element{
  transition: [property] [duration] [ease] [delay];
}
```

The `.element` is the item in the DOM you want to animate. This is your normal CSS Selector.

The `transition` property is what is triggering the animation and that takes minimum two properties. `Property` and `Duration` are the two properties required. And if you think about it, that makes sense. What do you want to animate and how long does that take. Let's look at an example.

```CSS
.box{
  width: 50px;
  height: 50px;
  transition: height 0.25s ease;
}

.box:hover{
  height: 150px;
}
```

#### Animation and @Keyframes

Animation and @Keyframes go hand in hand. The `animation` property is applied to your element. Then the `@keyframes` are defined outside a selector and hold the values of what you want to animate.

Here is a break down of the CSS syntax for animate.

```CSS
.element{
  animation: [name] [duration] [ease] [delay] [iteration] [direction] [fill-mode] [play-state];
}
```

Here is a break down of the CSS syntax for `@keyframes`.

```
@keyframes [name]{
  from{
    [styles];
  }
  to{
    [styles];
  }
}
```

Let's see a real example and break everything down. [CodePen](https://codepen.io/pbCodeSchool/pen/bqYVoa)

```CSS
.box{
  display: inline-block;
  width: 200px;
  height: 200px;
  position: relative;
  background: cyan;
  animation: superanimation 2s ease-in-out 0s infinite alternate;
}

@keyframes superanimation{
  from{
    height: 200px;
    background: cyan;
  }
  to{
    height: 500px;
    background: magenta;
  }
}
/* Or */
@keyframes superanimation{
  0%, 100%{
    height: 200px;
    background: cyan;
  }
  25%, 75%{
    width: 50%;
    height: 500px;
    background: magenta;
    transform: rotate(720deg) translate(50%, 50%);
  }
}
```

## Example time

Now that we have the prerequisites down we can move onto applying the knowledge to examples.

### Starting off easy

Let's start with something easy. On hover, the box should grow in width and height. *Make sure you have a element with a class of box in the html*

```CSS
.box{
  background: cyan;
  width: 100px;
  height: 100px;
  transition: height 0.5s ease;
}
.box:hover{
  height: 250px;
}
```

Now, let's animate its width as well.

```CSS
.box{
  background: cyan;
  width: 100px;
  height: 100px;
  transition: height 0.5s ease, width 1.5s ease-in;
}
.box:hover{
  width: 25%;
  height: 250px;
}
```

Maybe you want to rotate it, because... you can.

```CSS
.box{
  background: cyan;
  width: 100px;
  height: 100px;
  transition: height 0.5s ease-out, width 0.75s ease-in, transform 0.25s ease;
}
.box:hover{
  width: 125%;
  height: 250px;
  transform: rotate(225deg);
}
```

I suggest you play around with the different properties, speeds, and eases to see what you can do.

These examples are cool, but the are not really practical. Let's move onto something a little more useful.

### Somethin a little more useful

Button hovers are an easy win when it comes to user experience. Just a subtle animation from one color to the other makes the site feel better. Let's look at what it would take to do that.

```CSS
.btn{
  background: #f5f5f5;
  color: cornflowerblue;
  transition: background 0.5s ease, color 0.5s ease;
}
.btn:hover{
  background: cornflowerblue;
  color: #f5f5f5;
}
```

That's pretty! Maybe we can add some box-shadow to help lift it off the page.

```CSS
.btn{
  background: #f5f5f5;
  color: cornflowerblue;
  transition: background 0.5s ease, color 0.5s ease, box-shadow 0.5s ease;
}
.btn:hover{
  background: cornflowerblue;
  color: #f5f5f5;
  box-shadow: 0 10px 4px -7px rgba(0,0,0,0.75);
}
```

Take the transition property off the `.btn` element. See what that looks like with out it. The transition makes it a much better experience.

Buttons are cool, but what about something a little more complicated?

### Something a little more complicated

On hover of an image, the image should dim in opacity, convert to gray scale, have a highlight animate from left to right, and title should fade in from the top.  That sounds like a lot, so lets break it done into little segments. First let's create the markup.

```HTML
<figure class="overlay">
  <img src="http://placecage.com/gif/400/150" alt=""/>
  <figcaption>
    <h3><a href="#">Place Cage</a></h3>
  </figcaption>
</figure>
```

Now, let's set up our initial state in CSS.

```CSS
.overlay {
  background-color: #045e78;
  color: #ffffff;
  display: inline-block;
  font-size: 16px;
  width: 100%;
  overflow: hidden;
  position: relative;
}

.overlay * {
  box-sizing: border-box;
  transition: all 0.45s ease;
}

.overlay:after {
  background-color: white;
  opacity: 0.6;
  top: 0;
  bottom: 0;
  content: '';
  left: -75%;
  position: absolute;
  width: 25%;
  box-shadow: 0 0 100px white;
  transform: skew(-60deg);
  transition: all 0.6s ease;
}

.overlay img {
  vertical-align: top;
  width: 100%;
}

.overlay figcaption {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  line-height: 1em;
  opacity: 0;
}

.overlay h3 {
  position: absolute;
  left: 10px;
  bottom: 30px;
  font-size: 1.4em;
  font-weight: 400;
  margin: 0;
  text-transform: uppercase;
}

.overlay a{
  color: white;
}
```

Next, we animate it.

```CSS
.overlay:hover img {
  opacity: 0.24;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}

.overlay:hover:after {
  left: 200%;
}

.overlay:hover figcaption {
  opacity: 1;
}

.overlay:hover h3{
  bottom: 10px;
}
```

Notice we have to trigger hover and then animate other elements. We will go more in depth with this in future lectures.

Cool resource for inspiration and markup required. [LittleSnippets.net](http://littlesnippets.net/)

## Conclusion

Animation is all about experimentation. Everything in these examples are mean to be tweaked with. The point is to make the animation to enhance you user experience. If it doesn't feel "right" to you, chances are your users are going to be off put by it as well. Tweak everything until its just right.
