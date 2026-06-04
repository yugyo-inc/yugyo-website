import Image from "next/image";
import type { Member } from "@/lib/types";
import { pbFileUrl } from "@/lib/types";

export function MemberCard({ member }: { member: Member }) {
  const photoUrl =
    member.photo && member.collectionId
      ? pbFileUrl(
          { id: member.id, collectionId: member.collectionId },
          member.photo
        )
      : null;

  return (
    <article className="bg-mist-white p-6">
      {photoUrl && (
        <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden bg-paper-deep">
          <Image
            src={photoUrl}
            alt={member.name_jp}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover"
          />
        </div>
      )}
      <p className="label text-ink-soft">{member.role_en || member.role_jp}</p>
      <h3 className="mt-2 font-jp font-jpdisplay text-xl text-ink-navy">
        {member.name_jp}
      </h3>
      {member.role_jp && (
        <p className="mt-1 font-jp font-jpbody text-sm text-ink-soft">
          {member.role_jp}
        </p>
      )}
      {member.bio_jp && (
        <p className="mt-4 font-jp font-jpbody text-sm leading-body text-ink-soft">
          {member.bio_jp}
        </p>
      )}
    </article>
  );
}
