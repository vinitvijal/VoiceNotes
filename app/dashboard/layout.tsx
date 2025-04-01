import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider open={true}>
    <AppSidebar />
    <main>
      {children}
    </main>
  </SidebarProvider>
  );
}
