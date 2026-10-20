import { socialLinks } from "@/data/socialLinks";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://airacode.online/#organization",
        "name": "AIRACODE",
        "legalName": "AIRACODE Technologies",
        "url": "https://airacode.online",
        "logo": "https://airacode.online/logo-icon.png",
        "image": "https://airacode.online/logo-icon.png",
        "description":
          "AIRACODE is an AI studio that builds AI-powered websites, apps and automations, and upgrades old business systems.",
        "email": "contact@airacode.online",
        "founder": {
          "@type": "Person",
          "name": "AIRACODE Founders"
        },
        "sameAs": socialLinks.map((link) => link.href),
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "contactType": "customer service",
            "email": "contact@airacode.online",
            "availableLanguage": ["English"]
          }
        ]
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://airacode.online/#service",
        "name": "AIRACODE Software & AI Engineering Studio",
        "parentOrganization": {
          "@id": "https://airacode.online/#organization"
        },
        "url": "https://airacode.online",
        "priceRange": "$$",
        "image": "https://airacode.online/logo-icon.png"
      },
      {
        "@type": "WebSite",
        "@id": "https://airacode.online/#website",
        "url": "https://airacode.online",
        "name": "AIRACODE",
        "publisher": {
          "@id": "https://airacode.online/#organization"
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
