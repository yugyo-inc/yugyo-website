import { Container } from "@/components/ui/Container";

export function PageHeader({
  title,
  titleJp,
  subtitle,
}: {
  title: string;
  titleJp?: string;
  subtitle?: string;
}) {
  return (
    <div className="border-b border-paper-deep">
      <Container className="py-16 md:py-24">
        <h1 className="en text-5xl md:text-7xl text-ink-navy">{title}</h1>
        {titleJp && (
          <p className="mt-3 font-jp font-jpdisplay text-xl md:text-2xl text-ink-soft">
            {titleJp}
          </p>
        )}
        {subtitle && (
          <p className="mt-6 font-jp font-jpbody text-base md:text-lg text-ink-soft max-w-prose leading-body">
            {subtitle}
          </p>
        )}
      </Container>
    </div>
  );
}
