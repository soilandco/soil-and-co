'use client';

import { FormEvent, useState } from 'react';
import { contactCategories, contactInfo } from '@/lib/site-config';

type Status = 'idle' | 'sending' | 'success' | 'error' | 'unconfigured';

/**
 * お問い合わせフォーム。
 * Web3Forms(https://web3forms.com)経由で hello@soilandco.jp にメールで届きます。
 * アクセスキーは lib/site-config.ts の contactInfo.formAccessKey で設定します。
 */
export default function ContactSection() {
  const [category, setCategory] = useState<string>(contactCategories[0]);
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    if (!contactInfo.formAccessKey) {
      setStatus('unconfigured');
      return;
    }

    const data = new FormData(form);
    // スパム対策(人間には見えない入力欄に値が入っていたら送信しない)
    if (data.get('botcheck')) return;

    const name = String(data.get('name') ?? '');
    data.append('access_key', contactInfo.formAccessKey);
    data.append('subject', `【Soil&Co. お問い合わせ】${category}(${name}様)`);
    data.append('from_name', 'Soil&Co. ウェブサイト');
    data.set('category', category);

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const json = await res.json();
      if (res.ok && json.success) {
        setStatus('success');
        form.reset();
        setCategory(contactCategories[0]);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
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
        <input
          type="checkbox"
          name="botcheck"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <button
          type="submit"
          disabled={status === 'sending'}
          className="mt-2 rounded-full bg-brand-moss px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-moss/90 disabled:cursor-wait disabled:opacity-60"
        >
          {status === 'sending' ? '送信中…' : '送信する'}
        </button>

        <div aria-live="polite">
          {status === 'success' && (
            <p className="text-sm font-semibold text-brand-moss" role="status">
              お問い合わせありがとうございます。内容を確認のうえ、折り返しご連絡いたします。
            </p>
          )}
          {status === 'error' && (
            <p className="text-sm font-semibold text-red-700" role="alert">
              送信できませんでした。時間をおいて再度お試しいただくか、{contactInfo.email} までメールでご連絡ください。
            </p>
          )}
          {status === 'unconfigured' && (
            <p className="text-sm font-semibold text-brand-navy/70" role="status">
              送信フォームは準備中です。お手数ですが {contactInfo.email} または {contactInfo.phone} までご連絡ください。
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
