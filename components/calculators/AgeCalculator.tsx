"use client";

import { useState } from "react";
import { CalendarDays, Gift, Clock, Calendar } from "lucide-react";

interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalWeeks: number;
  nextBirthdayDays: number;
}

function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

function daysInMonth(month: number, year: number): number {
  return new Date(year, month, 0).getDate();
}

function calculateAge(birthDate: Date, targetDate: Date): AgeResult | null {
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
    // Count how many days from the birth-day in the previous month to the target day.
    // We create a reference date: "birth day in the month before target".
    // If birth day exceeds that month's length, Date auto-rolls forward, which is fine —
    // we then compute the difference from that rolled date to the target date.
    const prevMonthWithBDay = new Date(tYear, tMonth - 1, bDay);
    const msPerDay = 1000 * 60 * 60 * 24;
    days = Math.round((targetDate.getTime() - prevMonthWithBDay.getTime()) / msPerDay);
    // If prevMonthWithBDay rolled forward past target (e.g., bDay=31 in a 28-day month rolls to next month),
    // days could still be negative. In that case, borrow one more month.
    if (days < 0) {
      months--;
      const prevPrevMonthWithBDay = new Date(tYear, tMonth - 2, bDay);
      days = Math.round((targetDate.getTime() - prevPrevMonthWithBDay.getTime()) / msPerDay);
    }
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  // Total days calculation
  const msPerDay = 1000 * 60 * 60 * 24;
  const totalDays = Math.floor((targetDate.getTime() - birthDate.getTime()) / msPerDay);
  const totalWeeks = Math.floor(totalDays / 7);

  // Next birthday countdown
  let nextBirthday = new Date(
    targetDate.getFullYear(),
    birthDate.getMonth(),
    birthDate.getDate()
  );

  // Handle Feb 29 birthdays: if target year is not leap, use Feb 28
  if (birthDate.getMonth() === 1 && birthDate.getDate() === 29) {
    if (!isLeapYear(targetDate.getFullYear())) {
      nextBirthday = new Date(targetDate.getFullYear(), 1, 28);
    }
  }

  if (nextBirthday <= targetDate) {
    // Move to next year
    const nextYear = targetDate.getFullYear() + 1;
    if (birthDate.getMonth() === 1 && birthDate.getDate() === 29) {
      // Feb 29 birthday: find the next leap year, but use Feb 28 in non-leap years
      if (isLeapYear(nextYear)) {
        nextBirthday = new Date(nextYear, 1, 29);
      } else {
        nextBirthday = new Date(nextYear, 1, 28);
      }
    } else {
      nextBirthday = new Date(nextYear, birthDate.getMonth(), birthDate.getDate());
    }
  }

  const nextBirthdayDays = Math.ceil((nextBirthday.getTime() - targetDate.getTime()) / msPerDay);

  return { years, months, days, totalDays, totalWeeks, nextBirthdayDays };
}

export default function AgeCalculator() {
  const [birthDateStr, setBirthDateStr] = useState("");
  const [targetDateStr, setTargetDateStr] = useState("");
  const [result, setResult] = useState<AgeResult | null>(null);
  const [error, setError] = useState("");

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!birthDateStr) {
      setError("Veuillez entrer votre date de naissance.");
      return;
    }

    const birth = new Date(birthDateStr + "T00:00:00");
    const target = targetDateStr
      ? new Date(targetDateStr + "T00:00:00")
      : new Date(new Date().toISOString().split("T")[0] + "T00:00:00");

    if (isNaN(birth.getTime())) {
      setError("Date de naissance invalide.");
      return;
    }
    if (isNaN(target.getTime())) {
      setError("Date cible invalide.");
      return;
    }
    if (birth >= target) {
      setError("La date de naissance doit être antérieure à la date cible.");
      return;
    }

    const res = calculateAge(birth, target);
    if (res) setResult(res);
  };

  const todayStr = new Date().toISOString().split("T")[0];

  return (
    <div className="bg-card border border-border shadow-sm rounded-2xl p-6 md:p-8 max-w-2xl mx-auto">
      <form onSubmit={handleCalculate} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="birth-date" className="block text-sm font-medium mb-2 text-foreground/80">
              Date de naissance
            </label>
            <div className="relative">
              <input
                type="date"
                id="birth-date"
                value={birthDateStr}
                onChange={(e) => setBirthDateStr(e.target.value)}
                max={todayStr}
                className="w-full pl-4 pr-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="target-date" className="block text-sm font-medium mb-2 text-foreground/80">
              Calculer l&apos;âge à la date du
            </label>
            <div className="relative">
              <input
                type="date"
                id="target-date"
                value={targetDateStr}
                onChange={(e) => setTargetDateStr(e.target.value)}
                placeholder={todayStr}
                className="w-full pl-4 pr-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
              />
              <span className="block mt-1 text-xs text-foreground/50">
                Laissez vide pour aujourd&apos;hui
              </span>
            </div>
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-500 font-medium">{error}</p>
        )}

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg"
        >
          <CalendarDays className="h-5 w-5" />
          <span>Calculer mon âge</span>
        </button>
      </form>

      {result && (
        <div className="mt-8 pt-8 border-t border-border animate-in fade-in slide-in-from-bottom-4 duration-500">
          <h3 className="text-lg font-semibold mb-6 text-center">Résultat de votre calcul</h3>

          {/* Primary result */}
          <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl p-6 text-center mb-6">
            <p className="text-sm text-foreground/60 mb-3 uppercase tracking-wider font-medium">
              Votre âge exact
            </p>
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <div className="bg-white dark:bg-slate-900 rounded-xl px-5 py-3 shadow-sm border border-border">
                <p className="text-3xl font-extrabold text-primary">{result.years}</p>
                <p className="text-xs text-foreground/60 font-medium">an{result.years !== 1 ? "s" : ""}</p>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl px-5 py-3 shadow-sm border border-border">
                <p className="text-3xl font-extrabold text-primary">{result.months}</p>
                <p className="text-xs text-foreground/60 font-medium">mois</p>
              </div>
              <div className="bg-white dark:bg-slate-900 rounded-xl px-5 py-3 shadow-sm border border-border">
                <p className="text-3xl font-extrabold text-primary">{result.days}</p>
                <p className="text-xs text-foreground/60 font-medium">jour{result.days !== 1 ? "s" : ""}</p>
              </div>
            </div>
          </div>

          {/* Bonus stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900/40 text-blue-600">
                <Calendar className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-foreground/60 font-medium">Total jours</p>
                <p className="text-lg font-bold text-foreground">{result.totalDays.toLocaleString("fr-FR")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/40 text-purple-600">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-foreground/60 font-medium">Total semaines</p>
                <p className="text-lg font-bold text-foreground">{result.totalWeeks.toLocaleString("fr-FR")}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-slate-50 dark:bg-slate-800/50 rounded-xl p-4">
              <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center rounded-lg bg-pink-100 dark:bg-pink-900/40 text-pink-600">
                <Gift className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs text-foreground/60 font-medium">Prochain anniversaire</p>
                <p className="text-lg font-bold text-foreground">{result.nextBirthdayDays} jour{result.nextBirthdayDays !== 1 ? "s" : ""}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
