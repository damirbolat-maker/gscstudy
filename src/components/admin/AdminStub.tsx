import Icon from "@/components/Icon";

export default function AdminStub({
  title,
  icon,
  text,
}: {
  title: string;
  icon: string;
  text: string;
}) {
  return (
    <div>
      <h1 className="text-3xl font-extrabold text-primary tracking-tight mb-1">
        {title}
      </h1>
      <p className="text-on-surface-variant mb-10">{text}</p>
      <div className="bg-white border border-dashed border-outline-variant/60 rounded-2xl py-24 text-center">
        <Icon name={icon} className="text-6xl text-outline-variant mx-auto mb-4" />
        <p className="font-semibold text-on-surface">Раздел в разработке</p>
        <p className="text-sm text-on-surface-variant mt-1">
          Скоро здесь появится управление этим разделом.
        </p>
      </div>
    </div>
  );
}
