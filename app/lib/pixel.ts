// lib/pixel.ts

export const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

type WindowWithFbq = Window & {
  fbq?: (...args: unknown[]) => void;
  _fbq?: unknown;
};

// Core helper — calls fbq safely
function fbq(...args: unknown[]) {
  const win = window as WindowWithFbq;
  if (win.fbq) {
    win.fbq(...args);
  }
}

// ─── Standard Events ─────────────────────────────────────────────────────────

/** Fire on every page navigation */
export function pageview() {
  fbq("track", "PageView");
}

/** Fire when a contact / inquiry form is submitted */
export function leadFormSubmit(data?: {
  content_name?: string; // e.g. "Contact Form", "Free Consultation"
  content_category?: string; // e.g. "Lead", "Enquiry"
  value?: number;
  currency?: string;
}) {
  fbq("track", "Lead", data ?? {});
}

/** Fire when a service enquiry is initiated (user opens chat / clicks CTA) */
export function initiateContact(serviceName?: string) {
  fbq("track", "Contact", { content_name: serviceName });
}

/** Fire when someone views a specific service page */
export function viewContent(data: {
  content_name: string; // e.g. "Strategy Consulting"
  content_category?: string; // e.g. "Service"
  content_ids?: string[];
}) {
  fbq("track", "ViewContent", data);
}

/** Fire when someone schedules a call / books a meeting */
export function schedule(data?: { content_name?: string }) {
  fbq("track", "Schedule", data ?? {});
}

/** Fire on successful form completions (newsletter, resource download, etc.) */
export function completeRegistration(data?: {
  content_name?: string;
  status?: boolean;
}) {
  fbq("track", "CompleteRegistration", data ?? {});
}

/** Fire when a user starts to fill out a form (first input focus) */
export function initiateCheckout(data?: {
  content_name?: string;
  num_items?: number;
}) {
  fbq("track", "InitiateCheckout", data ?? {});
}

// ─── Custom Events ────────────────────────────────────────────────────────────

/** Fire when a CTA button is clicked */
export function ctaClick(buttonLabel: string, section?: string) {
  fbq("trackCustom", "CTAClick", { button_label: buttonLabel, section });
}

/** Fire when a file / case study / brochure is downloaded */
export function fileDownload(fileName: string, fileType?: string) {
  fbq("trackCustom", "FileDownload", {
    file_name: fileName,
    file_type: fileType,
  });
}

/** Fire when a pricing / packages section is viewed */
export function viewPricing(planName?: string) {
  fbq("trackCustom", "ViewPricing", { plan_name: planName });
}

/** Fire when the user scrolls 50% / 75% of a key page */
export function scrollDepth(percent: number, page: string) {
  fbq("trackCustom", "ScrollDepth", { percent, page });
}

/** Fire when user spends > 60s on a key page (engaged visit) */
export function engagedVisit(page: string, seconds: number) {
  fbq("trackCustom", "EngagedVisit", { page, seconds_spent: seconds });
}

/** Fire when a phone number link is clicked */
export function phoneClick(phone: string) {
  fbq("trackCustom", "PhoneClick", { phone });
}

/** Fire when an email mailto link is clicked */
export function emailClick(email: string) {
  fbq("trackCustom", "EmailClick", { email });
}
