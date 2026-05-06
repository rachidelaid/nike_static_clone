import { useState } from "react";
import type { FormEvent } from "react";

export interface UseContactFormResult {
  readonly status: string;
  readonly handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function useContactForm(): UseContactFormResult {
  const [status, setStatus] = useState("Awaiting your brief.");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("Message received. A concierge specialist will reply within one business day.");
  }

  return { status, handleSubmit };
}
