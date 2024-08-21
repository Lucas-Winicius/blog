import { Frown, RotateCcw } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center gap-6">
      <div>
        <Frown size={300} color="grey" />
      </div>
      <div className="flex flex-col gap-4">
        <h1 className="font-bold text-7xl">Ooops!</h1>
        <p className="text-2xl">Parece que você encontrou o inexistente.</p>
        <Link href="/" className="flex items-center gap-4 text-lg font-semibold">
          <RotateCcw size={25} />
          <p>Recomeçar</p>
        </Link>
      </div>
    </div>
  );
}
