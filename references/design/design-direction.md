# Personal Portfolio Design Direction

This document is the single source of truth for the visual and interaction direction of the personal portfolio website. It is inspired by the design language shared across selected visual essays from The Pudding, but the portfolio must not copy any page, layout, illustration, animation, wording, or interaction directly.

Reference sites studied:

- https://pudding.cool/2019/10/shelters/
- https://pudding.cool/2025/10/walk/
- https://pudding.cool/2021/03/love-and-ai/

## Overall Visual Style

The site should feel like an editorial visual essay rather than a conventional resume page. The experience should be warm, curious, highly readable, and lightly playful, with personal storytelling sitting beside evidence, artifacts, and structured work history.

The common design language across the references:

- Narrative-first, with visuals used to clarify and deepen the story.
- Human and imperfect rather than glossy or corporate.
- Longform but approachable, with short sections, moments of surprise, and clear progression.
- Custom-feeling details: small illustrations, annotations, captions, and interactive states.
- Calm base design with selective expressive moments.

For this portfolio, the goal is: "a personal field guide to my work." It should make the resume feel alive without making the site feel gimmicky.

## Typography Characteristics

Typography should carry most of the personality.

- Use a strong editorial display style for section openings and major statements.
- Pair it with a highly readable body face for longform text.
- Use generous line height for body copy.
- Let important numbers, dates, roles, and project names become typographic moments.
- Use short labels, captions, and metadata in a smaller, sturdy sans-serif.
- Avoid excessive font variety. Two families are enough: one expressive display or serif, one practical sans-serif.

Suggested direction:

- Display: warm serif or characterful editorial serif.
- Body/UI: clean humanist sans-serif.
- Use large type sparingly for chapter-like transitions: Intro, Experience, Projects, Skills, Contact.
- Use italic or alternate styling for reflective notes, side comments, or "what I learned" callouts.

## Color Palette

The palette should feel tactile and editorial, not tech-default.

Core palette direction:

- Warm paper background: off-white, parchment, soft cream, or very pale stone.
- Ink text: near-black with warmth, not pure black.
- Muted accent colors: rust, olive, faded blue, dusty pink, clay, ochre, or moss.
- Data/skill/project colors: restrained, with 3-5 repeatable tokens.
- Occasional high-contrast accent for links, active states, and important highlights.

Avoid a one-note palette. The site should not become all beige, all purple, all slate, or all orange. Warmth should come from material quality and contrast, not from washing every surface in the same hue.

Potential token direction:

- Background: `#f7f2e8`
- Surface: `#fffaf1`
- Text: `#1f2320`
- Muted text: `#62675f`
- Rule/border: `#d8cdbd`
- Accent rust: `#b85435`
- Accent moss: `#4f6f52`
- Accent blue: `#496f93`
- Accent gold: `#c9962f`

## Layout Philosophy

The layout should be scroll-native and story-led.

- Prefer full-width narrative sections with constrained reading columns.
- Mix dense text sections with visual breathing room.
- Use section breaks as chapters, not generic marketing bands.
- Let work experience unfold as a timeline or sequence of scenes.
- Let projects feel like case-study entries rather than identical cards only.
- Use side notes, captions, and annotations to add context without bloating main copy.
- Use sticky or persistent visual elements only when they help orientation.
- Keep the first viewport focused on identity, tone, and what kind of work the portfolio represents.

The portfolio should have a clear reading path:

1. Who I am and how I think.
2. What I have done.
3. How selected projects prove it.
4. What skills and patterns connect the work.
5. How to contact me.

## Animation Style

Animation should support comprehension and pacing, not decoration.

- Use small scroll-triggered reveals for illustrations, annotations, counters, and timeline markers.
- Use gentle transitions: fade, slide, draw-on-line, count-up, and position interpolation.
- Use animation to show change over time, progression, comparison, or choice.
- Keep motion slightly handmade and restrained.
- Respect reduced-motion preferences.
- Provide a motion toggle if the site becomes animation-heavy.

Good fits:

- A route/path line that grows as the user scrolls through experience.
- Project artifacts that fade in beside their story.
- Skill clusters that assemble from scattered tags into grouped categories.
- Small annotations that appear when their related sentence enters view.

Avoid:

- Constant parallax.
- Large autoplay hero motion.
- Decorative loops that compete with reading.
- Fast easing, bounce effects, or generic portfolio reveal animations.

## Scrolling Behavior

The references use scrolling as narrative structure. This portfolio should do the same.

- Build the homepage as a guided scroll rather than separate disconnected blocks.
- Use progressive disclosure: introduce a theme, show evidence, then summarize the takeaway.
- Use occasional sticky panels for timelines, project metrics, maps of skills, or role summaries.
- Allow readers to skim via section anchors and strong headings.
- Keep scroll interactions optional: the site must still read well as a normal document.

Possible portfolio scroll moments:

- A "career path" vertical thread connecting roles, projects, and skills.
- A sticky project preview that changes as the reader scrolls through project summaries.
- A skills map that becomes more complete as the work history progresses.
- A contact section that feels like a conclusion, not a footer afterthought.

## Illustration Style

Illustration should feel personal, simple, and integrated with the story.

- Use hand-drawn or lightly textured spot illustrations.
- Prefer small conceptual illustrations over generic stock images.
- Combine simple icons, labels, arrows, and annotations.
- Use imperfect shapes and expressive linework where appropriate.
- Use real artifacts when they are meaningful: screenshots, diagrams, notes, documents, photos of work.

Portfolio illustration ideas:

- A compact "desk" or "toolkit" illustration for skills.
- A simple map/path motif for career progression.
- Small visual metaphors for project types: systems, writing, analysis, product thinking.
- Annotated screenshots or diagrams for selected projects.

Avoid:

- Corporate vector people.
- Abstract gradient blobs.
- Random decorative icons with no narrative purpose.
- Copying specific illustration treatments from the references.

## Storytelling Techniques

The strongest shared pattern is a clear question or tension that guides the page.

For the portfolio, sections should answer narrative questions:

- Intro: What kind of problems do I like solving?
- Experience: What patterns show up across my work?
- Projects: What have I made, and why did it matter?
- Skills: What can I reliably bring to a team?
- Contact: What should someone ask me about?

Techniques to use:

- Start sections with a human sentence before details.
- Pair claims with evidence: metrics, artifacts, links, screenshots, outcomes.
- Use short captions to explain visuals.
- Use callouts for "what changed," "what I learned," and "why it mattered."
- Make the work chronological where useful, but thematic where stronger.
- Let the writing be direct and specific. Avoid inflated professional language.

## Interaction Patterns

Interactions should invite exploration without hiding essential information.

Good interaction patterns:

- Toggle between "Story" and "Resume" modes for experience.
- Filter projects by type, skill, or impact area.
- Expand project cards into compact case-study summaries.
- Hover or focus annotations on screenshots and diagrams.
- Clickable timeline milestones.
- Skill tags that highlight related projects and experience entries.
- Accessible keyboard navigation for all interactive elements.

Every interaction needs a fallback. If a reader never clicks anything, they should still understand the portfolio.

## Design Keywords

- Editorial
- Narrative
- Curious
- Human
- Warm
- Tactile
- Visual essay
- Annotated
- Reflective
- Evidence-based
- Playful restraint
- Scroll-led
- Personal but polished
- Clear over clever

## Components That Would Fit This Portfolio

- Chapter-style section headers.
- Intro hero with a strong personal positioning statement.
- Career path timeline with concise role summaries.
- Project case-study modules with problem, role, process, outcome, and artifact.
- Annotated project screenshots or diagrams.
- "What I learned" callout blocks.
- Skill clusters connected to projects.
- Compact metrics strips for outcomes and scope.
- Reading progress indicator or section index.
- Optional "quick resume" panel for recruiters.
- Contact card with email, LinkedIn, GitHub, and resume download.
- Methods/Colophon page explaining how the site was built.
- Design notes page using this direction document as source material.

## Things To Avoid

- Do not copy layouts, illustrations, animations, copy, or interaction mechanics from the references.
- Do not make the homepage a generic landing page with oversized marketing copy and disconnected cards.
- Do not overload the site with scroll effects before the content is strong.
- Do not hide resume information behind clever interactions.
- Do not use stock-feeling visuals or generic corporate illustrations.
- Do not use a monochrome or one-hue palette.
- Do not use dark, glossy, SaaS-style dashboard aesthetics.
- Do not make every project card identical if the projects have different stories.
- Do not rely on vague claims such as "passionate problem solver" without proof.
- Do not let decorative visuals slow the site or hurt accessibility.
- Do not use motion without reduced-motion support.
- Do not let the design become more memorable than the work itself.

## Practical Direction For The First Build

The first version should be a strong static editorial portfolio:

- Build a scroll-led single-page homepage.
- Keep navigation simple: Intro, Experience, Projects, Skills, Contact.
- Replace generic cards with narrative project modules.
- Add a warm paper-like visual system with strong typography.
- Add one subtle visual motif, such as a path/thread/annotation line, used consistently.
- Add simple, accessible interactions only after the core content is readable.

The design should feel like reading a well-made personal essay about someone who happens to have a resume, not like reading a resume that has been decorated.
