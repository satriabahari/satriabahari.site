import { useNotifStore } from "@/common/stores/notif"

export function useNotif() {
  const { showNotif, setNotifText } = useNotifStore()

  function notif(text: string) {
    setNotifText(text)
    showNotif()
  }

  return notif
}
