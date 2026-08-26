import { Head, Link } from "@inertiajs/react";
import PublicLayout from "@/Layouts/PublicLayout";
import {
    IconShoppingCart,
    IconWallet,
    IconBuildingWarehouse,
    IconReceiptTax,
    IconChartBar,
    IconReportMoney,
    IconUsers,
    IconBrandWhatsapp,
    IconShieldLock,
    IconCloudOff,
    IconBrandGithub,
    IconStar,
    IconArrowRight,
    IconDeviceMobile,
    IconTerminal2,
} from "@tabler/icons-react";

const GITHUB_URL = "https://github.com/aryadwiputra/point-of-sales";
const DOCS_URL = `${GITHUB_URL}/blob/main/docs/getting-started.md`;
const GALLERY_URL = `${GITHUB_URL}/blob/main/docs/screenshots.md`;

const stats = [
    { value: "200+", label: "GitHub Stars" },
    { value: "44+", label: "Fitur Lengkap" },
    { value: "MIT", label: "100% Gratis" },
    { value: "8", label: "Modul Terintegrasi" },
];

const features = [
    {
        icon: IconShoppingCart,
        title: "POS Cepat & Mudah",
        desc: "Cari produk via barcode atau keyboard, scan pakai kamera (PWA), cart hold/resume, dan checkout dalam hitungan detik.",
    },
    {
        icon: IconWallet,
        title: "Multi-Payment",
        desc: "Tunai, transfer bank, QRIS (Midtrans), Xendit, hingga pay later (piutang) — semua dalam satu kasir.",
    },
    {
        icon: IconBuildingWarehouse,
        title: "Multi-Warehouse",
        desc: "Stok terpisah per gudang/cabang, transfer antar gudang, stock opname, dan tracking batch/expiry (FEFO).",
    },
    {
        icon: IconReceiptTax,
        title: "PPN & Pajak",
        desc: "Dukungan PPN 11% (exclusive/inclusive), data NPWP pelanggan, dan laporan pajak yang rapi.",
    },
    {
        icon: IconChartBar,
        title: "Laporan & Insight",
        desc: "Laporan penjualan, profit & margin, performa per kasir, jam sibuk, dan repeat customer.",
    },
    {
        icon: IconReportMoney,
        title: "Piutang & Hutang",
        desc: "Kelola piutang pelanggan & hutang supplier dengan aging analysis dan partial payment.",
    },
    {
        icon: IconUsers,
        title: "CRM & Loyalty",
        desc: "Member tiers, poin loyalty, voucher, segmentasi pelanggan otomatis, dan campaign marketing.",
    },
    {
        icon: IconBrandWhatsapp,
        title: "WhatsApp Gateway",
        desc: "Kirim struk, reminder piutang, dan promo otomatis ke pelanggan via WhatsApp (whatsapp-web.js).",
    },
    {
        icon: IconShieldLock,
        title: "RBAC & Audit Log",
        desc: "Kontrol akses per role (admin/kasir), persetujuan diskon, dan jejak audit before/after setiap perubahan.",
    },
    {
        icon: IconCloudOff,
        title: "Offline Mode",
        desc: "Tetap bisa jualan saat internet mati — transaksi masuk antrean dan tersinkron otomatis saat online.",
    },
];

const techStack = [
    { name: "Laravel 13", color: "bg-red-500" },
    { name: "Inertia.js 3", color: "bg-purple-500" },
    { name: "React 19", color: "bg-cyan-500" },
    { name: "Tailwind CSS", color: "bg-sky-500" },
    { name: "MySQL", color: "bg-orange-500" },
    { name: "PWA", color: "bg-emerald-500" },
];

const screenshots = [
    { src: "/screenshots/01-dashboard.png", title: "Dashboard", span: "col-span-2 row-span-2" },
    { src: "/screenshots/02-pos-checkout.png", title: "POS Checkout" },
    { src: "/screenshots/06-stock-opnames.png", title: "Stock Opname" },
    { src: "/screenshots/12-receivables.png", title: "Receivables" },
    { src: "/screenshots/15-sales-report.png", title: "Sales Report" },
];

const faqs = [
    {
        q: "Apakah Dikasir benar-benar gratis?",
        a: "Ya. Dikasir dirilis di bawah lisensi MIT — bebas digunakan, dimodifikasi, dan didistribusikan, termasuk untuk kepentingan komersial. Tidak ada biaya lisensi atau langganan.",
    },
    {
        q: "Bisakah dipakai untuk bisnis multi-cabang?",
        a: "Bisa. Dikasir mendukung multi-warehouse dengan stok terpisah per gudang/cabang, transfer stok antar gudang, dan laporan per gudang.",
    },
    {
        q: "Bagaimana kalau internet di toko mati?",
        a: "Dikasir punya offline mode: transaksi tetap bisa diproses dan masuk antrean lokal, lalu tersinkron otomatis saat koneksi kembali.",
    },
    {
        q: "Apa saja yang dibutuhkan untuk instalasi?",
        a: "PHP 8.3+, MySQL, Composer, dan Node.js 20+. Semua panduan lengkap ada di dokumentasi getting-started.",
    },
    {
        q: "Bagaimana cara berkontribusi?",
        a: "Fork repository, buat branch dari development (feature/nama-fitur), lalu buat Pull Request ke development. Pastikan php artisan test lulus sebelum submit.",
    },
];

const quickStart = ``;

export default function Welcome() {
    return (
        <PublicLayout>
            <Head title="Dikasir — Sistem Kasir Open Source untuk UMKM" />

            {/* ============ HERO ============ */}
            

            {/* ============ STATS ============ */}
            
            {/* ============ SCREENSHOTS ============ */}
            

            {/* ============ FEATURES ============ */}
            <section id="fitur" className="py-20 px-6 bg-white dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                            Fitur Lengkap untuk Bisnis Nyata
                        </h2>
                        <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            44+ modul terintegrasi — dari transaksi harian sampai analitik
                            lanjutan, dirancang untuk kebutuhan UMKM Indonesia.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature) => (
                            <div
                                key={feature.title}
                                className="group p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800 hover:border-primary-200 dark:hover:border-primary-800 hover:shadow-lg hover:shadow-primary-500/5 transition-all"
                            >
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <feature.icon size={24} className="text-white" />
                                </div>
                                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                                    {feature.title}
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-10">
                        <Link
                            href="/fitur"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-primary-600 dark:text-primary-400 border border-primary-200 dark:border-primary-800 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-950/40 transition-colors"
                        >
                            Jelajahi semua fitur
                            <IconArrowRight size={16} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* ============ TECH STACK ============ */}
            

            {/* ============ INSTALLATION ============ */}
            

            {/* ============ DEMO ============ */}
            

            {/* ============ FAQ ============ */}
            

            {/* ============ CTA ============ */}
            
        </PublicLayout>
    );
}