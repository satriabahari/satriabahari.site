import { useNotifStore } from "@/common/stores/notif";

const useNotif = () => {
  const { showNotif, setNotifText } = useNotifStore();

  function notif(text: string) {
    setNotifText(text);
    showNotif();
  }

  return notif;
};

export default useNotif;
