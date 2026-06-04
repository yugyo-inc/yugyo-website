import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記",
  description: "株式会社 遊行（yugyo inc.）特定商取引法に基づく表記。",
};

const ROWS: { label: string; value: React.ReactNode }[] = [
  { label: "販売事業者名", value: "株式会社 遊行（yugyo inc.）" },
  { label: "運営統括責任者", value: "大瀬良 亮" },
  {
    label: "所在地",
    value: (
      <>
        福岡県福岡市
        <br />
        <span className="legal__note">
          ※【要記入】番地・建物名までの正式住所（または「請求があれば遅滞なく開示します」）
        </span>
      </>
    ),
  },
  {
    label: "電話番号",
    value: (
      <>
        <span className="legal__note">
          【要記入】電話番号（または「請求があれば遅滞なく開示します」）
        </span>
      </>
    ),
  },
  { label: "メールアドレス", value: "info@yugyo.work" },
  {
    label: "販売価格",
    value: "各サービス・イベントの申込ページに表示する金額（消費税込み）",
  },
  {
    label: "商品代金以外の必要料金",
    value: (
      <>
        消費税、銀行振込の場合の振込手数料 等
        <br />
        <span className="legal__note">※【要確認】実態に合わせて記載</span>
      </>
    ),
  },
  {
    label: "支払方法",
    value: (
      <span className="legal__note">【要記入】クレジットカード／銀行振込 等</span>
    ),
  },
  {
    label: "支払時期",
    value: <span className="legal__note">【要記入】申込時 等</span>,
  },
  {
    label: "役務の提供時期",
    value: "入金確認後、各サービス・イベントに定める日時に提供します。",
  },
  {
    label: "返品・キャンセルについて",
    value: (
      <span className="legal__note">
        【要記入】サービス・イベントの性質に応じたキャンセル／返金規定
      </span>
    ),
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

      <div className="legal__body">
        <p className="legal__note">
          ※ 本表記は雛形です。【要記入】項目を確定し、公開前に法務確認をお願いします。消費者向けの有料サービス・チケット販売を行う場合に表示義務があります。
        </p>
      </div>
    </div>
  );
}
