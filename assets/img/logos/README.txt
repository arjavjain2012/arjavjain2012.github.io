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

log9.png — Log9 Materials' own wordmark, supplied directly by the site
owner (Log9 has no icon in Simple Icons and their site renders its logo
client-side via JS, which our fetch tools can't reach). The source image
had an opaque white background; it's been background-removed (flood-fill
to transparency) and cropped tight to the glyph.

Note: the Experience tiles now use the same tile/detail template as
Projects, so each entry's logo is only a fallback image (shown if
`productImage` is null) rather than a dedicated badge — with a
`productImage` set for Tesla, JLR, and Log9, these logo files aren't
currently rendered anywhere, but are kept here in case a future entry
has no product photo.

Product photos (Tesla Powerwall, etc.) live in ../products/ instead of
here — see ../products/README.txt.
