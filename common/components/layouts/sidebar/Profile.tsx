// "use client";

// import clsx from "clsx";
// import { AnimatePresence } from "framer-motion";
// import React, { useEffect, useState } from "react";

// import { useMenu } from "@/common/stores/menu";

// import MobileMenu from "./MobileMenu";
// import MobileMenuButton from "./MobileMenuButton";
// import ProfileHeader from "./ProfileHeader";
// import ThemeToggle from "../../elements/ThemeToggle";
// import useIsMobile from "@/hooks/useIsMobile";

// export default function Profile() {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [isMobile, setIsMobile] = useState(width < 769);

//   const { isOpen, toggleMenu } = useMenu();

//   const imageSize = isMobile ? 40 : 100;

//   useEffect(() => {
//     if (isOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }

//     return () => {
//       document.body.style.overflow = "auto";
//     };
//   }, [isOpen]);

//   useEffect(() => {
//     const updateWindowDimensions = () => {
//       const newWidth = window.innerWidth;
//       setWidth(newWidth);
//     };

//     window.addEventListener("resize", updateWindowDimensions);

//     setIsMobile(width < 821);
//   }, [isMobile, width]);

//   return (
//     <div
//       className={clsx(
//         "fixed z-20 w-full bg-neutral-50 p-5 shadow-sm dark:border-b dark:border-neutral-800 dark:bg-neutral-900 lg:relative lg:border-none lg:!bg-transparent lg:p-0 xl:shadow-none",
//         isOpen && "pb-0",
//       )}
//     >
//       <div className="flex items-start justify-between md:px-2 lg:flex-col lg:space-y-4">
//         <ProfileHeader expandMenu={isOpen} imageSize={imageSize} />
//         {isMobile && (
//           <div
//             className={clsx(
//               "mt-1 flex items-center gap-5 lg:hidden",
//               isOpen &&
//                 "h-[120px] flex-col-reverse !items-end justify-between pb-1",
//             )}
//           >
//             <ThemeToggle />
//             <MobileMenuButton expandMenu={isOpen} setExpandMenu={toggleMenu} />
//           </div>
//         )}
//       </div>

//       {isMobile && (
//         <AnimatePresence>{isOpen && <MobileMenu />}</AnimatePresence>
//       )}
//     </div>
//   );
// }

import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

import { useMenu } from "@/common/stores/menu";

import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import ProfileHeader from "./ProfileHeader";
import ThemeToggle from "../../elements/ThemeToggle";

export default function Profile() {
  const [width, setWidth] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const { isOpen, toggleMenu } = useMenu();

  const imageSize = isMobile ? 40 : 100;

  useEffect(() => {
    setWidth(window.innerWidth);
    setIsMobile(window.innerWidth < 769);

    const handleResize = () => {
      setWidth(window.innerWidth);
      setIsMobile(window.innerWidth < 769);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div
      className={clsx(
        "fixed z-20 w-full bg-neutral-50 p-5 shadow-sm dark:border-b dark:border-neutral-800 dark:bg-neutral-900 lg:relative lg:border-none lg:!bg-transparent lg:p-0 xl:shadow-none",
        isOpen && "pb-0",
      )}
    >
      <div className="flex items-start justify-between md:px-2 lg:flex-col lg:space-y-4">
        <ProfileHeader expandMenu={isOpen} imageSize={imageSize} />
        {isMobile && (
          <div
            className={clsx(
              "mt-1 flex items-center gap-5 lg:hidden",
              isOpen &&
                "h-[120px] flex-col-reverse !items-end justify-between pb-1",
            )}
          >
            <ThemeToggle />
            <MobileMenuButton expandMenu={isOpen} setExpandMenu={toggleMenu} />
          </div>
        )}
      </div>

      {isMobile && (
        <AnimatePresence>{isOpen && <MobileMenu />}</AnimatePresence>
      )}
    </div>
  );
}
