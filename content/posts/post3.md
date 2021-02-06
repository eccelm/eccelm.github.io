---
title: A Hot Mess Inside A Dumpster Fire Inside A Train Wreck

date: 2020-01-26
---

### Monday -

The title of this post is was my favourite quote from 2020, from Jake Tapper of CNN describing a US presidental debate. I think it is equally applicable to the CSS styling of this portfolio. 

I think the point has come that I can hide from my neglect of CSS no longer. Last week this was what I was most struggling with, and today I threw in the towel and came up with some hacky solutions that I’m not at all happy with, but they are getting the job done. I'm going to be looking into some front-end CSS challenges that I can decicate a bit of time to every day, alongside practising styling in my larger projects. 

The rest of this week I will be switching my focus to the main back-end project from Northcoders. It has been 10ish weeks since the back-end block and it is all a bit hazy, and I've learnt alot more in that time!

### Tuesday - Back to the Back-End

At Christmas I already went back and went through the first phases of preparing the migration and seed files again as a refresher for the backend of our Project phase code. This was so helpful for consolidating the knowledge and reminding myself how things fitted together I've decided to complete the rest.

I hadn't completed all the functions at the time and with that the error-handling. It definitely needed a refactor for readability and consistency. I also could not hand-on-heart tell you what roles all the dependencies played, and I wanted to work through while looking at the documentation, as I've gained alot more confidence from the project phase for diving in and reading through. 

### Saturday - Time flies when you're having fun

I did not intend to spend the rest of the week on this but as the title suggests, I genuinely enjoyed it! 

In retrospect of the first attempt during the course, we encountered SO MANY new things in the space of 3 weeks, from the most basic understanding of servers and async, through to new packages and libraries like Knex and Express, I’m really proud of how much I did get done (it didn’t feel like it at the time). 

I also saw just how close some of my broken code was to being right and it has been a boost to overcome alot of the issues that had me stumped the first time round very quickly by myself. It's proving I have developed the crucial skills of how to debug and navigate the web to find answers.

My main takeaway from this is I think I know what I enjoy and what I want my first role to involve- and that is testing. I'm far more confident in this code because of the TDD and I have missed that approach in front-end at Northcoders as we haven't covered any testing libraries. I think I get alot more satisfaction on knowing it is reliable over creating something I'm viusally happy with. Last time I had only done the core error-tests, but this time I really enjoyed thinking about further error scenarios - particularly around psql - and I managed to nearly double the error codes handled through testing. 

Here's a few other highlights of things I picked up or stregthened:

1. Database and Knex
   - The implications of CASCADE and the PK/FK relationship
   - understanding the use cases of .returning
   - new methods such as .first(), .offset(), .clone()

2. Jest / Supertest
   - I've (hopefully) made my test descriptions shorter and more succinct
   - This error plagued my testing the first time around: Jest did not exit one second after the test run has completed.This usually means that there are asynchronous operations that weren't stopped in your tests. I realised the trigger is when a res.send or res.sendStatus isn't yet in the controller.
   - Improving knowledge of Jest testing, like toMatchObject() and understanding what the hooks beforeEach/AfterAll meant for allowing the tests not to impact each other.


3. Object and Array destructuring
   -  I had just got to grip with simple object destructuring on the last day, and with the refactor I also picked up nested destructuring and renaming (Wes Bros have a great article on this)

4.  The request-response cycle (and where everything fits) 
      - I think I got this the first time around, it was so much new terminology that threw me off. The size of req/res object is no longer intimidating which leads me to a slightly gutting final discovery

5. Navigating a console log
   - You can CRTL + F in the VS Code terminal. So much scrolling and eye-straining could've been avoided, alas.

And now it's time for a well earnt G&T. Happy weekend everyone.