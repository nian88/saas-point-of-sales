import { Link } from "@inertiajs/react";
import {
    IconShoppingCart,
    IconBrandGithub,
    IconStar,
    IconArrowRight,
} from "@tabler/icons-react";

const GITHUB_URL = "https://github.com/aryadwiputra/point-of-sales";
const DOCS_URL = `${GITHUB_URL}/blob/main/docs/getting-started.md`;

export const NAV_LINKS = [
    { label: "Fitur", href: "/fitur" },
    { label: "Dokumentasi", href: "/dokumentasi" },
    { label: "Roadmap", href: "/roadmap" },
    { label: "Kontribusi", href: "/kontribusi" },
];

export default function PublicLayout({ children, active = "" }) {
    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col">
            {/* ============ NAVBAR ============ */}
            <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                            <IconShoppingCart size={20} className="text-white" />
                        </div>
                        <span className="text-lg font-bold text-slate-900 dark:text-white">
                            Dikasir
                        </span>
                    </Link>

    

                </div>
            </nav>

            {/* ============ CONTENT ============ */}
            <main className="flex-1 pt-[68px]">{children}</main>

            {/* ============ FOOTER ============ */}
            <footer className="py-10 px-6 border-t border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                            <IconShoppingCart size={16} className="text-white" />
                        </div>
                        <div>
                            <div className="font-semibold text-slate-700 dark:text-slate-300">
                                Dikasir
                            </div>
                            <div className="text-xs text-slate-500">
                                Sistem kasir open source untuk UMKM
                            </div>
                        </div>
                    </div>

                    

                    <p className="text-sm text-slate-500">
                        © {new Date().getFullYear()}
                    </p>
                </div>
            </footer>
        </div>
    );
}
