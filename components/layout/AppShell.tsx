import Link from 'next/link';
import { currentUser, navItems } from '@/lib/mock-data';

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f5f7fb] text-[#172036]">
      <header className="border-b border-[#e8ebf2] bg-white">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between gap-4 px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#eef4ff] text-xs font-bold text-[#1d4ed8]">VT</div>
            <div>
              <div className="text-[15px] font-bold tracking-tight">Vezewire Technologies</div>
              <div className="text-[11px] text-[#6b7280]">Quotation workflow</div>
            </div>
          </div>

          <nav className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className="text-sm font-medium text-[#2f3d57] transition hover:text-[#172036]">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="text-right">
              <div className="text-sm font-semibold">{currentUser.name}</div>
              <div className="text-[11px] text-[#6b7280]">{currentUser.role}</div>
            </div>
            <button className="rounded-md border border-[#e7eaf0] bg-white px-3 py-1.5 text-xs font-medium text-[#374151] transition hover:bg-[#f7f8fb]">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main>{children}</main>
    </div>
  );
}
