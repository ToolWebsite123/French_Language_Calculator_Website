// Test the age calculation logic (v4) — clamp approach
function daysInMonth(year, month0) {
  // month0 is 0-based. Returns the number of days in that month.
  return new Date(year, month0 + 1, 0).getDate();
}

function calculateAge(birthDate, targetDate) {
  if (birthDate >= targetDate) return null;

  const bYear = birthDate.getFullYear();
  const bMonth = birthDate.getMonth(); // 0-based
  const bDay = birthDate.getDate();
  const tYear = targetDate.getFullYear();
  const tMonth = targetDate.getMonth();
  const tDay = targetDate.getDate();

  let years = tYear - bYear;
  let months = tMonth - bMonth;
  let days = tDay - bDay;

  if (days < 0) {
    months--;
    // Get the number of days in the month BEFORE the target month
    const prevM = tMonth === 0 ? 11 : tMonth - 1;
    const prevY = tMonth === 0 ? tYear - 1 : tYear;
    const daysInPrevM = daysInMonth(prevY, prevM);
    // The birth day, clamped to the max days of the previous month
    // e.g., born Jan 31, prev month = Feb (28 days) → clamp to 28
    // This means "the last possible anniversary day in Feb" = Feb 28
    // Then days from Feb 28 → Mar 1 = 1 day. Correct!
    const clampedBDay = Math.min(bDay, daysInPrevM);
    days = tDay + (daysInPrevM - clampedBDay);
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}

const tests = [
  ["2000-02-29", "2026-02-28", "25y 11m 30d"],
  ["2000-01-31", "2000-03-01", "0y 1m 1d"],
  ["2000-01-31", "2000-03-02", "0y 1m 2d"],
  ["1990-06-15", "2026-06-27", "36y 0m 12d"],
  ["2000-03-31", "2000-04-30", "0y 0m 30d"],
  ["2000-12-31", "2001-01-01", "0y 0m 1d"],
  ["2000-01-01", "2001-01-01", "1y 0m 0d"],
  ["2000-01-15", "2000-02-14", "0y 0m 30d"],
  ["2000-01-15", "2000-02-15", "0y 1m 0d"],
  ["2024-02-29", "2025-02-28", "0y 11m 30d"],
  ["2024-02-29", "2025-03-01", "1y 0m 1d"],
  ["2000-01-31", "2000-02-29", "0y 0m 29d"],
  ["2001-01-31", "2001-02-28", "0y 0m 28d"],
  ["2000-08-31", "2000-10-01", "0y 1m 1d"],
  ["2000-05-31", "2000-07-01", "0y 1m 1d"],  // May 31 → Jul 1 (June has 30d)
  ["2000-03-15", "2000-04-15", "0y 1m 0d"],  // Exact month
  ["2000-03-31", "2000-05-01", "0y 1m 1d"],  // Mar 31 → May 1 (April has 30d)
];

tests.forEach(([birth, target, expected]) => {
  const b = new Date(birth + "T00:00:00");
  const t = new Date(target + "T00:00:00");
  const r = calculateAge(b, t);
  const actual = `${r.years}y ${r.months}m ${r.days}d`;
  const pass = actual === expected ? "PASS" : "FAIL";
  console.log(`${pass}: ${birth} → ${target} = ${actual} (expected: ${expected})`);
});
