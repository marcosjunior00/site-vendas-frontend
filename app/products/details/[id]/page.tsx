import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductById, products } from "@/lib/products";

function ImagePlaceholderIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-12 w-12"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="14"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.8"
        width="18"
        x="3"
        y="5"
      />
      <circle cx="9" cy="10" fill="currentColor" r="1.4" />
      <path
        d="M21 16L16 12L11 17L9 15L3 19"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

const currencyFormatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export async function generateStaticParams() {
  return products.map((product) => ({ id: product.id }));
}

export async function generateMetadata(
  props: PageProps<"/products/details/[id]">
): Promise<Metadata> {
  const { id } = await props.params;
  const product = getProductById(id);

  if (!product) {
    return {
      title: "Produto não encontrado",
    };
  }

  return {
    title: `${product.name} | Site de Vendas`,
    description: product.description,
  };
}

export default async function ProductDetailsPage(
  props: PageProps<"/products/details/[id]">
) {
  const { id } = await props.params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const relatedProducts = products
    .filter(
      (relatedProduct) =>
        relatedProduct.id !== product.id &&
        relatedProduct.category === product.category
    )
    .slice(0, 3);

  return (
    <section className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-foreground/50">
        <Link className="transition hover:text-foreground" href="/">
          Catálogo
        </Link>
        <span>/</span>
        <span>{product.category}</span>
        <span>/</span>
        <span className="text-foreground/80">{product.name}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-4">
          <div
            className={`flex min-h-[420px] items-center justify-center rounded-[2rem] border border-line bg-gradient-to-br ${product.previewTone} px-8 py-10 text-foreground/60 shadow-[0_24px_80px_rgba(0,0,0,0.25)]`}
          >
            <div className="flex flex-col items-center gap-4 text-center">
              <ImagePlaceholderIcon />
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-foreground/45">
                  Preview do produto
                </p>
                <p className="mt-2 text-2xl font-semibold text-foreground">
                  {product.name}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {["Frente", "Detalhe", "Ambiente"].map((label) => (
              <div
                key={label}
                className={`flex h-24 items-center justify-center rounded-2xl border border-line bg-gradient-to-br ${product.previewTone} text-xs font-medium uppercase tracking-[0.2em] text-foreground/55`}
              >
                {label}
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <span className="inline-flex rounded-full border border-accent/30 bg-accent-soft px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-accent-strong">
              {product.category}
            </span>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-foreground">
                {product.name}
              </h1>
              <p className="mt-3 text-lg leading-8 text-foreground/70">
                {product.headline}
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-line bg-surface p-6">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="text-4xl font-semibold text-foreground">
                  {currencyFormatter.format(product.price)}
                </p>
                <p className="mt-2 text-sm text-foreground/60">
                  {product.installment}
                </p>
              </div>
              <div className="space-y-2 text-right text-sm text-foreground/60">
                <p>{product.stockLabel}</p>
                <p>{product.shippingLabel}</p>
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="rounded-2xl border border-line bg-background px-4 py-3 text-sm text-foreground/75"
                >
                  {benefit}
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                className="rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition hover:bg-accent-strong"
                type="button"
              >
                Comprar agora
              </button>
              <button
                className="rounded-full border border-line px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:text-accent-strong"
                type="button"
              >
                Adicionar ao carrinho
              </button>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-line bg-surface p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/45">
              Sobre o produto
            </p>
            <p className="mt-4 text-base leading-8 text-foreground/72">
              {product.longDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.75rem] border border-line bg-surface p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/45">
            Especificações
          </p>
          <ul className="mt-4 space-y-3 text-sm text-foreground/72">
            {product.specifications.map((specification) => (
              <li
                key={specification}
                className="rounded-2xl border border-line bg-background px-4 py-3"
              >
                {specification}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[1.75rem] border border-line bg-surface p-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/45">
            O que acompanha
          </p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {product.includes.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-line bg-background px-4 py-3 text-sm text-foreground/72"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 ? (
        <div className="mt-8 rounded-[1.75rem] border border-line bg-surface p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-foreground/45">
                Mais da categoria
              </p>
              <h2 className="mt-2 text-2xl font-semibold text-foreground">
                Produtos relacionados
              </h2>
            </div>
            <Link
              className="text-sm font-medium text-accent-strong transition hover:text-white"
              href="/"
            >
              Ver catálogo
            </Link>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedProducts.map((relatedProduct) => (
              <Link
                key={relatedProduct.id}
                className="rounded-3xl border border-line bg-background p-4 transition hover:border-accent/40"
                href={`/products/details/${relatedProduct.id}`}
              >
                <div
                  className={`mb-4 flex h-28 items-center justify-center rounded-2xl bg-gradient-to-br ${relatedProduct.previewTone} text-foreground/55`}
                >
                  <ImagePlaceholderIcon />
                </div>
                <p className="text-xs uppercase tracking-[0.18em] text-foreground/45">
                  {relatedProduct.category}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-foreground">
                  {relatedProduct.name}
                </h3>
                <p className="mt-2 text-sm text-foreground/65">
                  {currencyFormatter.format(relatedProduct.price)}
                </p>
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
