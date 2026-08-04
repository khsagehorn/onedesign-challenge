# One Design Technical Challenge: Women Innovators in Computer Science

**Hunter Sagehorn - Senior Frontend Developer**

GitHub Repo: [https://github.com/khsagehorn/onedesign-challenge](https://github.com/khsagehorn/onedesign-challenge)

GitHub Pages Deployment: [https://khsagehorn.github.io/onedesign-challenge/](https://khsagehorn.github.io/onedesign-challenge/)

_Note: I resized and optimized images to make them small enough to comfortably include in the repo._

## Setup

- Start a local server to view: `npx http-server -p 3000`, or however you prefer!

- To keep things simple, there are no dependencies to install or builds to run. Just hit `index.html` on localhost.

## JavaScript Notes

- All JavaScript (outside of the provided data array) can be found in the [`js/index.js`](./js/index.js) file. I typically write in TypeScript these days, but it felt appropriate to avoid that build step for the scope of this project. Hopefully function names and comments make it easy enough to follow along.

## CSS Notes

- Design tokens from the Figma comps are assigned to CSS variables in [`css/variables`](./css/variables.css). I'm still on the fence about having one-lined the typography variables, but since there are only a couple text styles, it seemed safe to err on the side of brevity.

- I would typically have breakpoints assigned to SCSS variables, but you can't reference variables in media query parameters in vanilla CSS, so that's that.

- Speaking of breakpoints, there aren't that many. CSS Grid and a couple `clamp()` rules do the heavy lifting between the mobile and desktop views.

- The Innovator cards get a little squishy between `1000px` and `1200px` but still felt better than a single column of super-wide cards. I would definitely throw this one back to the design team for their input.

- I interpreted the hero design as filling the viewport, which led to some assumptions about where the content was intended to be anchored. I chose the bottom, which works well at most device sizes.

- The "typewriter" effect in the hero isn't perfect, and works better with a monospace font. I left it in because it an interesting application of pseudo-element content, and doesn't use any javascript.

- I would never actually use an [`index.css`](./css/index.css) file with `@imports` the way I have here. I understand it's render-blocking to chain CSS files this way, but it kept the markup clean, and the performance impact is minimal on a project this size.
