// import { createSupabaseServerComponentClient } from "@/lib/supabase/server-client";
// import { redirect } from "next/navigation";
import { DashboardSidebar } from "@/components/dashboard/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Commented out Supabase authentication for development
  // const supabase = createSupabaseServerComponentClient();
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  // if (!user) {
  //   return redirect("/sign-in");
  // }

  // Mock user object for development
  const user = {
    id: '1',
    email: 'test@example.com',
    user_metadata: {
      full_name: 'Test User'
    }
  };

  return (
    <div className="flex bg-background min-h-screen w-full">
      {/* Sidebar */}
      <DashboardSidebar />
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        <main className="flex-1 overflow-auto overflow-x-hidden w-full">
          {children}
        </main>
      </div>
    </div>
  );
} 