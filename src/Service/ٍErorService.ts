export const useErrorService = () => {
  const error = new Error("Error message");
  return {
    error,
  };
};
