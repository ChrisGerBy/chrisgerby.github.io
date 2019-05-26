# Presentation "Canvas VS SVG"
## Transcript of presentation

Hello! My name is Krystsina. Today I’m going to talk about  Canvas and SVG technologies, what they have in common and what are the differences between them.

Let begin with common features.

Both Canvas and SVG are used **to work with graphics**. We can create **graphs, lines, pictures, images** directly on our website.
They are already included into the **standards** and can be correctly interpreted by the **browsers**.
And both of them are **HTML elements** and can be directly put on the page of our website.

On this picture we see two lines.  They are obviously different. So, that is the most important question: which technology to use, how to define which of them is better in every single case.
In this case I would choose the first line because its quality is better. So, this is one of the most important things about canvas and SVG. When we create a **canvas-element**, it will be **a bitma**. But when we create **SVG** which stands for Scalable Vector Graphics, our picture will be **a vector image**. And exactly the first line is created as a SVG-line.  It is recommended to use it when we need a **high quality by resizing our picture**s.

Another important difference is the knowledge you need to create and work with canvas and SVG. For **Canvas** you will need **HTML and JS** and for **SVG** – **HTML and XML**.

Let’s see how it works.

To begin with canvas, we have to add this HTML-element into our file and to set the attributes **id, width and height**. We have just create the field where we are going to paint. 
Now I switch to the JavaScript-file. First of all, we **get our canvas**. And second, we get the **context of this canvas**. In most cases we use  2-dimensinal context. So, we will see this example.  
And now we begin to paint. Our canvas has a black border. And what we are painting is inside. We can create rectangles, lines, circles and other shapes. On this slide there are two examples of creating **rectangles**. Left we see a filled rectangle and right we see an empty rectangle. So, the possibilities are really impressive 

To create the **line**, we need to define two pairs of coordinates: the first is the point where our line begins and the second is the coordinates of the end of the line. **The method stroke ()** is used to draw this line. First, we have programmed our line. And then we stroke it, so we draw it.

And one more example: how to create **circles**. We use a method arc(), where we define the coordinates of the center of our circle, radius, start angle and end angle. To illustrate what the two last values mean I have shown this graph. When we need a closed circle, we begin with the angle 0 and we end with two PI. We can also draw a half of a circle or a certain arc. It depends on situation and what we need.

I have just shown primitive examples, but the canvas has really impressive possibilities. We can create some interesting animations and effects on our website. And also create games where we interact with our canvas.

And now some words about **SVG-technology**. On the first sight it is very similar to canvas. We also create a HTML-element and then create figures and shapes. Here we have painted a circle. We define radius, coordinates, the colour of background, the width of line (border) and the colour of line (border). It also works for rectangles and for lines. 
SVG is a very flexible technology. We can create different shapes: polygon, stars, make a combination of different shapes. Here I have drawn three ellipses and below I have animated ellipses (they are moving).

When we create a canvas element, we modify it in JavaScript-file. And when we work with SVG we can modify it using JavaScript and CSS.

One more aspect is **how to interact with our image**, with our graphics.

Canvas is **not so good** in this case: it adds more pixels - and ready. But we work with **SV** we can **add event handlers** for the element. For example, I want the circle to move after I click on it. Click – and it is moving.

One more aspect to compare is **the size of the file** when we add new elements and object to our picture. When we do it with our canvas-file, the size doesn’t increase very much. But for SVG it could be really a problem. 

So, when we need **to create difficult pictures with many small elements, it would be better to use canvas**. And if we don’t need large screens – it is also good to use canvas. 

**SVG is good when we need to create icons, logos, static pictures, animations** – and they don’t have many small things (elements), we need a high quality by resizing - SVG is your choice!

Thank you for your attention!
