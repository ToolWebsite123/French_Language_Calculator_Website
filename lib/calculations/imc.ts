export interface ImcResult {
  imc: number;
  category: string;
  colorClass: string;
}

export function calculateImc(weightKg: number, heightCm: number): ImcResult {
  const heightM = heightCm / 100;
  const imc = weightKg / (heightM * heightM);
  
  let category = "";
  let colorClass = "";

  if (imc < 18.5) {
    category = "Insuffisance pondérale";
    colorClass = "text-blue-500";
  } else if (imc < 25) {
    category = "Poids normal";
    colorClass = "text-green-500";
  } else if (imc < 30) {
    category = "Surpoids";
    colorClass = "text-orange-500";
  } else {
    category = "Obésité";
    colorClass = "text-red-500";
  }

  return {
    imc,
    category,
    colorClass
  };
}
