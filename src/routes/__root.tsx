import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, type ErrorComponentProps } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="text-center"><h1 className="text-7xl font-bold">404</h1><h2 className="mt-4 text-xl font-semibold">Página não encontrada</h2><Link to="/" className="mt-6 inline-flex rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Voltar ao início</Link></div></div>;
}
function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error); const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="text-center"><h1 className="text-xl font-semibold">Não foi possível carregar a página</h1><p className="mt-2 text-sm text-muted-foreground">Tente novamente.</p><button onClick={() => { router.invalidate(); reset(); }} className="mt-6 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground">Tentar novamente</button></div></div>;
}
export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({ meta: [
    { charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: "Sónia Medina | Estética Avançada & Laser — Santarém" },
    { name: "description", content: "Sónia Medina Estética Avançada & Laser em Santarém. HIFU, peelings, depilação a laser e estética avançada." },
    { name: "author", content: "Sónia Medina Estética Avançada & Laser" },
    { property: "og:title", content: "Sónia Medina — Estética Avançada & Laser" },
    { property: "og:description", content: "Estética avançada e tecnologia laser em Santarém, Portugal." },
    { property: "og:type", content: "website" }, { name: "theme-color", content: "#1c1c18" },
    { name: "twitter:card", content: "summary_large_image" }
  ], links: [{ rel: "stylesheet", href: appCss }, { rel: "icon", href: "/favicon.ico", type: "image/x-icon" }] }),
  shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});
function RootShell({ children }: { children: ReactNode }) { return <html lang="pt-PT"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { const { queryClient } = Route.useRouteContext(); return <QueryClientProvider client={queryClient}><Outlet /></QueryClientProvider>; }
