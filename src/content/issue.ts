export const issue = {
  title: "The Aru Edition",
  masthead: "ARU",
  star: "Arushi Negi",
  volume: "Vol. 01",
  month: "October",
  year: "2026",
  tagline: "The Birthday Issue",
  price: "Not for sale",
  nav: [
    { href: "#cover", label: "Cover", page: "001" },
    { href: "#contents", label: "Contents", page: "004" },
    { href: "#contributors", label: "Contributors", page: "006" },
    { href: "#letter", label: "Editor’s Letter", page: "008" },
    { href: "#story", label: "Cover Story", page: "012" },
    { href: "#style", label: "Style File", page: "024" },
    { href: "#beauty", label: "Beauty Notes", page: "032" },
    { href: "#portfolio", label: "Portfolio", page: "038" },
    { href: "#words", label: "In Her Words", page: "048" },
    { href: "#last", label: "The Last Page", page: "056" },
  ],
  cover: {
    image: "/source/cover.jpg",
    alt: "Cover portrait",
    kicker: "The woman of the century",
    linesLeft: [
      { kicker: "Exclusive", text: "Arushi Negi takes the cover" },
      { kicker: "Fashion", text: "The look of now" },
    ],
    linesRight: [
      { kicker: "Beauty", text: "Lit from within" },
      { kicker: "Culture", text: "Twelve hours in her world" },
    ],
  },
  contents: {
    image: "/source/contents.jpg",
    alt: "Contents portrait",
    departments: [
      {
        name: "Front of Book",
        entries: [
          {
            page: "006",
            title: "Contributors",
            dek: "The minds behind the issue",
          },
          {
            page: "008",
            title: "Letter from the Editor",
            dek: "Why she is the cover",
          },
        ],
      },
      {
        name: "Fashion",
        entries: [
          {
            page: "012",
            title: "The Hour Belongs to Her",
            dek: "Cover story: Arushi Negi",
          },
          {
            page: "024",
            title: "The Style File",
            dek: "Six looks. One stance.",
          },
        ],
      },
      {
        name: "Beauty",
        entries: [
          { page: "032", title: "The Notes", dek: "Skin, hair, presence" },
        ],
      },
      {
        name: "Culture",
        entries: [
          {
            page: "038",
            title: "Portfolio",
            dek: "An editorial in eight frames",
          },
          {
            page: "048",
            title: "In Her Words",
            dek: "A conversation with the cover star",
          },
          {
            page: "056",
            title: "The Last Page",
            dek: "Horoscope, colophon, encore",
          },
        ],
      },
    ],
  },
  contributors: [
    {
      role: "Editor in Chief",
      name: "Camille Laurent",
      bio: "Sets the tone of the issue and the temperature of the room.",
      image: "/source/contributor-editor.png",
    },
    {
      role: "Photographer",
      name: "Elena Voss",
      bio: "Shoots as if the light were a collaborator, not a tool.",
      image: "/source/contributor-photographer.png",
    },
    {
      role: "Fashion Editor",
      name: "Isolde March",
      bio: "Casts the clothes. Trusts the woman wearing them.",
      image: "/source/contributor-fashion.png",
    },
    {
      role: "Beauty Director",
      name: "Noor El-Amin",
      bio: "Believes the best makeup is a well-kept secret.",
      image: "/source/contributor-beauty.png",
    },
  ],
  letter: {
    kicker: "Letter from the Editor",
    headline: "She is the issue.",
    portrait: "/source/editor-letter.jpg",
    portraitAlt: "Editor portrait — replace as you like",
    signed: "C.L.",
    title: "Editor in Chief",
    paragraphs: [
      "There are issues we remember for a hemline, and issues we remember for a woman. This one belongs to Arushi Negi.",
      "We have spent a season watching how she occupies a frame: never hurried, never over-explained. A coat sits on her shoulders as if it were always meant to. A room, given half a chance, rearranges itself around her. That is not styling. That is authorship.",
      "The Birthday Issue is our annual argument for presence — the rare quality that cannot be borrowed from a mood board. In these pages you will find a cover story, a style file, beauty notes, a portfolio, and a conversation. What you will not find is a woman performing for the lens. Arushi does not perform. She permits.",
      "Replace the photographs. Rewrite the captions. The masthead will still read the same. Some covers are fashion. This one is a dedication.",
    ],
  },
  story: {
    kicker: "Cover Story",
    headline: "The hour belongs to her",
    dek: "Arushi Negi takes the cover of The Aru Edition — a study in presence, proportion, and the quiet authority of someone who has always known how to stand in the light.",
    byline: "By Camille Laurent",
    photography: "Photographs by Elena Voss",
    hero: "/source/cover-story-hero.jpg",
    heroAlt: "Cover story hero — replace with Arushi",
    second: "/source/cover-story-second.jpg",
    secondAlt: "Cover story second frame — replace with Arushi",
    pullQuote: "She doesn’t enter a room. The room rearranges.",
    paragraphs: [
      "It begins, as these things often do, with a pause. Not the theatrical kind — no hand on a hip, no glance thrown to a far corner of the studio — but a genuine stillness, the sort that makes a photographer lower the camera and wait. Arushi Negi has that effect. She does not fill a frame so much as complete it.",
      "We met her on a late-summer afternoon, when the light had the colour of paper left in a window. She arrived in ivory and black, the uniform of someone who understands that fashion is a language and has no interest in shouting. The team had prepared a rack. She needed four pieces. The rest, she said, were beautiful — and not hers.",
      "What follows in these pages is not a biography. It is a sitting. A cover is a collaboration between a face and a century of graphic tradition: the oversized masthead, the cover lines, the promise that this woman, in this month, is the one to watch. For The Birthday Issue, the choice was never in question.",
      "Watch her walk the length of a seamless. The stride is unhurried. The chin is level. There is humour at the edge of the mouth, as if she has already decided the photograph will be fine, and the rest of us may catch up when we are ready. Editors talk about “the girl of the moment.” Moments pass. Arushi looks like a decade.",
      "Styling, on this sitting, was an exercise in subtraction. A coat with an honest shoulder. A slip that moved. A single jewel that did not compete with the eyes. Beauty followed the same brief: skin like a well-cut page, hair that had been allowed a private life, a mouth the colour of a decision already made.",
      "By the last frame the studio had gone quiet in the way studios do when everyone knows the picture is in the camera. Someone opened a window. Someone else poured water. Arushi looked at the contact sheet as if it were a letter addressed to her — which, of course, it was.",
      "The Aru Edition does not publish every month. It publishes when there is someone worth the paper. This is that issue. This is that someone. The hour, as the headline has it, belongs to her.",
    ],
  },
  style: {
    kicker: "The Style File",
    headline: "Six looks. One stance.",
    dek: "A working wardrobe for a woman who treats clothes as punctuation — precise, rare, never in a rush.",
    looks: [
      {
        image: "/source/style-coat.jpg",
        number: "01",
        title: "The Coat",
        credit:
          "Ivory wool, a shoulder that means it. Worn as architecture, not apology.",
      },
      {
        image: "/source/cover.jpg",
        number: "02",
        title: "The Dress",
        credit: "A floral that refuses to be pretty. Length as a form of wit.",
      },
      {
        image: "/source/style-street.jpg",
        number: "03",
        title: "The Street",
        credit:
          "Tailoring after hours. Black, white, and the city as backdrop.",
      },
      {
        image: "/source/style-evening.jpg",
        number: "04",
        title: "The Evening",
        credit: "A column of black. No necklace. The face does the jewellery.",
      },
      {
        image: "/source/style-light.jpg",
        number: "05",
        title: "The Light",
        credit: "Pale knit, open air. Proof that ease can be edited.",
      },
      {
        image: "/source/style-uniform.jpg",
        number: "06",
        title: "The Uniform",
        credit:
          "All black, considered. The look you reach for when the day is the event.",
      },
    ],
  },
  beauty: {
    kicker: "Beauty Notes",
    headline: "The look, decoded",
    image: "/source/beauty-notes.png",
    imageAlt: "Beauty still — replace with Arushi",
    intro:
      "No contour as performance. No trend as costume. The brief was simple: she should look like herself, on her best paper.",
    notes: [
      {
        number: "01",
        title: "Skin",
        body: "Dew, not glaze. A finish that reads as sleep and citrus, not studio. Powder only where the light would otherwise gossip.",
      },
      {
        number: "02",
        title: "Hair",
        body: "Undone on purpose. A centre part, a little air, nothing that required a second appointment with a brush.",
      },
      {
        number: "03",
        title: "Mouth",
        body: "A stain, not a statement. The colour of a thought she has not shared yet.",
      },
      {
        number: "04",
        title: "Eyes",
        body: "Soft graphite, close to the lash. The gaze does the rest — and the gaze, on this cover, is the story.",
      },
      {
        number: "05",
        title: "Presence",
        body: "The unlisted product. Cannot be purchased. Cannot be duplicated. The reason the issue exists.",
      },
    ],
  },
  portfolio: {
    kicker: "Portfolio",
    headline: "Eight frames",
    dek: "An editorial sitting in eight quiet moments",
    frames: [
      { image: "/source/portfolio-morning.jpg", caption: "01  Morning light, unstyled" },
      { image: "/source/interview.jpg", caption: "02  Profile, three-quarter" },
      { image: "/source/last-page.jpg", caption: "03  The pause between frames" },
      { image: "/source/cover-story-hero.jpg", caption: "04  Beauty, close" },
      {
        image: "/source/portfolio-hair.jpg",
        caption: "05  Hair, weather, nothing else",
      },
      {
        image: "/source/portfolio-pre-cover.jpg",
        caption: "06  The cover, before the type",
      },
      { image: "/source/portfolio-stride.jpg", caption: "07  Motion, mid-stride" },
      { image: "/source/portfolio-after.jpg", caption: "08  After the sitting" },
    ],
  },
  words: {
    kicker: "In Her Words",
    headline: "Twenty-four hours with Arushi Negi",
    dek: "A conversation conducted in the language of clothes, rooms, and the last beautiful thing she noticed.",
    portrait: "/source/interview.jpg",
    portraitAlt: "Interview portrait — replace with Arushi",
    questions: [
      {
        q: "What does morning look like?",
        a: "Quiet, on purpose. Water, a window, something silk that does not yet have to be an outfit. The day is allowed to arrive before I do.",
      },
      {
        q: "The one piece you never loan?",
        a: "A coat that knows my name. It has a shoulder like a well-cut sentence. Everything else can travel. That one stays.",
      },
      {
        q: "What is glamour now?",
        a: "Not more. Better. A room with the right lamp. A table that has been set without anxiety. Leaving when the evening is still beautiful.",
      },
      {
        q: "A room you would design?",
        a: "Cream walls, a single painting, a chair no one is allowed to throw a coat over. Books where you can reach them. No clocks you can hear.",
      },
      {
        q: "The last beautiful thing you noticed?",
        a: "Light on a stairwell at four o’clock. Completely unstyled. Completely enough.",
      },
      {
        q: "If this issue had a scent?",
        a: "Paper, tuberose, and the inside of a new book. Something you remember without being able to buy.",
      },
    ],
  },
  last: {
    kicker: "The Last Page",
    headline: "The birthday horoscope",
    image: "/source/last-page.jpg",
    imageAlt: "Closing portrait — replace with Arushi",
    horoscope:
      "A year of rooms that rearrange themselves around you. Correspondence arrives on heavy paper. A coat you have not met yet is already waiting. Do not rush the sitting — the best frame is the one that asks you to stay. Love, in this house, is issued annually and kept forever.",
    colophon: {
      star: "Arushi Negi, cover star of The Aru Edition",
      circulation: "Issued once a year. Circulation: one.",
      subscribe: "Subscribe",
      subscribeDek:
        "There is nothing to subscribe to. This magazine exists because she does. File under forever.",
      closing: "The hour is hers. It always was.",
    },
  },
} as const;
