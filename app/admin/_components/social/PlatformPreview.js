"use client";

import { truncateCaption } from "./lib/seo";

export function FacebookPreview({ imgSrc, text }) {
  const { shown, truncated } = truncateCaption(text, 477);
  return (
    <div className="pf-mock pf-mock-fb">
      <div className="pf-mock-head">
        <div className="pf-mock-avatar">S</div>
        <div>
          <div className="pf-mock-name">SaadConcours</div>
          <div className="pf-mock-time">à l'instant · 🌐</div>
        </div>
      </div>
      <div className="pf-mock-caption">
        {shown}
        {truncated && <span className="pf-mock-truncate"> … Voir plus</span>}
      </div>
      {imgSrc && <img className="pf-mock-image" src={imgSrc} alt="" />}
      <div className="pf-mock-actions">
        <span>👍 J'aime</span>
        <span>💬 Commenter</span>
        <span>↗ Partager</span>
      </div>
    </div>
  );
}

export function InstagramPreview({ imgSrc, text }) {
  const { shown, truncated } = truncateCaption(text, 125);
  return (
    <div className="pf-mock pf-mock-ig">
      <div className="pf-mock-head">
        <div className="pf-mock-avatar">S</div>
        <div>
          <div className="pf-mock-name">saadconcours.space</div>
        </div>
        <div className="pf-mock-more">•••</div>
      </div>
      {imgSrc && <img className="pf-mock-image square" src={imgSrc} alt="" />}
      <div className="pf-mock-icons">
        <span>♡</span>
        <span>💬</span>
        <span>➤</span>
        <span className="pf-mock-icons-save">🔖</span>
      </div>
      <div className="pf-mock-caption">
        <strong>saadconcours.space</strong> {shown}
        {truncated && <span className="pf-mock-truncate"> … plus</span>}
      </div>
    </div>
  );
}

export function WhatsAppPreview({ imgSrc, text }) {
  const { shown, truncated } = truncateCaption(text, 320);
  return (
    <div className="pf-mock pf-mock-wa">
      <div className="pf-mock-wa-bubble">
        {imgSrc && <img className="pf-mock-image" src={imgSrc} alt="" />}
        <div className="pf-mock-wa-caption">
          {shown}
          {truncated && <span className="pf-mock-truncate">…</span>}
        </div>
        <div className="pf-mock-wa-meta">14:32 ✓✓</div>
      </div>
    </div>
  );
}
