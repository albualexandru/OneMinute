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
];

// Expose for plain <script> usage.
window.EXERCISES = EXERCISES;
