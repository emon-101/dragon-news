import Navbar from '@/components/shared/Navbar';
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const AuthLayout = ({children}) => {
    return (
        <div className={`${montserrat.className} bg-slate-100`}>
            <Navbar />
            {children}
        </div>
    );
};

export default AuthLayout;