"use client";

import { useRef, useState } from "react";

function ChevronLeftIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 6L9 12L15 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 6L15 12L9 18"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21 21L16.65 16.65"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <circle
        cx="11"
        cy="11"
        r="6"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function ImagePlaceholderIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
        width="18"
        x="3"
        y="5"
      />
      <circle cx="9" cy="10" fill="currentColor" r="1.5" />
      <path
        d="M21 16L16 12L11 17L9 15L3 19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

const products = [
  {
    id: "aurora-headset",
    name: "Headset Aurora Pro",
    category: "Eletrônicos",
    description:
      "Áudio imersivo com cancelamento de ruído e bateria de longa duração.",
    price: 489.9,
    previewTone: "from-sky-500/20 to-sky-700/10",
  },
  {
    id: "pulse-watch",
    name: "Smartwatch Pulse One",
    category: "Wearables",
    description: "Monitoramento de saúde, GPS integrado e acabamento leve.",
    price: 699.9,
    previewTone: "from-cyan-500/20 to-cyan-700/10",
  },
  {
    id: "linen-chair",
    name: "Poltrona Linen",
    category: "Casa",
    description: "Poltrona compacta com tecido premium e estrutura em madeira.",
    price: 1290,
    previewTone: "from-stone-400/25 to-stone-700/10",
  },
  {
    id: "brew-station",
    name: "Cafeteira Brew Station",
    category: "Cozinha",
    description: "Programação automática e jarra térmica para o café do dia.",
    price: 359.9,
    previewTone: "from-amber-500/20 to-amber-700/10",
  },
  {
    id: "studio-lamp",
    name: "Luminária Studio Beam",
    category: "Decoração",
    description: "Luz ajustável com três temperaturas de cor para mesa ou quarto.",
    price: 219.9,
    previewTone: "from-yellow-500/20 to-yellow-700/10",
  },
  {
    id: "urban-pack",
    name: "Mochila Urban Pack",
    category: "Lifestyle",
    description: "Mochila resistente à água com compartimentos internos organizados.",
    price: 279.9,
    previewTone: "from-violet-500/20 to-violet-700/10",
  },
  {
    id: "glass-bottle",
    name: "Garrafa Térmica Glass",
    category: "Cozinha",
    description: "Mantém a temperatura por horas com acabamento fosco e tampa segura.",
    price: 149.9,
    previewTone: "from-emerald-500/20 to-emerald-700/10",
  },
  {
    id: "desk-stand",
    name: "Suporte Desk Stand",
    category: "Acessórios",
    description: "Base para notebook em alumínio com ajuste confortável para uso diário.",
    price: 189.9,
    previewTone: "from-slate-500/20 to-slate-700/10",
  },
  {
    id: "flow-keyboard",
    name: "Teclado Flow Keys",
    category: "Eletrônicos",
    description: "Teclado compacto com conexão sem fio e digitação silenciosa.",
    price: 329.9,
    previewTone: "from-blue-500/20 to-blue-700/10",
  },
] as const;

const ITEMS_PER_PAGE = 4;
const PAGE_NEIGHBORS = 1;

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

function getVisiblePages(currentPage: number, totalPages: number) {
  const pages: Array<number | "ellipsis-left" | "ellipsis-right"> = [];
  const startPage = Math.max(1, currentPage - PAGE_NEIGHBORS);
  const endPage = Math.min(totalPages, currentPage + PAGE_NEIGHBORS);

  if (startPage > 1) {
    pages.push(1);
  }

  if (startPage > 2) {
    pages.push("ellipsis-left");
  }

  for (let page = startPage; page <= endPage; page += 1) {
    pages.push(page);
  }

  if (endPage < totalPages - 1) {
    pages.push("ellipsis-right");
  }

  if (endPage < totalPages) {
    pages.push(totalPages);
  }

  return pages;
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredProducts = products.filter((product) => {
    const searchableContent = [
      product.name,
      product.category,
      product.description,
    ]
      .join(" ")
      .toLowerCase();

    return searchableContent.includes(normalizedSearchTerm);
  });

  const totalProducts = filteredProducts.length;
  const totalPages =
    totalProducts === 0 ? 1 : Math.ceil(totalProducts / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = Math.min(startIndex + ITEMS_PER_PAGE, totalProducts);
  const currentProducts = filteredProducts.slice(startIndex, endIndex);
  const visiblePages = getVisiblePages(currentPage, totalPages);

  function changePage(nextPage: number) {
    const targetPage = Math.min(Math.max(nextPage, 1), totalPages);

    if (targetPage === currentPage) return;

    setCurrentPage(targetPage);

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    listRef.current?.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  }

  function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  }

  return (
    <section className="mx-auto flex min-h-[calc(100vh-73px)] w-full max-w-5xl flex-col px-6 py-6">
      <div className="mb-4 flex flex-col gap-3 rounded-xl border border-line bg-surface px-4 py-4 md:flex-row md:items-end md:justify-between">
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-foreground/45">
            Página inicial
          </p>
          <h2 className="text-2xl font-semibold text-foreground">
            Catálogo de produtos
          </h2>
        </div>

        <div className="w-full md:max-w-sm">
          <label
            className="mb-2 block text-sm font-medium text-foreground/72"
            htmlFor="product-search"
          >
            Pesquisar produtos
          </label>
          <div className="flex items-center gap-3 rounded-lg border border-line bg-background px-3 py-2.5 focus-within:border-accent">
            <SearchIcon />
            <input
              className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-foreground/35"
              id="product-search"
              onChange={handleSearchChange}
              placeholder="Buscar por nome, categoria ou descrição"
              type="search"
              value={searchTerm}
            />
          </div>
        </div>
      </div>

      <div
        ref={listRef}
        className="overflow-hidden rounded-xl border border-line bg-surface"
      >
        <div className="flex flex-col gap-1 border-b border-line px-5 py-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-medium text-foreground/70">
            {totalProducts > 0
              ? `Exibindo ${startIndex + 1} a ${endIndex} de ${totalProducts} produtos`
              : "Exibindo 0 produtos"}
          </p>
          <p className="text-xs text-foreground/45">
            Página {totalProducts > 0 ? currentPage : 0} de{" "}
            {totalProducts > 0 ? totalPages : 0}
          </p>
        </div>

        {currentProducts.length > 0 ? (
          <ul className="divide-y divide-line">
            {currentProducts.map((product) => (
              <li
                key={product.id}
                className="flex flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-20 w-20 shrink-0 items-center justify-center rounded-lg border border-line bg-gradient-to-br ${product.previewTone} text-foreground/55`}
                  >
                    <ImagePlaceholderIcon />
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.18em] text-foreground/45">
                      {product.category}
                    </p>
                    <h3 className="text-lg font-semibold text-foreground">
                      {product.name}
                    </h3>
                    <p className="max-w-2xl text-sm leading-6 text-foreground/65">
                      {product.description}
                    </p>
                  </div>
                </div>

                <div className="shrink-0 text-left md:text-right">
                  <p className="text-lg font-semibold text-accent-strong">
                    {currencyFormatter.format(product.price)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="px-5 py-10 text-center">
            <p className="text-base font-medium text-foreground">
              Nenhum produto encontrado
            </p>
            <p className="mt-2 text-sm text-foreground/55">
              Tente buscar por outro nome, categoria ou descrição.
            </p>
          </div>
        )}
      </div>

      <nav
        aria-label="Paginação do catálogo"
        className="mt-4 flex flex-wrap items-center justify-center gap-2 rounded-xl border border-line bg-surface px-3 py-3 sm:justify-between"
      >
        <button
          aria-label="Página anterior"
          className="inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-foreground/72 transition hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-foreground/72"
          disabled={currentPage === 1 || totalProducts === 0}
          onClick={() => changePage(currentPage - 1)}
          type="button"
        >
          <ChevronLeftIcon />
          <span>Anterior</span>
        </button>

        <div className="flex flex-wrap items-center justify-center gap-1">
          {totalProducts > 0 &&
            visiblePages.map((item) => {
              if (typeof item !== "number") {
                return (
                  <span
                    key={item}
                    aria-hidden="true"
                    className="inline-flex h-10 min-w-10 items-center justify-center px-1 text-sm text-foreground/35"
                  >
                    ...
                  </span>
                );
              }

              const isActive = item === currentPage;

              return (
                <button
                  key={item}
                  aria-current={isActive ? "page" : undefined}
                  className={`inline-flex h-10 min-w-10 items-center justify-center rounded-md border px-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-accent/40 ${
                    isActive
                      ? "border-accent bg-accent-soft text-white shadow-[0_0_0_1px_rgba(37,99,235,0.45)]"
                      : "border-transparent text-foreground/72 hover:text-foreground"
                  }`}
                  onClick={() => changePage(item)}
                  type="button"
                >
                  {item}
                </button>
              );
            })}
        </div>

        <button
          aria-label="Próxima página"
          className="inline-flex items-center gap-2 rounded-md px-2 py-2 text-sm font-medium text-foreground/72 transition hover:text-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:text-foreground/72"
          disabled={currentPage === totalPages || totalProducts === 0}
          onClick={() => changePage(currentPage + 1)}
          type="button"
        >
          <span>Seguinte</span>
          <ChevronRightIcon />
        </button>
      </nav>
    </section>
  );
}
