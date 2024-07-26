interface SkillCardProps {
  name: string;
  icon: JSX.Element;
}

const SkillCard = ({ name, icon }: SkillCardProps) => {
  return (
    <div className="px-2">
      <div className="flex w-full space-x-2 rounded-full border border-neutral-300 bg-neutral-100 px-4 py-2 shadow-sm dark:border-neutral-600 dark:bg-neutral-800">
        <div className="h-6 w-6">{icon}</div>
        <div className="whitespace-nowrap">{name}</div>
      </div>
    </div>
  );
};

export default SkillCard;
