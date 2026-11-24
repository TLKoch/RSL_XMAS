# Scavenger hunt: Irchel → Die Waid

A small website for five groups walking the same route with eight stations. At each station the group answers one multiple-choice question; every answer option carries a number. After answering, the group gets the clue to the next station. At the end, each group sees all its answers with their numbers.

## Files

| File | What it is |
| --- | --- |
| `index.html` | The website. No need to edit. |
| `config.js` | All content: groups, intro, clues, questions, numbers, final text. Edit this. |

## Edit the content

Open `config.js` in any text editor (or directly on GitHub with the pencil icon):

- `firstClue`: how to find station 1.
- For each station: `name`, `question`, four `options` with their `number`, `correct` (position of the right option, counting from 0), and `nextClue` (how to find the next station).
- `lock.stations`: which stations' numbers form the lock code, in order. All eight give an 8-digit code; for a 4-digit lock use e.g. `[2, 4, 6, 8]`. Every answer is accepted during the hunt, so a wrong answer only shows up as a wrong code at the lock. Set the lock to the code you get from the correct answers.
- `revealCorrect: true` shows the correct answers on the end screen; `false` shows only the group's own answers and numbers.
- Replace every `TODO` before the event.

Note: the content is readable by anyone who opens the page source. Fine among colleagues; just ask people not to peek.

## Publish on GitHub Pages

1. Create a repository on github.com (public).
2. **Add file → Upload files**, drag in `index.html`, `config.js` and `README.md`, then **Commit changes**.
3. **Settings → Pages**: Source "Deploy from a branch", branch `main`, folder `/ (root)`, Save.
4. After a minute the site is at `https://<user>.github.io/<repo>/`.

To change content later, edit `config.js` on GitHub and commit; the site updates within a minute or two. Phones that already loaded the page may need a reload.

## On the day

- One phone per group. Progress is stored on that phone; reloading is safe.
- "Start over on this phone" (bottom of the page) resets everything, for testing.
- At the end, "Copy results" puts the group's numbers and answers into the clipboard for the chat.
