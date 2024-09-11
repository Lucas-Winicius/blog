import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { TabsContent } from "./ui/tabs";

export default function Signin() {
  return (
    <TabsContent value="create">
      <Card>
        <CardHeader>
          <CardTitle>Crie e aproveite!</CardTitle>
          <CardDescription>
            Com uma conta você não tera vantagens (por enquanto claro).
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Nome</Label>
            <Input id="name" placeholder="Adalberto Junior" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="username">Nome de usuário</Label>
            <Input id="username" placeholder="a.juninho123" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="password">Senha</Label>
            <Input id="password" type="password" placeholder="********" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="passwordvalidate">Sabe mesmo sua senha?</Label>
            <Input
              id="passwordvalidate"
              type="password"
              placeholder="********"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button>Criar</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  );
}
