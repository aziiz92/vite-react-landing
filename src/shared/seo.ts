type UpsertMetaArgs = {
  selector: string;
  attr: "content";
  value: string;
};

function upsertMeta({ selector, attr, value }: UpsertMetaArgs) {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement("meta");
    const match = selector.match(/\[(name|property)="([^"]+)"\]/);
    if (match) element.setAttribute(match[1], match[2]);
    document.head.appendChild(element);
  }
  element.setAttribute(attr, value);
}

export function applySeo({
  title,
  description,
  ogImagePath,
  url,
}: {
  title: string;
  description: string;
  ogImagePath: string;
  url?: string;
}) {
  document.title = title;
  upsertMeta({
    selector: 'meta[name="description"]',
    attr: "content",
    value: description,
  });
  upsertMeta({
    selector: 'meta[property="og:title"]',
    attr: "content",
    value: title,
  });
  upsertMeta({
    selector: 'meta[property="og:description"]',
    attr: "content",
    value: description,
  });
  upsertMeta({
    selector: 'meta[property="og:image"]',
    attr: "content",
    value: ogImagePath,
  });
  if (url) {
    upsertMeta({
      selector: 'meta[property="og:url"]',
      attr: "content",
      value: url,
    });
  }
}

