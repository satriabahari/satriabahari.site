import ThemeToggle from "../../elements/ThemeToggle";
import ProfileHeader from "./ProfileHeader";

export default function Profile() {
  return (
    <div className="flex flex-col space-y-4">
      <ProfileHeader />
      <ThemeToggle />
    </div>
  );
}
