import { Navbar } from "@/components/shared/Navbar";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <nav>
                <Navbar />
            </nav>
            {children}
        </div>
    );
};
