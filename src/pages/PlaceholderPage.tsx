import { useTranslation } from "@/hooks/useTranslation";
import { Card } from "@/components/ui/Card";
import { Construction, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/Button";

interface PlaceholderPageProps {
  title: string;
}

export function PlaceholderPage({ title }: PlaceholderPageProps) {
  const { locale } = useTranslation();

  return (
    <div className="mx-auto max-w-2xl">
      <Card className="p-8 text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/30">
          <Construction className="h-10 w-10 text-yellow-600 dark:text-yellow-400" />
        </div>
        
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white">
          {title}
        </h1>
        
        <p className="mx-auto mt-4 max-w-md text-zinc-600 dark:text-zinc-400">
          {locale === "es" 
            ? "Esta sección estará disponible próximamente. Estamos trabajando para traerte el mejor contenido educativo."
            : "This section will be available soon. We're working to bring you the best educational content."}
        </p>

        <div className="mt-8">
          <Link to="/">
            <Button variant="outline">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {locale === "es" ? "Volver al Dashboard" : "Back to Dashboard"}
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
