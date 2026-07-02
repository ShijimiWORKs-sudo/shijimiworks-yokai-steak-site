import { ExternalLink, Mail } from "lucide-react";

export function ExternalLinkIcon({ mail = false }: { mail?: boolean }) {
  const Icon = mail ? Mail : ExternalLink;
  return <Icon aria-hidden="true" className="external-link-icon" strokeWidth={1.8} />;
}
