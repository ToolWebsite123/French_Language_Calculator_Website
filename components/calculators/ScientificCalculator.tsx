"use client";

import React, { useState, useEffect, useRef } from "react";
import { create, all } from "mathjs";
import { History, ChevronDown, ChevronUp, Delete } from "lucide-react";

const math = create(all);

export default function ScientificCalculator() {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState("");
  const [isDeg, setIsDeg] = useState(true);
  const [is2nd, setIs2nd] = useState(false);
  const [history, setHistory] = useState<{ expr: string; res: string }[]>([]);
  const [showHistory, setShowHistory] = useState(false);

  const displayRef = useRef<HTMLDivElement>(null);

  // Evaluate expression
  const evaluateExpression = (expr: string) => {
    try {
      if (!expr) return "";

      let parsedExpr = expr
        .replace(/×/g, "*")
        .replace(/÷/g, "/")
        .replace(/π/g, "pi")
        .replace(/e/g, "e");

      // Auto-close missing parentheses
      const openParens = (parsedExpr.match(/\(/g) || []).length;
      const closeParens = (parsedExpr.match(/\)/g) || []).length;
      if (openParens > closeParens) {
        parsedExpr += ")".repeat(openParens - closeParens);
      }

      // Handle infix nCr and nPr
      parsedExpr = parsedExpr.replace(/(\d+(?:\.\d+)?)\s*nCr\s*(\d+(?:\.\d+)?)/g, "nCr($1, $2)");
      parsedExpr = parsedExpr.replace(/(\d+(?:\.\d+)?)\s*nPr\s*(\d+(?:\.\d+)?)/g, "nPr($1, $2)");

      const scope = {
        nCr: math.combinations,
        nPr: math.permutations,
        sin: (x: any) => (isDeg ? math.sin(math.unit(x, "deg")) : math.sin(x)),
        cos: (x: any) => (isDeg ? math.cos(math.unit(x, "deg")) : math.cos(x)),
        tan: (x: any) => (isDeg ? math.tan(math.unit(x, "deg")) : math.tan(x)),
        asin: (x: any) => (isDeg ? math.asin(x).toNumber("deg") : math.asin(x)),
        acos: (x: any) => (isDeg ? math.acos(x).toNumber("deg") : math.acos(x)),
        atan: (x: any) => (isDeg ? math.atan(x).toNumber("deg") : math.atan(x)),
        sec: (x: any) => (isDeg ? math.sec(math.unit(x, "deg")) : math.sec(x)),
        csc: (x: any) => (isDeg ? math.csc(math.unit(x, "deg")) : math.csc(x)),
        cot: (x: any) => (isDeg ? math.cot(math.unit(x, "deg")) : math.cot(x)),
        asec: (x: any) => (isDeg ? math.asec(x).toNumber("deg") : math.asec(x)),
        acsc: (x: any) => (isDeg ? math.acsc(x).toNumber("deg") : math.acsc(x)),
        acot: (x: any) => (isDeg ? math.acot(x).toNumber("deg") : math.acot(x)),
      };

      const res = math.evaluate(parsedExpr, scope);

      if (res === undefined || typeof res === "function") return "";
      
      let formatted = math.format(res, { precision: 14 });
      if (formatted === "Infinity" || formatted === "-Infinity" || formatted === "NaN") {
        return "Erreur";
      }
      return formatted;
    } catch (error) {
      return "";
    }
  };

  useEffect(() => {
    if (expression) {
      const res = evaluateExpression(expression);
      if (res !== "") setResult(res);
      else setResult("");
    } else {
      setResult("");
    }
    
    // Auto-scroll display to right
    if (displayRef.current) {
      displayRef.current.scrollLeft = displayRef.current.scrollWidth;
    }
  }, [expression, isDeg]);

  const handleInput = (val: string) => {
    setExpression((prev) => prev + val);
  };

  const handleClear = () => {
    setExpression("");
    setResult("");
  };

  const handleDelete = () => {
    setExpression((prev) => prev.slice(0, -1));
  };

  const handleEqual = () => {
    const res = evaluateExpression(expression);
    if (res !== "" && res !== "Erreur") {
      setHistory((prev) => [{ expr: expression, res }, ...prev].slice(0, 20));
      setExpression(res.toString());
      setResult("");
    }
  };

  const handleNegate = () => {
    if (!expression) return;
    const match = expression.match(/(-?\d+\.?\d*)$/);
    if (match) {
      const lastNum = match[1];
      const newNum = lastNum.startsWith("-") ? lastNum.slice(1) : "-" + lastNum;
      setExpression(expression.slice(0, expression.length - lastNum.length) + newNum);
    } else if (expression.startsWith("-")) {
      setExpression(expression.slice(1));
    } else {
      setExpression("-" + expression);
    }
  };

  const sciButtons = [
    { label: "2nd", type: "toggle", color: is2nd ? "bg-blue-100 dark:bg-blue-900/50 text-blue-600" : "bg-slate-100 dark:bg-slate-800" }, 
    { label: "π", val: "π" }, 
    { label: "e", val: "e" }, 
    { label: ",", val: "," },

    { label: is2nd ? "asin" : "sin", val: is2nd ? "asin(" : "sin(" }, 
    { label: is2nd ? "acos" : "cos", val: is2nd ? "acos(" : "cos(" }, 
    { label: is2nd ? "atan" : "tan", val: is2nd ? "atan(" : "tan(" }, 
    { label: "!", val: "!" },

    { label: is2nd ? "asec" : "sec", val: is2nd ? "asec(" : "sec(" }, 
    { label: is2nd ? "acsc" : "csc", val: is2nd ? "acsc(" : "csc(" }, 
    { label: is2nd ? "acot" : "cot", val: is2nd ? "acot(" : "cot(" }, 
    { label: "y√x", val: "nthRoot(" },

    { label: is2nd ? "asinh" : "sinh", val: is2nd ? "asinh(" : "sinh(" }, 
    { label: is2nd ? "acosh" : "cosh", val: is2nd ? "acosh(" : "cosh(" }, 
    { label: is2nd ? "atanh" : "tanh", val: is2nd ? "atanh(" : "tanh(" }, 
    { label: "xʸ", val: "^" },

    { label: "√x", val: "sqrt(" }, 
    { label: "³√x", val: "cbrt(" }, 
    { label: "x²", val: "^2" }, 
    { label: "x³", val: "^3" },

    { label: is2nd ? "10ˣ" : "log", val: is2nd ? "10^" : "log10(" }, 
    { label: is2nd ? "eˣ" : "ln", val: is2nd ? "e^" : "log(" }, 
    { label: "nCr", val: " nCr " }, 
    { label: "nPr", val: " nPr " },
  ];

  const numButtons = [
    { label: "(", val: "(" }, { label: ")", val: ")" }, { label: "%", val: "%" }, { label: "C", action: "clear", color: "text-red-500 font-medium" },
    { label: "7", val: "7", bold: true }, { label: "8", val: "8", bold: true }, { label: "9", val: "9", bold: true }, { label: "÷", val: "÷", color: "text-blue-600 font-medium text-xl" },
    { label: "4", val: "4", bold: true }, { label: "5", val: "5", bold: true }, { label: "6", val: "6", bold: true }, { label: "×", val: "×", color: "text-blue-600 font-medium text-xl" },
    { label: "1", val: "1", bold: true }, { label: "2", val: "2", bold: true }, { label: "3", val: "3", bold: true }, { label: "-", val: "-", color: "text-blue-600 font-medium text-xl" },
    { label: "0", val: "0", bold: true }, { label: ".", val: ".", bold: true }, { label: "⌫", action: "delete", color: "text-red-500 font-medium text-xl" }, { label: "+", val: "+", color: "text-blue-600 font-medium text-xl" },
    { label: "±", action: "negate" }, { label: "=", action: "equal", span: 3, color: "bg-blue-600 text-white hover:bg-blue-700 dark:hover:bg-blue-500" }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
      {/* Display Section */}
      <div className="p-6 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
        <div className="flex flex-col items-end min-h-[100px] justify-end space-y-2">
          {/* Main Expression */}
          <div 
            ref={displayRef}
            className="w-full text-right text-3xl md:text-5xl font-light text-slate-900 dark:text-slate-100 overflow-x-auto overflow-y-hidden whitespace-nowrap scrollbar-hide py-2"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {expression || "0"}
          </div>
          {/* Live Result / Ghost */}
          <div className="text-xl text-slate-500 dark:text-slate-400 font-medium min-h-[28px]">
            {result ? `= ${result}` : ""}
          </div>
        </div>
      </div>

      {/* Controls & Tools Bar */}
      <div className="px-6 py-3 bg-slate-100/50 dark:bg-slate-900 flex justify-between items-center border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center space-x-1 bg-slate-200/80 dark:bg-slate-800 rounded-lg p-1">
          <button
            onClick={() => setIsDeg(true)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              isDeg ? "bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            }`}
          >
            Deg
          </button>
          <button
            onClick={() => setIsDeg(false)}
            className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
              !isDeg ? "bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
            }`}
          >
            Rad
          </button>
        </div>
        
        <div className="relative">
          <button 
            onClick={() => setShowHistory(!showHistory)}
            className="flex items-center space-x-2 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-3 py-2 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            <History size={16} />
            <span>Historique</span>
            {showHistory ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
          
          {showHistory && (
            <div className="absolute right-0 top-full mt-2 w-64 max-h-64 overflow-y-auto bg-white dark:bg-slate-800 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 z-10">
              {history.length === 0 ? (
                <div className="p-4 text-center text-sm text-slate-500">Aucun historique</div>
              ) : (
                <div className="flex flex-col">
                  {history.map((item, idx) => (
                    <button
                      key={idx}
                      className="text-left p-3 hover:bg-slate-50 dark:hover:bg-slate-700/50 border-b last:border-0 border-slate-100 dark:border-slate-700 transition-colors"
                      onClick={() => {
                        setExpression(item.expr);
                        setShowHistory(false);
                      }}
                    >
                      <div className="text-xs text-slate-500 mb-1">{item.expr}</div>
                      <div className="text-sm font-medium text-slate-900 dark:text-white">= {item.res}</div>
                    </button>
                  ))}
                  <button 
                    onClick={() => setHistory([])}
                    className="p-2 text-xs text-center text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 transition-colors font-medium"
                  >
                    Effacer l'historique
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Keypad */}
      <div className="p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-6 bg-white dark:bg-slate-900">
        
        {/* Scientific Pad (4 cols) */}
        <div className="grid grid-cols-4 gap-2 md:gap-3 flex-1">
          {sciButtons.map((btn, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (btn.type === "toggle") setIs2nd(!is2nd);
                else if (btn.val) handleInput(btn.val);
              }}
              className={`h-12 md:h-14 flex items-center justify-center rounded-xl text-sm md:text-base transition-all active:scale-95 ${
                btn.color || "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Numpad (4 cols) */}
        <div className="grid grid-cols-4 gap-2 md:gap-3 flex-1">
          {numButtons.map((btn, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (btn.action === "clear") handleClear();
                else if (btn.action === "delete") handleDelete();
                else if (btn.action === "equal") handleEqual();
                else if (btn.action === "negate") handleNegate();
                else if (btn.val) handleInput(btn.val);
              }}
              className={`h-12 md:h-14 flex items-center justify-center rounded-xl text-lg md:text-xl transition-all active:scale-95 ${
                btn.span ? `col-span-${btn.span}` : ""
              } ${
                btn.bold ? "font-semibold bg-white hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-900 dark:text-white shadow-sm border border-slate-100 dark:border-slate-700" :
                btn.color || "bg-slate-50 hover:bg-slate-100 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300"
              }`}
            >
              {btn.label}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
