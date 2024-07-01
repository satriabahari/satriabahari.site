import { SOCIAL_MEDIA } from "@/common/constant/socialMedia";

import ContactCard from "./ContactCard";

export default function ContactList() {
  const filteredSocialMedia = SOCIAL_MEDIA?.filter((social) => social?.isShow);
  return (
    <div className="flex flex-col space-y-4">
      <h2>Find me on social media</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {filteredSocialMedia.map((media) => (
          <ContactCard key={media.title} {...media} />
        ))}
      </div>
    </div>
  );
}
