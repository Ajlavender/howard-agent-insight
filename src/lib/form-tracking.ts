/**
 * Form tracking helper for the 7Steps Book Store.
 * Wires contact + newsletter submissions into the CRM via the
 * external-tracking events endpoint.
 */

type StandardTrackingFieldKey = string;
type RegisteredCustomFieldId = string;
type TrackingCustomField = { value?: unknown; label: string };
type TrackingFileField = { file?: File; label: string };
type TrackingImageDataField = { dataUrl?: string; label: string };

const TRACKING_ID = "tk_1669645a9a2143f09c3c27561036c2d3";
const LOCATION_ID = "IyiCTBDPcxyW5GC333Qt";
const PROJECT_ID = "1793861744814592381";
const ENDPOINT = "https://backend.leadconnectorhq.com/external-tracking/events";

export const postTrackingEvent = (
  trackingPayload: Record<string, unknown> & {
    formData: Record<StandardTrackingFieldKey, unknown>;
    formLabels: Record<StandardTrackingFieldKey, string>;
  },
  options: {
    customFields?: Record<RegisteredCustomFieldId, TrackingCustomField>;
    fileFields?: Record<RegisteredCustomFieldId, TrackingFileField>;
    imageDataFields?: Record<RegisteredCustomFieldId, TrackingImageDataField>;
  } = {},
) => {
  const { customFields = {}, fileFields = {}, imageDataFields = {} } = options;
  const eventPayload = {
    ...trackingPayload,
    formData: { ...trackingPayload.formData },
    formLabels: { ...trackingPayload.formLabels },
  };
  const body = new FormData();

  for (const [key, field] of Object.entries(customFields)) {
    if (field.value === undefined) continue;
    eventPayload.formData[key] = field.value;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(imageDataFields)) {
    const dataUrl = field.dataUrl;
    if (!dataUrl) continue;
    if (!dataUrl.startsWith("data:image/")) {
      throw new Error("Image data field must be a data:image/* base64 string");
    }
    eventPayload.formData[key] = dataUrl;
    eventPayload.formLabels[key] = field.label;
  }

  for (const [key, field] of Object.entries(fileFields)) {
    const file = field.file;
    if (!file) continue;
    if (file.size > 50 * 1024 * 1024) {
      throw new Error("File must be 50 MB or smaller");
    }
    eventPayload.formData[key] = {
      filename: file.name,
      size: file.size,
      type: file.type || "application/octet-stream",
    };
    eventPayload.formLabels[key] = field.label;
  }

  for (const key of Object.keys(eventPayload.formData)) {
    eventPayload.formLabels[key] ||= key;
  }

  body.append("event", JSON.stringify(eventPayload));

  fetch(ENDPOINT, {
    method: "POST",
    headers: {
      version: "2021-07-28",
    },
    body,
  }).catch(() => {}); // Fire-and-forget — don't block form UX
};

// Reuse the published site's analytics session (set by /__vibe/analytics.js) so the
// submission joins the visit's page views; fall back to a fresh id when it is absent
// or unreadable (document.cookie throws in a sandboxed iframe).
const getTrackingSessionId = () => {
  try {
    const sid = document.cookie.match(/(?:^|;\s*)__vibe_sid=([0-9a-f-]{36})(?:;|$)/)?.[1];
    if (sid) return sid;
  } catch {}
  return crypto.randomUUID();
};

export const buildTrackingPayload = (formId: string, formName: string) => ({
  type: "external_form_submission" as const,
  timestamp: Date.now(),
  formId,
  formData: {} as Record<string, unknown>,
  formLabels: {} as Record<string, string>,
  url: typeof window !== "undefined" ? window.location.href : "",
  title: typeof document !== "undefined" ? document.title : "",
  path: typeof window !== "undefined" ? window.location.pathname : "",
  userAgent: typeof navigator !== "undefined" ? navigator.userAgent : "",
  trackingId: TRACKING_ID,
  locationId: LOCATION_ID,
  projectId: PROJECT_ID,
  sessionId: getTrackingSessionId(),
  properties: {
    deviceType:
      typeof navigator !== "undefined" && /Mobile|Android|iPhone/i.test(navigator.userAgent)
        ? "mobile"
        : "desktop",
    source: "ai_studio",
    projectId: PROJECT_ID,
    formName,
  },
});
