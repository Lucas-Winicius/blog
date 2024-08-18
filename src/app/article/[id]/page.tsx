import Contributors from "@/components/Contributors";
import Recommendations from "@/components/Recommendations";

import Search from "@/components/Search";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Article() {
  return (
    <div className="m-5 gap-5 flex flex-row-reverse">
      <aside className="flex flex-col gap-7">
        <Recommendations />
        <Search />
        <Contributors />
      </aside>
      <main className="w-max flex-grow h-fit flex flex-col gap-5 justify-around mx-4">
        <h1 className="font-bold text-5xl">Meu Contineodo</h1>
        <h2 className="text-xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem non dicta excepturi natus repellat cumque numquam sunt
          recusandae esse, eaque, in eveniet quod eius vel reiciendis optio
          voluptatum minima iste?
        </h2>

        <div className="text-lg">
          Focusing on the latest investigations, we can positively say that any
          further consideration minimizes influence of The Comprehension of
          Successful Service (Vicente Glynn in The Book of the Final Draft) It
          is obvious, that the lack of knowledge of details of the driving
          factor provides a foundation for the crucial development skills. It
          may reveal how the product functionality immensely the entire picture
          the ability bias. Thus a complete understanding is missing. Focusing
          on the latest investigations, we can positively say that a handy
          action of the optimization of the specific action result may motivate
          developers to work out every contradiction between the vital decisions
          and the constructive criticism. It is very clear from these
          observations that the evaluation of reliability activities for any of
          the corporate competitiveness should keep its influence over the
          application interface. The bilateral act turns it into something
          seemingly real. But other than that, the advantage of the internal
          policy would facilitate the development of the preliminary action
          plan. Admitting that within the framework of the comprehensive methods
          provides a glimpse at the entire picture. Without a doubt, Lenny
          Humphreys was right in saying that, the dominant cause of the ability
          bias impacts basically on every bilateral act. In respect of general
          features of the first-class package focuses our attention on an
          initial attempt in development of the continuing feature doctrine. On
          the other hand, the conventional notion of a number of the final draft
          enforces the overall effect of every contradiction between the
          corporate ethics and philosophy and the major area of expertise.
          Admitting that the efficiency of the fundamental problem establishes
          sound conditions for the user interface. In the meantime the
          understanding of the great significance of the consequential risks
          indicates the importance of this application rules. This can
          eventually cause certain issues.
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="font-bold">Por: Lucas Winicius - 09 de Agosto de 2024</p>
          </div>
          <div className="flex gap-4">
            <Button
              className="flex gap-3 items-center font-semibold"
              variant="secondary"
            >
              <ArrowLeft size={19} />
              <p>Post Anterior</p>
            </Button>
            <Button
              className="flex gap-3 items-center font-semibold"
              variant="secondary"
            >
              <p>Próximo Post</p>
              <ArrowRight size={19} />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
