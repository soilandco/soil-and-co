'use client';

import { FormEvent, useState } from 'react';
import { contactCategories, contactInfo } from '@/lib/site-config';

/**
 * お問い合わせフォーム。
 * TODO: 現時点では送信APIが未接続です。実際に送信できるようにするには、
 *   1) Next.jsのRoute Handler(app/api/contact/route.ts)を追加してメール送信サービス
 *      (Resend, SendGridなど)と連携する、または
 *   2) Formspree等のフォームSaaSのendpointをこのformのactionに指定する
 *  のいずれかで接続してください。
 */
export default function ContactSection() {
  const [category, setCategory] = useState<string>(contactCategories[0]);
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: ここでAPIへの送信処理を実装してください。
    setSubmitted(true);
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1fr,1.2fr]">
      <div className="flex flex-col gap-4 rounded-xl2 border border-brand-navy/10 bg-white p-8">
        <h3 className="text-sm font-bold tracking-widest text-brand-moss">CONTACT INFO</h3>
        <dl className="space-y-3 text-sm text-brand-navy/75">
          <div>
            <dt className="font-semibold text-brand-navy">Email</dt>
            <dd>{contactInfo.email}</dd>
          </div>
          <div>
            <dt className="font-semibold text-brand-navy">Tel</dt>
            <dd>{contactInfo.phone}</dd>
          </div>
        </dl>
        <p className="text-xs leading-relaxed text-brand-navy/50">
          お問い合わせ内容によって担当が異なるため、フォームからカテゴリーを選んでご連絡ください。
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-xl2 border border-brand-navy/10 bg-white p-8">
        <div>
          <span className="mb-2 block text-sm font-semibold text-brand-navy">
            お問い合わせカテゴリー
          </span>
          <div className="flex flex-wrap gap-2">
            {contactCategories.map((c) => (
              <button
                type="button"
                key={c}
                onClick={() => setCategory(c)}
                aria-pressed={category === c}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-colors ${
                  category === c
                    ? 'bg-brand-moss text-white'
                    : 'bg-cream-soft text-brand-navy/70 hover:bg-brand-moss-light'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <label className="flex flex-col gap-1.5 text-sm font-semibold text-brand-navy">
          お名前
          <input
            type="text"
            name="name"
            required
            className="rounded-lg border border-brand-navy/15 px-4 py-2.5 text-sm font-normal outline-none focus:border-brand-moss"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-semibold text-brand-navy">
          メールアドレス
          <input
            type="email"
            name="email"
            required
            className="rounded-lg border border-brand-navy/15 px-4 py-2.5 text-sm font-normal outline-none focus:border-brand-moss"
          />
        </label>

        <label className="flex flex-col gap-1.5 text-sm font-semibold text-brand-navy">
          お問い合わせ内容
          <textarea
            name="message"
            required
            rows={5}
            className="resize-none rounded-lg border border-brand-navy/15 px-4 py-2.5 text-sm font-normal outline-none focus:border-brand-moss"
          />
        </label>

        <input type="hidden" name="category" value={category} />

        <button
          type="submit"
          className="mt-2 rounded-full bg-brand-moss px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-moss/90"
        >
          送信する
        </button>

        {submitted && (
          <p className="text-sm font-semibold text-brand-green" role="status">
            送信フォームは準備中です。お急ぎの場合は上記の連絡先までご連絡ください。
          </p>
        )}
      </form>
    </div>
  );
}
