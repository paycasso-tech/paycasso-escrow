// import { createSupabaseServerClient } from "@/lib/supabase/server-client";
// import { NextResponse } from "next/server";

// const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
//   ? process.env.NEXT_PUBLIC_VERCEL_URL
//   : "http://localhost:3000";

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url);
//   const code = searchParams.get("code");
//   const nextUrl = searchParams.get("next") ?? "/";
//   if (code) {
//     const supabase = createSupabaseServerClient();
//     const { data, error } = await supabase.auth.exchangeCodeForSession(code);
//     if (!error) {
//       const { data: user, error: userIdError } = await supabase
//         .from("profiles")
//         .update({ email: data.user.email })
//         .eq("auth_user_id", data.user.id)
//         .select("id")
//         .single();
//       if (userIdError) {
//         console.error("Could not find an user with such auth_user_id", userIdError);
//         return NextResponse.json(
//           { message: "Could not find an user with such auth_user_id" },
//           { status: 500 }
//         );
//       }
//       const { data: walletAlreadyExists } = await supabase
//         .from("wallets")
//         .select()
//         .eq("profile_id", user.id)
//         .single();
//       if (walletAlreadyExists) {
//         return NextResponse.redirect(`${baseUrl}/${nextUrl}`);
//       }
//       const createdWalletSetResponse = await fetch(`${baseUrl}/api/wallet-set`, {
//         method: "PUT",
//         body: JSON.stringify({
//           entityName: data.user.email,
//         }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const createdWalletSet = await createdWalletSetResponse.json();
//     }
//   }
// }