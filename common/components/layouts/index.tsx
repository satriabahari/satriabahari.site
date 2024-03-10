"use client";

import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

import Sidebar from "./sidebar";

type LayoutsProps = {
  children: React.ReactNode;
};

export default function Layouts({ children }: LayoutsProps) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 50,
    });
  }, []);
  return (
    <div className="mx-auto lg:px-12">
      <div className="flex flex-col lg:flex-row lg:gap-5 lg:py-4">
        <Sidebar />
        <main className="max-w-[854px] transition-all duration-300 lg:w-4/5">
          {children}
        </main>
      </div>
    </div>
  );
}
