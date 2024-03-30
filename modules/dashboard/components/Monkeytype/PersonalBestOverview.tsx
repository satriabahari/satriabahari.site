// import { format } from "date-fns";

// import { MonkeytypeData } from "@/common/types/monkeytype";
// import clsxm from "@/common/libs/clsxm";

// import OverviewItem from "./OverviewItem";

// type PersonalBestOverviewProps = {
//   data: MonkeytypeData;
//   type: "time" | "words";
//   isHover: number | null;
//   handleHover: (index: number | null) => void;
//   className?: string;
// };

// type ItemProps = {
//   value: string;
//   className?: string;
// };

// const Item = ({ className, value }: ItemProps) => (
//   <span
//     className={clsxm(
//       "text-xs text-neutral-600 dark:text-neutral-50",
//       className,
//     )}
//   >
//     {value}
//   </span>
// );

// export default function PersonalBestOverview({
//   data,
//   type,
//   isHover,
//   handleHover,
//   className,
// }: PersonalBestOverviewProps) {
//   const personalBestData =
//     type === "time" ? data?.personalBests.time : data?.personalBests.words;

//   return (
//     <div
//       className={clsxm(
//         "grid grid-cols-2 rounded-xl border border-neutral-200 bg-neutral-100 px-4 py-3 dark:border-neutral-800 dark:bg-neutral-800 sm:grid-cols-4",
//         className,
//       )}
//     >
//       {Object.keys(personalBestData).map((item, index) => {
//         const maxWpm = Object.values(personalBestData)[index].reduce(
//           (prevValue, currentValue) => {
//             return prevValue.wpm > currentValue.wpm ? prevValue : currentValue;
//           },
//         );

//         return (
//           <div
//             key={index}
//             onMouseEnter={() =>
//               handleHover(type === "time" ? index : index + 4)
//             }
//             onMouseLeave={() => handleHover(null)}
//             className="flex h-28 items-center justify-center"
//           >
//             {isHover === (type === "time" ? index : index + 4) ? (
//               <div className={"flex flex-col items-center gap-y-0.5"}>
//                 <Item
//                   value={`${item} ${type === "time" ? "seconds" : "words"}`}
//                   className="text-neutral-400 dark:text-neutral-400"
//                 />
//                 <Item value={`${Math.round(maxWpm.wpm)} wpm`} />
//                 <Item value={`${Math.round(maxWpm.raw)} raw`} />
//                 <Item value={`${Math.round(maxWpm.acc)}% acc`} />
//                 <Item value={`${Math.round(maxWpm.consistency)} con`} />
//                 <Item
//                   value={format(maxWpm.timestamp, "dd MMM yyyy")}
//                   className="text-neutral-400 dark:text-neutral-400"
//                 />
//               </div>
//             ) : (
//               <OverviewItem
//                 label={`${item} ${type === "time" ? "seconds" : "words"}`}
//                 value={Math.round(maxWpm.wpm)}
//                 subValue={`${Math.floor(maxWpm.acc)}%`}
//               />
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// }
