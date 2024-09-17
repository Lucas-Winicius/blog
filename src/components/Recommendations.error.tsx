import { Bug } from "lucide-react";

export default function RecommendationsError() {
  return (
    <aside className="flex flex-col items-center gap-4 bg-zinc-100 px-4 py-6 rounded-lg w-72">
      <Bug size={50} color="red" />
      <p className="font-semibold text-center">
        Ooops! Não conseguimos carregar as recomendações
      </p>
    </aside>
  );
}
