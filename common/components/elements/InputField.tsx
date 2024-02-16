export default function InputField({
  isTextArea = false,
  placeholder = "",
  rows = 2,
}) {
  return (
    <div className="w-full space-y-2">
      {isTextArea ? (
        <textarea
          rows={rows}
          placeholder={placeholder}
          className="w-full rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700"
        ></textarea>
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          className="w-full rounded-lg bg-neutral-50 p-2 outline outline-neutral-300 focus:outline-neutral-400 dark:bg-neutral-900 dark:outline-neutral-700"
        />
      )}
    </div>
  );
}
