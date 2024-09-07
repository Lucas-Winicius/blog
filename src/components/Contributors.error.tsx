import { TriangleAlert } from "lucide-react";

export default function ContributorsError() {
  return (
    <aside className="flex flex-col items-center gap-4 bg-zinc-100 px-4 py-6 rounded-lg w-72">
      <TriangleAlert size={50} color="red" />
      <p className="font-semibold text-center">
        Ooops! Não conseguimos carregar os contribuidores
      </p>
    </aside>
  );
}
