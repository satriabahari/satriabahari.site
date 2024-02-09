import Link from "next/link";

import { MdVerified as VerifiedIcon } from "react-icons/md";

export default function ProfileHeader() {
  return (
    <div>
      <div className="flex items-center gap-x-2">
        <Link href="/">
          <h2 className="text-xl font-medium">Satria Bahari</h2>
        </Link>
        <VerifiedIcon size={18} className="text-blue-400" />
      </div>
      <Link href="/" className="text-sm text-neutral-600">
        @satriabaharii_
      </Link>
    </div>
  );
}
