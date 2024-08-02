import Button from "@/common/components/elements/Button";
import ComboBox from "@/common/components/elements/ComboBox";
import InputSearch from "@/common/components/elements/InputSearch";

const data = [
  {
    label: "Certificate",
    value: "certificate",
  },
  {
    label: "Badge",
    value: "badge",
  },
];

// const data = [
//   {
//     category: [
//       {
//         label: "Certificate",
//         value: "certificate",
//       },
//       {
//         label: "Badge",
//         value: "badge",
//       },
//     ],
//   },

//   {
//     organization: [
//       {
//         label: "Google",
//         value: "google",
//       },
//     ],
//   },
// ];

interface HeaderProps {
  totalData?: number;
}

const Header = ({ totalData }: HeaderProps) => {
  return (
    <div className="flex flex-col space-y-4">
      <div className="flex w-full flex-col items-center justify-between space-y-4 md:flex-row">
        <InputSearch placeholder="Search..." />
        <ComboBox
          data={data}
          param="category"
          label="achievements"
          url="achievements"
        />
      </div>
      <div className="ml-1 text-sm text-neutral-400">Total: {totalData}</div>
    </div>
  );
};

export default Header;
