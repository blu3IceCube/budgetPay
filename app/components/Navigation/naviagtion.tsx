"use client";

import Link from "next/link";
import {
  House,
  ChartNoAxesColumnIncreasing,
  Bell,
  History,
} from "lucide-react";
import { usePathname } from "next/navigation";
import styles from "./navigation.module.css";
import { QrCode } from "lucide-react";

const Naviagtion = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="bg-cyan-600 h-[10%] w-full fixed bottom-0 left-0 right-0 flex flex-row items-center justify-between p-5">
      <Link
        href="/"
        className={`${pathname === "/" ? styles.active : styles.inactive}`}
      >
        <House size={32} />
      </Link>
      <Link
        href="/analytics"
        className={`${
          pathname === "/analytics" ? styles.active : styles.inactive
        }`}
      >
        <ChartNoAxesColumnIncreasing size={32} />
      </Link>
      <Link href="/" className="bg-transparent w-12 h-12 rounded-[50%]"></Link>
      <Link
        href="/notifications"
        className={`${
          pathname === "/notifications" ? styles.active : styles.inactive
        }`}
      >
        <Bell size={32} />
      </Link>
      <Link
        href="/history"
        className={`${
          pathname === "/history" ? styles.active : styles.inactive
        }`}
      >
        <History size={32} />
      </Link>
      <div className="absolute bottom-10 left-[40%] w-20 h-20 bg-blue-800 rounded-[50%] flex items-center justify-center border-4 border-white">
        <QrCode size={36} />
      </div>
    </nav>
  );
};

export default Naviagtion;
