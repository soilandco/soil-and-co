import { kitchenCar } from '@/lib/site-config';

/**
 * キッチンカーのメニュー表示。
 * データは lib/site-config.ts の kitchenCar.menu を参照しているので、
 * メニュー内容や価格を変更したい場合はそのファイルだけ編集すれば反映されます。
 */
export default function MenuList() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {kitchenCar.menu.map((group) => (
        <div
          key={group.category}
          className="rounded-xl2 border border-brand-navy/10 bg-white/70 p-6"
        >
          <h3 className="mb-3 text-sm font-bold tracking-widest text-brand-orange">
            {group.category}
          </h3>
          <ul className="space-y-2">
            {group.items.map((item) => (
              <li
                key={item.name}
                className="flex items-baseline justify-between gap-4 text-sm text-brand-navy/80"
              >
                <span>{item.name}</span>
                <span className="whitespace-nowrap font-semibold">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
