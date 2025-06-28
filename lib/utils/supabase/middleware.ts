// import { createServerClient } from "@supabase/ssr";
// import { type NextRequest, NextResponse } from "next/server";

// const createClient = (request: NextRequest, response: NextResponse<unknown>) => {
//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return request.cookies.getAll();
//         },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value }) =>
//             request.cookies.set(name, value)
//           );
//           response = NextResponse.next({
//             request,
//           });
//           cookiesToSet.forEach(({ name, value, options }) =>
//             response.cookies.set(name, value, options)
//           );
//         },
//       },
//     }
//   );
//   return supabase;
// }

// export const updateSession = async (request: NextRequest) => {
//   try {
//     let response = NextResponse.next({
//       request: {
//         headers: request.headers,
//       },
//     });
//     const supabase = createClient(request, response);
//     const user = await supabase.auth.getUser();
//     if (request.nextUrl.pathname.startsWith("/dashboard") && user.error) {
//       return NextResponse.redirect(new URL("/sign-in", request.url));
//     }
//     if (request.nextUrl.pathname === "/" && !user.error) {
//       return NextResponse.redirect(new URL("/dashboard", request.url));
//     }
//     return response;
//   } catch (e) {
//     return NextResponse.next({
//       request: {
//         headers: request.headers,
//       },
//     });
//   }
// };
