import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function ButtonContact() {
  return (
    <Link
      href={"https://wa.me/212629067021"}
      className="cursor-pointer fixed bg-[#25d366] rounded-full p-3 bottom-10 right-4 "
    >
      <FaWhatsapp size={30} color="white" />
    </Link>
  );
}
