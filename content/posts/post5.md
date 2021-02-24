---
title: CSS Game Plan
date: 2020-02-08
tags: ["development", "css", "software developer"]
---

Last week there were no development posts. It was all in all a week where things just didn’t seem to be going to plan. But a new week beckons, and today is off to a good start, I’ve hosted the blog finally! 

As my last post mentioned, I really need to knuckle down on CSS, and after some research and trial and error last week, I have my game plan.

Alongside some YouTube learning, I’m going to focus on the Daily UI newsletter challenge and FreeCodeCamp final project challenges which should fit with my goals are to be comfortable with CSS, SASS/SCSS and learning and applying accessibility in code. Other interesting challenges I came across were 100dayscss and FrontEnd Mentor. 

I’m starting to track my projects on a Trello board and breaking them down into checklists. It’s more of a To-Do list than a Kanban board, but I’m going to make full use of the due date button too! 

My focus is also turning back to React. I’m going to use a mini-sprint to refamiliarise myself and then get to work on finishing up the main project, with a focus on conversion to hooks, using Context and responsive design. 


## End-of-week round up:

So that was the plan, but how did it go? First, kicking off with a fun-fact: it took 3 months for a team to redesign the Instagram logo - and then everyone hated it (but then eventually came around). Something to keep in mind when I’m not happy with the styling of a project I’ve only spent a few hours on without any design experience!

*Win of the week: SCSS*

*Fail of the week: Responsive design*

### Forms 
To structure my CSS learning, I wanted to come out of this week with better knowledge of how to improve the accessibility and usability of forms. I’ve only really scratch the surface of the potential out there, but here are my main take-aways this time: 

1. HTML Elements – labels / fieldset / legend

The 3 I have highlighted above are important for accessibility: they allow screen-readers to pick up the instructions and labels of the different options. Labels also increase the area that can be clicked to select the input element, which can improve usability. 

2. Input Types, Validation and Error messages

Input types are a helpful start reducing the ways a user may make a mistake Considering validation has made me weigh up the merits of the different event handlers onChange, onBlur etc, and at what point an error message should appear. Ultimately I think it depends and each form may need a different format. The attribute role="alert" on any error messages can enable screen readers to find error messages as they appear.
 
3. UX in forms

Here are some of the concepts I’ve found interesting, and am now finding everywhere I look! :
- Change the font colour rather than size to establish importance 
- Format the input field to the expected size e.g. a post-code input doesn’t need to take the length of the form
- Guide the user with examples of the expected format, especially in scenarios where multiple format types exist, e.g phone numbers with or without country codes.

4. ARIA labelling

Accessible Rich Internet Applications. Aria-labels are just one tiny part of this area. Their benefit over regular labels is that that do not appear on screen, while still providing important information for assistive technologies.

5. Importance of CSS outline!

  I’m really glad I’ve picked this one up. I have been setting outline to none, because it does not look great with anything with a border radius, particularly  buttons. However, this is problematic for accessibility because for those who tab through a page, outline is a visual indicator  of where they are. So if you are removing outline, it’s still important to have a visual indicator of which element is in focus.

### React
1. I’m now feeling a lot more confident with React in particular the lifecycle and the use of componentDidUpdate.
2. I realised async/await really is just syntactic sugar and was an easier refactor than I anticipated.

3. On the other end of the scale, I spent far too much time trying to create a Context that would share a user / guest status around the app.

What’s next?
Optimistic rendering and routing – both my React projects use @reach/router but this is being deprecated so looking into alternatives sounds like a plan
 
SCSS
This is winning me over on the CSS front! I love the nesting and organising the colour scheme via variables. I do want to practise this more, so expect some mini code-pen projects to practise the other elements!

One tutorial I watched used BEM naming styles which also worked well for me structuring classes, so I think that’s next on the list to explore a little better!


### Responsive Design

I am fairly convinced responsive design is a form of witchcraft at this point. I understand the basic concepts, a grid layout or flexbox direction/wrap/grow/shrink etc or a media query, but somehow it never ends up quite how I expected. I think more focus on unit choice (like vh, % rem) and understanding parent/child relationships work may help with demistifying this for me.