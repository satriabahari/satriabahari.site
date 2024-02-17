// import { useState } from "react";

// type Contribution = {
//   date: string;
//   contributionCount: number;
//   color: string;
// };

// type Month = {
//   name: string;
//   firstDay: string;
//   totalWeeks: number;
//   contributionsCount: number;
// };

// type CalendarProps = {
//   data?: {
//     weeks: {
//       firstDay: string;
//       contributionDays: Contribution[];
//     }[];
//     months: Month[];
//     colors: string[];
//   };
// };

// export default function Calendar({ data }: CalendarProps) {
//   const [selectContribution, setSelectContribution] = useState<{
//     count: number | null;
//     date: string | null;
//   }>({ count: null, date: null });

//   const weeks = data?.weeks ?? [];
//   const months =
//     data?.months?.map((month: Month) => {
//       const filterContributionDay = weeks
//         .filter(
//           (week) => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7),
//         )
//         .map((item) => item.contributionDays)
//         .flat(1);
//       const getContributionsByMonth = filterContributionDay.reduce(
//         (previousValue, currentValue) =>
//           previousValue + currentValue.contributionCount,
//         0,
//       );

//       return {
//         ...month,
//         contributionsCount: getContributionsByMonth,
//       };
//     }) ?? [];
//   const contributionColors = data?.colors ?? [];

//   return (
//     <div className="relative">
//       <ul className="flex justify-start gap-1 overflow-hidden text-xs dark:text-neutral-400">
//         {months.map((month) => (
//           <li key={month.firstDay}>{month.name}</li>
//         ))}
//       </ul>

//       <div>
//         {weeks?.map(week => (
//           <div key={week.firstDay}>
//             {week.contributionDays.map(contribution => {
//               const backgroundColor = contribution.contributionCount > 0 && contribution.color

              
//             })}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

'use client'

import clsx from 'clsx'
import { useState } from 'react'

type Contribution = {
  date: string
  contributionCount: number
  color: string
}

type Month = {
  name: string
  firstDay: string
  totalWeeks: number
  contributionsCount: number
}

type CalendarProps = {
  data?: {
    weeks: {
      firstDay: string
      contributionDays: Contribution[]
    }[]
    months: Month[]
    colors: string[]
  }
}

export default function Calendar({ data }: CalendarProps) {
  const [selectContribution, setSelectContribution] = useState<{
    count: number | null
    date: string | null
  }>({
    count: null,
    date: null
  })

  const weeks = data?.weeks ?? []
  const months =
    data?.months?.map((month: Month) => {
      const filterContributionDay = weeks
        .filter(week => week.firstDay.slice(0, 7) === month.firstDay.slice(0, 7))
        .map(item => item.contributionDays)
        .flat(1)
      const getContributionsByMonth = filterContributionDay.reduce(
        (previousValue, currentValue) => previousValue + currentValue.contributionCount,
        0
      )

      return {
        ...month,
        contributionsCount: getContributionsByMonth
      }
    }) ?? []

  const contributionColors = data?.colors ?? []

  return (
    <>
      <div className="relative flex flex-col">
        <ul className="flex justify-end gap-[3px] overflow-hidden text-xs dark:text-neutral-400 md:justify-start">
          {months.map(month => (
            <li
              key={month.firstDay}
              className={clsx(`${month.totalWeeks < 2 ? 'invisible' : ''}`)}
              style={{ minWidth: 14.3 * month.totalWeeks }}
            >
              {month.name}
            </li>
          ))}
        </ul>

        <div className="flex justify-start gap-[3px] overflow-hidden">
          {weeks?.map(week => (
            <div key={week.firstDay}>
              {week.contributionDays.map(contribution => {
                const backgroundColor = contribution.contributionCount > 0 && contribution.color

                const getRandomDelayAnimate = Math.random() * week.contributionDays.length * 0.15

                return (
                  <span
                    key={contribution.date}
                    className="my-[2px] block h-[12px] w-[12px] rounded-sm bg-neutral-300 dark:bg-neutral-800"
                    style={backgroundColor ? { backgroundColor } : undefined}
                    onMouseEnter={() =>
                      setSelectContribution({
                        count: contribution.contributionCount,
                        date: contribution.date
                      })
                    }
                    onMouseLeave={() => setSelectContribution({ count: null, date: null })}
                  />
                )
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2 text-sm">
          <span className="dark:text-neutral-400">Less</span>
          <ul className="flex gap-1">
            <li className="h-[10px] w-[10px] rounded-sm bg-neutral-300 dark:bg-neutral-800" />
            {contributionColors.map((item, index) => (
              <li
                key={item}
                className="h-[10px] w-[10px] rounded-sm"
                style={{ backgroundColor: item }}
              />
            ))}
          </ul>
          <span>More</span>
        </div>

        <div
          className={clsx(
            `${selectContribution?.date ? 'opacity-100' : 'opacity-0'}`,
            'rounded bg-neutral-200 px-2 text-sm dark:bg-neutral-700'
          )}
        >
          {selectContribution?.count} contributions on {selectContribution?.date}
        </div>
      </div>
    </>
  )
}

