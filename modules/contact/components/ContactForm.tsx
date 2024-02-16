import InputField from "@/common/components/elements/InputField";
import React from "react";

export default function ContactForm() {
  return (
    <div className="space-y-4">
      <h2>Or send me a message</h2>
      <form action="" className="space-y-4 transition-all duration-300">
        <div className="flex w-full space-x-2">
          <InputField />
          <InputField />
        </div>
        <InputField isTextArea />
        <button
          type="submit"
          className="rounded-lg bg-neutral-700 px-4 py-2 text-neutral-50 shadow-md hover:bg-neutral-800 hover:shadow-lg"
        >
          Send Email
        </button>
      </form>
    </div>
  );
}
