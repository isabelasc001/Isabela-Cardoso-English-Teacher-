import { ThemeProvider } from "@/providers/ThemeProvider";

export default function RootLayout({
    children,
}:{
    children: React.ReactNode
}){

return(

<html lang="pt-BR">

<body>

<ThemeProvider>

{children}

</ThemeProvider>

</body>

</html>

)
}