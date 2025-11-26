import { AppHeader } from "@/components/layout";
import { AppSidebar } from "@/components/layout";
import { SidebarProvider } from "@/components/ui/sidebar";
import "./globals.css";

export default function AppLayout({ children }) {
    return (
        <html lang="ko">
            <body className="flex flex-col max-w-7xl mx-auto">
                <AppHeader />
                <SidebarProvider>
                    <div className="flex flex-row w-full">
                        <AppSidebar />
                        <main>{children}</main>
                    </div>
                </SidebarProvider>
            </body>
        </html>
    );
}
