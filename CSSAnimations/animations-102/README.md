# Animation 202

In this lesson we will be expanding on the previous session. Please familiarize yourself with [Animations 101](https://github.com/pbcodeschool/Learn2Code/tree/master/CSSAnimations/animations-101) if you are not comfortable with the animation basics.

Last session we talked about what animation is and how it can be applied to CSS elements. We talked about where to use it, what properties you can animate, as well as properties you cannot animate. We learned how to animate one property at a time and triggered on hover. In this session we will be taking those concepts a little further. We will be triggering multiple properties to animate as well as multiple items at the same time. Here is a [CodePen](https://codepen.io/pbCodeSchool/pen/wdaNKR) of what we will be building in this session.

##  Resources

Before we go any further, I want to list out a few resources that you can use for inspiration in both style and code.
* [CodePen.io](http://codepen.io) - Use this place as inspiration and a learning tool. There are a lot of people posting their code and animations here, why not learn from it.
* [Little Snippets](http://littlesnippets.net/) - A place dedicated to CSS animation. They use CodePen as their platform for experimentation and they have curated lists of examples that you can use in your projects right away.
* [Easing.net](http://easings.net/) - Easing is a big part of any good animation. There are a limited number of built in easing functions in CSS, ease | ease-in | ease-out | ease-in-out. If these don't enhance your animations in just the right way, you can utilize cubic-bezier and supply your own ease. This resource gives you the numbers you need to accomplish different easing's.
* [Motion & Meaning](http://motionandmeaning.io/) - Animation should enhance the user experience. Here are some well thought out explanations of the principles of animation.

## Style 1

### Where to use it?
In this example, you find an image that, when hovered, will animate a background and text. This could be use in a number of different situations. Maybe an image gallery that would reveal title and photographer. Or, it could be a bunch of headshots that would reveal name and position at a company. Or, an image relating to an article and hover would reveal title of post and author. Really, your imagination is the limit.

### The Setup

The set up happens in two parts. Let's start with the HTML. Bootstrap aside, the markup looks like this.

```HTML
<figure class="style1">
    <img src="https://unsplash.it/500/500" alt="">
    <figcaption>
        <h3>Some Tittle</h3>
        <h5>Some text about something</h5>
    </figcaption>
    <a href="#"></a>
</figure>
```

It's pretty straight forward. You have your figure parent and all the information about this photo as children or grand children. Now, this is set up, we move on to the end state.

There are two ways to approach animating multiple elements in CSS. The way I am going to teach makes the most sense to me, but I encourage you to challenge my way of thinking and experiment. Find the way that makes sense to you. Ultimately, you are the one going to be creating the code necessary, do what feels most comfortable to you.

I like to style the end state. What is this piece going to look like when the animation is done. Once that is styled, I work on the starting positions of everything. If you look at the example and hover the element, you will see what I mean by the end state. This design calls for a transparent black overlay that is `10px` away from ever edge. The text should be smack in the middle of the content. Let's set that up. *I am removing all the vendor prefixes for simplicity sake. You might need to add this in your project depending on browser support.*

```CSS
.style1 {
  color: white;
  display: inline-block;
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.4);
  width: 100%;
  height: auto;
}

.style1:before {
  content: '';
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.9);
}

.style1 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.style1 figcaption {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.style1 h3,
.style1 h5 {
  position: relative;
  opacity: 1;
}

.style1 h3 {
  transform: translateY(0);
}

.style1 h5 {
  transform: translateY(0);
}
```
Now that we have the end result of what we want our animation to be, let's start moving things off stage.

```CSS
.style1 h3,
.style1 h5 {
  position: relative;
  opacity: 0;
}

.style1 h3 {
  transform: translateY(-100%);
}

.style1 h5 {
  transform: translateY(100%);
}

.style1:before {
  content: '';
  position: absolute;
  top: 100%;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.9);
}
```
Note the differences in the h3 and h5. Their opacity has been set to 0, and individual transform for positive and negative 100% on the translateY definition. The 'before' pseudo element has now moved down to 100% top. This places it off the viewable area of the image.

We have now set up the initial state of the effect. All we need to do is trigger hover to change the elements states. You can do that like so :

```CSS
.style1:hover h3,
.style1:hover h5 {
  opacity: 1;
  transform: translateY(0);
}

.style1:hover:before {
  top: 10px;
}
```

If we are to check the browser and verify what is going on, you will notice things are not animating. They are just appearing in the place. This is because we did not set a `transition` property on each element. Yes, each element you want to animation needs to know that it is going to be animated. In the first session we talked about, in detail, what the `transition` property is and the various arguments you can manipulate. Let's add a `transition` to all the elements start position.

```CSS
.style1:before {
  content: '';
  position: absolute;
  top: 100%;
  bottom: 10px;
  left: 10px;
  right: 10px;
  background-color: rgba(0, 0, 0, 0.9);
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition-delay: 0.05s;
}

.style1 a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
}

.style1 figcaption {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.style1 h3,
.style1 h5 {
  transition: all 0.35s ease;
  position: relative;
  opacity: 0;
}

.style1 h3 {
  transform: translateY(-100%);
  transition-delay: 0.25s;
}

.style1 h5 {
  transform: translateY(100%);
  transition-delay: 0.32s;
}
```

Now, save and refresh your page. Things should be animating as expected.


## Conclusion

As stated in the last session, animation is all about experimentation. Take a look at the other examples displayed in the [CodePen](http://codepen.io/pbCodeSchool/pen/wdaNKR) and pick the code apart. See what it's doing and play around with the variables. What can you change? Does it make sense as to why it is now animating that way? Play and have fun. One thing I would like to leave you with on this topic is; if the animation feels off to you it is probably wrong and feels off to your users too. Tweak the animation until it feels just right.
