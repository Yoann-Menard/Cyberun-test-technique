interface ValidationError {
  message: string;
}

export const validatePourcentages = (
  formData: any
): { errors: ValidationError[] } => {
  let totalPourcentage = 0;
  formData.pourcentages.forEach((item: any) => {
    totalPourcentage += item.pourcentage;
  });
  if (totalPourcentage !== 100) {
    return {
      errors: [{ message: "Pour être valide l'ensemble doit faire 100%" }],
    };
  }
  return { errors: [] };
};
