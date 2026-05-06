import { Outlet } from "@tanstack/react-router";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { footerColumns, headerData } from "./data/mockData";
import { CartActionsProvider, useCartActions } from "./hooks/useCartActions";

export interface AppProps extends Readonly<Record<string, never>> {}

export default function App(_props: AppProps) {
  return (
    <CartActionsProvider initialBagCount={headerData.bagCount}>
      <AppShell />
    </CartActionsProvider>
  );
}

function AppShell() {
  const { bagCount } = useCartActions();

  return (
    <div className="min-h-screen overflow-x-hidden bg-background font-body text-on-background selection:bg-action-volt selection:text-primary">
      <Header data={{ ...headerData, bagCount }} />
      <Outlet />
      <Footer columns={footerColumns} />
    </div>
  );
}
