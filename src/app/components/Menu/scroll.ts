"use client"

export function Scroll(targetId?: string): void {
    const id = targetId ?? "Sobre";
    const el = document.getElementById(id);
    if (!el) return;
    const header = document.querySelector("nav");
    const headerHeight = header instanceof HTMLElement ? header.offsetHeight : 0;
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight - 12;
    setTimeout(() => {
        window.scrollTo({ top: y, behavior: "smooth" });
    }, 100);
}