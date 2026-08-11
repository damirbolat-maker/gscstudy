import { getSettings, getBitrixWebhookUrl } from "@/lib/settings";
import SettingsForm from "@/components/admin/SettingsForm";
import { saveSettings, sendTestLead } from "./actions";

export const dynamic = "force-dynamic";

export default async function SettingsAdminPage() {
  const [settings, webhook] = await Promise.all([
    getSettings([
      "bitrixWebhookUrl",
      "contactPhone",
      "contactWhatsapp",
      "notifyEmail",
      "contactEmail",
    ]),
    getBitrixWebhookUrl(),
  ]);

  const values = {
    bitrixWebhookUrl: settings.bitrixWebhookUrl ?? "",
    contactPhone: settings.contactPhone ?? "",
    contactWhatsapp: settings.contactWhatsapp ?? "",
    notifyEmail: settings.notifyEmail ?? "",
    contactEmail: settings.contactEmail ?? "",
  };

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold text-primary tracking-tight">
          Настройки
        </h1>
        <p className="text-on-surface-variant mt-1">
          Контакты и интеграция с Bitrix24. Значения из базы имеют приоритет над
          переменными окружения.
        </p>
      </div>

      <SettingsForm
        values={values}
        hasWebhook={Boolean(webhook)}
        saveAction={saveSettings}
        testAction={sendTestLead}
      />
    </div>
  );
}
