// Exercise catalog.
// To add a new exercise, append an object to this array.
// Each exercise has: id, title, description, type, and type-specific fields.
//
// Supported types:
//   "timed-reading" — shows `text`, a Start/Stop button, and the final time.
//                      The running counter is hidden while timing.
//   "box-breathing" — guided box breathing. Shows the current breath step and
//                      the seconds remaining. Exhale grows each iteration:
//                      exhale = exhaleBase * iteration.
//                      Fields: inhale, hold, exhaleBase, hold2 (all seconds).
//   "guided-steps"  — a fixed one-minute-ish sequence of steps shown on the
//                      breathing circle with a countdown, then "Done".
//                      Fields: steps [{ name, kind, duration, detail? }],
//                      repeat (default 1). kind: "inhale" | "exhale" |
//                      "hold" (circle grows/shrinks/stays big) or "steady".

const EXERCISES = [
  {
    id: "pajistea-matusii-sura",
    title: "Pajiștea mătușii Șura",
    description:
      "Tongue twister. Time how fast you can speak the whole text out loud.",
    type: "timed-reading",
    text: `E mișto pajiștea mătușii Șura.
Pajiștea mătușii Șura are un pom.
Pomul pajiștii mătușii Șura are un trunchi.
E mișto trunchiul pomului pajiștii mătușii Șura.
În trunchiul pomului pajiștii mătușii Șura e o scorbură.
E mișto scorbura trunchiului pomului pajiștii mătușii Șura.
În scorbura trunchiului pomului pajiștii mătușii Șura e un cuib.
E mișto cuibul scorburii trunchiului pomului pajiștii mătușii Șura.
În cuibul scorburii trunchiului pomului pajiștii mătușii Șura e o pitulice.
E mișto pitulicea cuibului scorburii trunchiului pomului pajiștii mătușii Șura.
Pe pitulicea cuibului scorburii trunchiului pomului pajiștii mătușii Șura sunt pene.
Sunt mișto penele pitulicii cuibului scorburii trunchiului pomului pajiștii mătușii Șura.
În penele pitulicii cuibului scorburii trunchiului pomului pajiștii mătușii Șura sunt purici.
Sunt mișto puricii penelor pitulicii cuibului scorburii trunchiului pomului pajiștii mătușii Șura.
Puricii penelor pitulicii cuibului scorburii trunchiului pomului pajiștii mătușii Șura au piciorușe.
Sunt mișto piciorușele puricilor penelor pitulicii cuibului scorburii trunchiului pomului pajiștii mătușii Șura.
Piciorușele puricilor penelor pitulicii cuibului scorburii trunchiului pomului pajiștii mătușii Șura au gheare.
Sunt mișto ghearele piciorușelor penelor pitulicii cuibului scorburii trunchiului pomului pajiștii mătușii Șura.
Ghearele piciorușelor puricilor penelor pitulicii cuibului scorburii trunchiului pomului pajiștii mătușii Șura au vârfuri.
Sunt mișto vârfurile ghearelor piciorușelor puricilor penelor pitulicii cuibului scorburii trunchiului pomului pajiștii mătușii Șura.`,
  },
  {
    id: "box-breathing",
    title: "Box breathing (growing exhale)",
    description:
      "Inhale 4 · hold 4 · exhale 4×iteration · hold 4. The exhale gets longer with each round.",
    type: "box-breathing",
    inhale: 4,
    hold: 4,
    exhaleBase: 4,
    hold2: 4,
  },
  {
    id: "four-seven-eight-breathing",
    title: "4-7-8 breathing",
    description:
      "Inhale 4 · hold 7 · exhale 8, three rounds (about one minute). A classic calming technique.",
    type: "guided-steps",
    repeat: 3,
    steps: [
      { name: "Inhale", kind: "inhale", duration: 4, detail: "Through the nose" },
      { name: "Hold", kind: "hold", duration: 7, detail: "Stay relaxed" },
      { name: "Exhale", kind: "exhale", duration: 8, detail: "Slowly through the mouth" },
    ],
  },
  {
    id: "grounding-54321",
    title: "5-4-3-2-1 grounding",
    description:
      "A one-minute mindfulness reset: notice 5 things you see, 4 you feel, 3 you hear, 2 you smell, 1 you taste.",
    type: "guided-steps",
    steps: [
      { name: "See 5", kind: "steady", duration: 12, detail: "Name 5 things you can see" },
      { name: "Feel 4", kind: "steady", duration: 12, detail: "Notice 4 things you can feel" },
      { name: "Hear 3", kind: "steady", duration: 12, detail: "Listen for 3 sounds" },
      { name: "Smell 2", kind: "steady", duration: 12, detail: "Find 2 things you can smell" },
      { name: "Taste 1", kind: "steady", duration: 12, detail: "Notice 1 thing you can taste" },
    ],
  },
  {
    id: "one-minute-plank",
    title: "One-minute plank",
    description:
      "Get into position, then hold a forearm plank for 55 seconds. Keep your body in a straight line.",
    type: "guided-steps",
    steps: [
      { name: "Get ready", kind: "steady", duration: 5, detail: "Forearms down, elbows under shoulders" },
      { name: "Hold", kind: "hold", duration: 25, detail: "Straight line, core tight" },
      { name: "Keep going", kind: "hold", duration: 20, detail: "Breathe steadily" },
      { name: "Almost there", kind: "hold", duration: 10, detail: "Final push!" },
    ],
  },
  {
    id: "she-sells-seashells",
    title: "She sells seashells",
    description:
      "English tongue twister. Time how fast you can say the whole text clearly.",
    type: "timed-reading",
    text: `She sells seashells by the seashore.
The shells she sells are surely seashells.
So if she sells shells on the seashore,
I'm sure she sells seashore shells.
Red lorry, yellow lorry, red lorry, yellow lorry.
Peter Piper picked a peck of pickled peppers.
A peck of pickled peppers Peter Piper picked.
How much wood would a woodchuck chuck if a woodchuck could chuck wood?`,
  },
];

// Expose for plain <script> usage.
window.EXERCISES = EXERCISES;
