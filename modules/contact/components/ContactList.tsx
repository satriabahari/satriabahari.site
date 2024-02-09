import { SOCIAL_MEDIA } from "@/common/constant/socialMedia";
import ContactCard from "./ContactCard";

export default function ContactList() {
  return (
    <div className="space-y-4">
      <h2>Find me on social media</h2>
      <div className="flex gap-x-4">
        {SOCIAL_MEDIA.map((media) => (
          <ContactCard key={media.title} {...media} />
        ))}
      </div>
    </div>
  );
}
