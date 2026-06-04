import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "株式会社 遊行（yugyo inc.）特定商取引法に基づく表記。",
};

const ROWS: { label: string; value: React.ReactNode }[] = [
  { label: "販売業者", value: "株式会社 遊行（yugyo inc.）" },
  { label: "代表責任者名", value: "大瀬良 亮" },
  {
    label: "所在地",
    value: "〒810-0001 福岡県福岡市中央区天神1-11-1 ONE FUKUOKA BLDG. 7階",
  },
  { label: "電話番号", value: "ご請求があれば遅滞なく開示いたします" },
  { label: "メールアドレス", value: "info@yugyo.work" },
  { label: "ホームページURL", value: "https://yugyo.work/" },
  { label: "販売価格", value: "各商品・サービスページをご参照ください。" },
  {
    label: "商品代金以外の必要料金（追加手数料等）",
    value: "手数料（振込手数料、コンビニ決済手数料など）、消費税",
  },
  {
    label: "受け付け可能な決済手段",
    value: "クレジットカードまたは国内の銀行振込",
  },
  {
    label: "決済期間",
    value:
      "クレジットカード決済の場合はただちに処理されます。国内の銀行振込の場合は、ご注文から3日以内にお振り込みいただく必要があります。",
  },
  {
    label: "引渡時期",
    value:
      "代金のお支払い確定後、7日以内に発送いたします。後払い決済の場合は、ご注文確定後7日以内に発送いたします。",
  },
  {
    label: "交換および返品（返金ポリシー）",
    value: "サービスの性質上、返品・返金はお受けしておりません。",
  },
];

export default function TokushohoPage() {
  return (
    <div className="wrap legal">
      <h1 className="legal__title">特定商取引法に基づく表記</h1>
      <p className="legal__lead">株式会社 遊行（yugyo inc.）／ 最終更新: 2026-06-05</p>

      <table className="legal__table">
        <tbody>
          {ROWS.map((r) => (
            <tr key={r.label}>
              <th scope="row">{r.label}</th>
              <td>{r.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
