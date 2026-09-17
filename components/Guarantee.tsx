import { ShieldCheck } from "lucide-react";

export function Guarantee() {
  return (
    <section className="container-custom">
      <div className="flex flex-col items-center gap-4 rounded-2xl border-2 border-accent/30 bg-accent/5 p-8 text-center md:flex-row md:text-left">
        <ShieldCheck className="h-14 w-14 shrink-0 text-accent" />
        <div>
          <h3 className="text-xl font-bold text-primary">Garantia incondicional de 7 dias</h3>
          <p className="mt-1 text-text-muted">
            Se você entrar no curso e sentir que não é pra você, é só nos chamar em até 7 dias
            após a compra. Devolvemos 100% do valor pago, sem perguntas e sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
}
