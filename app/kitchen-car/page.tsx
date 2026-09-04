import PageHero from '@/components/ui/PageHero';
import MenuList from '@/components/ui/MenuList';
import AccessSection from '@/components/AccessSection';
import CrossLinkSection from '@/components/CrossLinkSection';
import { buildMetadata } from '@/lib/metadata';
import { kitchenCar } from '@/lib/site-config';

export const metadata = buildMetadata({
  title: 'KITCHEN CAR',
  description: kitchenCar.description,
  path: '/kitchen-car',
});

export default function KitchenCarPage() {
  return (
    <>
      <PageHero
        eyebrow="KITCHEN CAR"
        title={kitchenCar.lead}
        description={kitchenCar.description}
        icon="🚚"
        tone="moss"
      />

      <section className="section-padding bg-white pt-0">
        <div className="mx-auto w-full max-w-content px-6 md:px-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-sm font-bold tracking-widest text-brand-moss">
                OPENING HOURS
              </h2>
              <div className="overflow-hidden rounded-xl2 border border-brand-navy/10">
                <table className="w-full text-sm">
                  <tbody>
                    {kitchenCar.hours.schedule.map((row) => (
                      <tr key={row.day} className="border-b border-brand-navy/5 last:border-0">
                        <th
                          scope="row"
                          className="w-1/3 bg-cream-soft px-4 py-3 text-left font-semibold text-brand-navy"
                        >
                          {row.day}
                        </th>
                        <td className="px-4 py-3 text-brand-navy/75">
                          {row.open === '定休日' ? '定休日' : `${row.open} - ${row.close}`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-brand-navy/50">
                {kitchenCar.hours.note}
              </p>

              <h2 className="mb-4 mt-10 text-sm font-bold tracking-widest text-brand-moss">
                今後の展開予定
              </h2>
              <ul className="flex flex-wrap gap-2">
                {kitchenCar.futureMenu.map((item) => (
                  <li
                    key={item}
                    className="rounded-full bg-brand-moss-light px-4 py-1.5 text-xs font-semibold text-brand-navy/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="mb-4 text-sm font-bold tracking-widest text-brand-moss">MENU</h2>
              <MenuList />
            </div>
          </div>
        </div>
      </section>

      <AccessSection />
      <CrossLinkSection page="kitchen-car" />
    </>
  );
}
