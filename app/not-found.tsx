import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { VISION } from "@/lib/constants";

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col justify-center py-24">
      <p className="en text-7xl md:text-8xl text-ink-navy">404</p>
      <p className="mt-6 font-jp font-jpdisplay text-xl md:text-2xl text-ink-soft max-w-prose">
        お探しのページは見つかりませんでした。
      </p>
      <p className="mt-10 font-jp font-jpbody text-ink-soft">{VISION.jp}</p>
      <Link
        href="/"
        className="mt-8 inline-block w-fit rounded-md border border-ink-navy px-6 py-3 label text-ink-navy hover:bg-ink-navy hover:text-mist-white transition-colors"
      >
        トップへ戻る
      </Link>
    </Container>
  );
}
