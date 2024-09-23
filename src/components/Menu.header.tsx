import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Github, Linkedin, MenuIcon } from "lucide-react";
import { Separator } from "./ui/separator";
import UserHeader from "./User.header";

export default function Menu() {
  return (
    <div className="flex items-center sm:hidden">
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <ul className="flex-col justify-between gap-7 items-center font-semibold space-y-4 text-black text-xl">
                <li>
                  <a href="/">Início</a>
                </li>
                <li>
                  <a href="/profile/me">Perfil</a>
                </li>
                <li>
                  <a href="/about">Sobre</a>
                </li>
                <li>
                  <a href="https://github.com/Lucas-Winicius" target="_blank" className="flex justify-center">
                    <Github size={30} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/lucas-winicius-souza/"
                    target="_blank" className="flex justify-center"
                  >
                    <Linkedin size={30} />
                  </a>

                </li>
                <li><Separator /></li>
                <li className="flex justify-center"><UserHeader /></li>
              </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
