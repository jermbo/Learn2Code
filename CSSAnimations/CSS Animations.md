# CSS Animations

CSS Animations make it possible to animate transitions from one CSS style configuration to another. Animations consist of two components, a style describing the CSS Animation and as set of keyframes that indicate the start nd end states of the animation's style, as well as possible intermediate way points. [Source](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations) 

Before we can get into the details about how to animate, there are a few prerequisites that you need to have an understanding of. We will cover terms to know, what items can be animated, what types of animations do we have at our disposal, and how animations are triggered.  

## Prerequisites

### What is Animation

**an-i-ma-tion** /ˌanəˈmāSH(ə)n/ ***noun*** : [source](https://www.google.com/search?q=what+is+animation)

1. the state of being full of life or vigor; liveliness. 
2. the technique of photographing successive drawings or position of puppets or models to create an illusion of movement when the movie is show in sequence. 

We are going to focus on the second definition, more specifically "the illusion of movement". 

### What can be animated?

It is safe to state that anything you want to animate is able to be animated. Though there are exceptions to the rules, and those exceptions are : display || font-family || position || text-align || visibility. Out side of that, everything else can be animated. *

I have put together a [set of fun example](https://codepen.io/pbCodeSchool/full/Qpqvpp/) of things I typically animate. In that example you see I am animating a number of properties. All are triggered on hover of the .item class. Some do just one property animation and some do multiple property animations. What you choose to animate is entirely up to you and the situation you are in. We will focus on the "Where, When, and Why" of animation at a later date. 

[^*]: I'm sure I am missing some items that cannot be animated, but I don't run into a whole bunch and the information is sparse out there.

### Triggering Animation

We have two ways to trigger an animation in CSS. When the user hovers over an item or when a class changes on the element. 

The hover state is trigger when the user mover the cursor over the bounding box on an element. The CSS pseudo class is then triggered and all the rules defined in that block are fired. 

A class change usually requires JavaScript. Basically, when a new class is added, or an old class is removed, this triggers an animation to run based on what was added or what the default state is. Depending on if the class was added or removed.

We will be focusing on the hover trigger for this lecture.

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

