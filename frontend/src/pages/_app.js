import "@/styles/globals.css";
import '@/styles/componentes/header.css';
import '@/styles/index.css'
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function App({ Component, pageProps }) {
  <SpeedInsights
  key="performance"
  projectId="prj_brwOgtrW9QyRCHl2Bs6lmBWGGasb" 
  isEnabled={true} // Defina como `false` em produção, se não for necessário
/>
  return <Component {...pageProps} />;
}
