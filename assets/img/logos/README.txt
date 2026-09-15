tesla.svg — simplified monochrome Tesla mark from the Simple Icons project
(https://simpleicons.org, CC0-licensed icon artwork; the Tesla trademark
itself still belongs to Tesla, Inc.). Used purely to indicate past
employment, same as LinkedIn showing a company logo next to a job entry.

jaguar.svg — the Jaguar "leaper" brand mark, also from Simple Icons.
Currently unused on the site (superseded by jlr.svg below) but kept here
in case you ever want to reference the Jaguar brand specifically rather
than the JLR corporate entity.

jlr.svg — JLR's 2023 corporate wordmark, sourced from Wikipedia
(https://en.wikipedia.org/wiki/File:JLR_logo_2023.svg). That file page
notes the mark is too simple (plain lettering) to be copyrightable in the
US, but is still a trademark of JLR — kept at identification size only,
the same "past employer" use as the other logos here.

Log9 Materials has no icon in Simple Icons, and I couldn't pull their
actual logo file automatically (their site renders it client-side via JS,
which our fetch tools can't execute). Its entry on the site currently
falls back to a plain text wordmark badge — see data/content.js
(experience[].logo is `null` for Log9, and main.js renders a styled
two-letter badge instead). Drop the real Log9 logo file here and set its
`logo` path in data/content.js if you get hold of one.

Product photos (Tesla Powerwall, etc.) live in ../products/ instead of
here — see ../products/README.txt.
