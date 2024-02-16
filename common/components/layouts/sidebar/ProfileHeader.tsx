import Link from "next/link";

import { MdVerified as VerifiedIcon } from "react-icons/md";
import Image from "next/image";

export default function ProfileHeader() {
  return (
    <div className="flex flex-col gap-1 lg:items-start">
      <div className="overflow-hidden rounded-full border-2 border-neutral-400">
        <Image
          src={"/images/satria.jpg"}
          width={100}
          height={100}
          alt="Satria Bahari"
        />
      </div>

      <div className="mt-4 flex items-center gap-x-2">
        <Link href="/">
          <h2 className="text-xl font-medium">Satria Bahari</h2>
        </Link>
        <VerifiedIcon size={18} className="text-blue-400" />
      </div>
      <Link
        href="/"
        className="text-sm text-neutral-600 transition-all duration-300 hover:text-neutral-800 dark:text-neutral-500 hover:dark:text-neutral-400"
      >
        @satriabaharii_
      </Link>
    </div>
  );
}
