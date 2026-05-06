import { Link } from "@tanstack/react-router";
import { ArrowRight, Minus, Plus, ShieldCheck, ShoppingBag, Trash2, Truck } from "lucide-react";
import type { ReactNode } from "react";
import { useCartActions } from "../hooks/useCartActions";
import type { CartItem } from "../hooks/useCartActions";

export interface CartPageProps extends Readonly<Record<string, never>> {}

const freeShippingThreshold = 150;
const fallbackShipping = 12;
const taxRate = 0.0825;

function formatCurrency(value: number) {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(value);
}

export function CartPage(_props: CartPageProps) {
  const { cartItems, cartSubtotal, updateQuantity, removeItem } = useCartActions();
  const shipping =
    cartSubtotal >= freeShippingThreshold || cartItems.length === 0 ? 0 : fallbackShipping;
  const estimatedTax = Math.round(cartSubtotal * taxRate);
  const total = cartSubtotal + shipping + estimatedTax;

  if (cartItems.length === 0) {
    return (
      <main className="bg-background">
        <section className="mx-auto flex min-h-[560px] max-w-[900px] flex-col items-center justify-center px-6 py-24 text-center sm:px-10">
          <span className="mb-8 inline-flex size-20 items-center justify-center rounded-full bg-surface-container text-primary">
            <ShoppingBag className="size-9" aria-hidden="true" strokeWidth={2.2} />
          </span>
          <p className="mb-4 font-label text-xs font-black uppercase tracking-[0.24em] text-secondary">
            Your bag is ready
          </p>
          <h1 className="font-headline text-5xl font-black uppercase leading-[0.9] tracking-[-0.06em] text-primary md:text-7xl">
            Build your performance kit
          </h1>
          <p className="mt-6 max-w-xl text-lg font-medium leading-relaxed text-on-surface-variant">
            Add technical layers, training essentials, or recovery pieces before the drop moves on.
          </p>
          <Link
            className="mt-10 inline-flex items-center gap-3 rounded-lg bg-primary px-8 py-4 font-label text-xs font-black uppercase tracking-[0.16em] text-on-primary transition hover:bg-on-surface-variant"
            to="/products"
          >
            Shop products
            <ArrowRight className="size-4" aria-hidden="true" strokeWidth={2.4} />
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-background">
      <section className="mx-auto max-w-[1440px] px-6 py-12 sm:px-10 lg:px-6 lg:py-16">
        <div className="mb-10 flex flex-col justify-between gap-6 border-b border-outline-variant/40 pb-8 lg:flex-row lg:items-end">
          <div>
            <p className="mb-4 font-label text-xs font-black uppercase tracking-[0.24em] text-secondary">
              Secure checkout
            </p>
            <h1 className="font-headline text-5xl font-black uppercase leading-none tracking-[-0.06em] text-primary md:text-7xl">
              Your Bag
            </h1>
          </div>
          <p className="max-w-md text-sm font-medium leading-relaxed text-on-surface-variant">
            Reserve your size and finish checkout with express shipping, 30-day performance
            guarantee, and member priority support.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-[1fr_420px] lg:items-start">
          <section className="space-y-5" aria-label="Cart items">
            {cartItems.map((item) => (
              <CartLineItem
                item={item}
                key={item.id}
                onRemove={removeItem}
                onUpdateQuantity={updateQuantity}
              />
            ))}
          </section>

          <aside className="lg:sticky lg:top-28">
            <div className="rounded-2xl bg-primary p-6 text-on-primary sm:p-8">
              <p className="font-label text-xs font-black uppercase tracking-[0.22em] text-action-volt">
                Order summary
              </p>
              <div className="mt-8 space-y-4 border-b border-on-surface-variant/40 pb-6 text-sm text-inverse-on-surface">
                <SummaryRow label="Subtotal" value={formatCurrency(cartSubtotal)} />
                <SummaryRow
                  label="Shipping"
                  value={shipping === 0 ? "Free" : formatCurrency(shipping)}
                />
                <SummaryRow label="Estimated tax" value={formatCurrency(estimatedTax)} />
              </div>
              <div className="mt-6 flex items-center justify-between font-headline text-3xl font-black tracking-[-0.05em]">
                <span>Total</span>
                <span>{formatCurrency(total)}</span>
              </div>
              <button
                className="mt-8 flex w-full items-center justify-center gap-3 rounded-lg bg-action-volt px-6 py-5 font-label text-xs font-black uppercase tracking-[0.18em] text-primary transition hover:opacity-90"
                type="button"
              >
                Checkout
                <ArrowRight className="size-4" aria-hidden="true" strokeWidth={2.4} />
              </button>
              <div className="mt-6 grid gap-3 text-xs font-semibold uppercase tracking-[0.12em] text-inverse-on-surface">
                <p className="flex items-center gap-3">
                  <Truck className="size-4 text-action-volt" aria-hidden="true" strokeWidth={2.4} />
                  Free shipping over {formatCurrency(freeShippingThreshold)}
                </p>
                <p className="flex items-center gap-3">
                  <ShieldCheck
                    className="size-4 text-action-volt"
                    aria-hidden="true"
                    strokeWidth={2.4}
                  />
                  30-day performance guarantee
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}

interface CartLineItemProps {
  readonly item: CartItem;
  readonly onUpdateQuantity: (cartItemId: string, quantity: number) => void;
  readonly onRemove: (cartItemId: string) => void;
}

function CartLineItem({ item, onUpdateQuantity, onRemove }: CartLineItemProps) {
  return (
    <article className="grid gap-5 rounded-2xl bg-surface-container-lowest p-4 shadow-sm sm:grid-cols-[160px_1fr] sm:p-5">
      <CartProductLink
        className="block overflow-hidden rounded-xl bg-surface-container"
        item={item}
      >
        <img
          className="aspect-square size-full object-cover"
          src={item.imageUrl}
          alt={item.imageAlt}
        />
      </CartProductLink>
      <div className="flex flex-col justify-between gap-6">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
          <div>
            <p className="font-label text-[10px] font-black uppercase tracking-[0.2em] text-secondary">
              {item.category}
            </p>
            <CartProductLink item={item}>
              <h2 className="mt-2 font-headline text-2xl font-black uppercase tracking-[-0.05em] text-primary transition hover:text-on-surface-variant">
                {item.name}
              </h2>
            </CartProductLink>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm font-medium text-on-surface-variant">
              <span className="inline-flex items-center gap-2">
                <span
                  className={`${item.colorClass} size-4 rounded-full border border-outline-variant`}
                />
                {item.colorName}
              </span>
              <span>Size {item.size}</span>
            </div>
          </div>
          <p className="font-headline text-2xl font-black text-primary">
            {formatCurrency(item.priceValue * item.quantity)}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center overflow-hidden rounded-full border border-outline-variant bg-surface">
            <button
              className="inline-flex size-10 items-center justify-center text-primary transition hover:bg-surface-container"
              type="button"
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              aria-label={`Decrease ${item.name} quantity`}
            >
              <Minus className="size-4" aria-hidden="true" strokeWidth={2.4} />
            </button>
            <span className="min-w-10 text-center text-sm font-black text-primary">
              {item.quantity}
            </span>
            <button
              className="inline-flex size-10 items-center justify-center text-primary transition hover:bg-surface-container"
              type="button"
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              aria-label={`Increase ${item.name} quantity`}
            >
              <Plus className="size-4" aria-hidden="true" strokeWidth={2.4} />
            </button>
          </div>
          <button
            className="inline-flex items-center gap-2 font-label text-[10px] font-black uppercase tracking-[0.18em] text-on-surface-variant transition hover:text-primary"
            type="button"
            onClick={() => onRemove(item.id)}
          >
            <Trash2 className="size-4" aria-hidden="true" strokeWidth={2.4} />
            Remove
          </button>
        </div>
      </div>
    </article>
  );
}

interface CartProductLinkProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly item: CartItem;
}

function CartProductLink({ children, className, item }: CartProductLinkProps) {
  if (!item.hasDetailPage) {
    return (
      <Link className={className} to="/products">
        {children}
      </Link>
    );
  }

  return (
    <Link className={className} to="/products/$productId" params={{ productId: item.productId }}>
      {children}
    </Link>
  );
}

interface SummaryRowProps {
  readonly label: string;
  readonly value: string;
}

function SummaryRow({ label, value }: SummaryRowProps) {
  return (
    <div className="flex items-center justify-between gap-4">
      <span>{label}</span>
      <span className="font-semibold text-on-primary">{value}</span>
    </div>
  );
}
