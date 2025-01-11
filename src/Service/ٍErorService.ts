import { useState, useEffect } from "react";

type ErrorType = "error" | "warning" | "info";

interface ErrorMessage {
  id: string;
  message: string;
  type: ErrorType;
}

export const useErrorService = (autoClearTimeout: number = 5000) => {
  const [errors, setErrors] = useState<ErrorMessage[]>([]);

  const addError = (message: string, type: ErrorType = "error") => {
    const newError: ErrorMessage = {
      id: Math.random().toString(36).substring(7),
      message,
      type,
    };
    setErrors((prevErrors) => [...prevErrors, newError]);

    if (autoClearTimeout > 0) {
      setTimeout(() => {
        removeError(newError.id);
      }, autoClearTimeout);
    }
  };

  const removeError = (id: string) => {
    setErrors((prevErrors) => prevErrors.filter((error) => error.id !== id));
  };

  const clearAllErrors = () => {
    setErrors([]);
  };

  return {
    errors,
    addError,
    removeError,
    clearAllErrors,
  };
};
