// EQUAL
assertObjectsEqual({ a: '1', b: 2 }, { b: 2, a: '1' });
assertObjectsEqual({
  Lana: ["born to die", "ultraviolence", "NFR!"],
  Billie: "happier than ever",
  Taylor: ["folklore", "evermore", "midnights"],
  taylorGrammies: 11
}, {
  taylorGrammies: 11,
  Taylor: ["folklore", "evermore", "midnights"],
  Lana: ["born to die", "ultraviolence", "NFR!"],
  Billie: "happier than ever"
});

// NOT EQUAL
assertObjectsEqual({
  Lana: ["born to die", "ultraviolence", "NFR!"],
  Billie: "happier than ever",
  Taylor: ["folklore", "evermore", "midnights"],
  taylorGrammies: 11
}, {
  taylorGrammies: 11,
  Taylor: ["folklore", "evermore", "midnights"],
  Lana: ["NFR!", "ultraviolence", "born to die"],
  Billie: "happier than ever"
});