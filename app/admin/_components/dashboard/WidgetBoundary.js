"use client";

import { Component } from "react";
import Icon from "../ui/Icon";

// One widget failing must not cost the other thirty. The dashboard renders
// ~35 independent blocks off one payload; before this, a single bad field
// (a null where a list was expected) threw during render and React unmounted
// the whole tree — the admin saw a blank page and no indication of which
// block was at fault.
//
// A class component because that is still the only way to catch a render
// error in React; everything else in the panel is a function component.
export default class WidgetBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
    this.retry = this.retry.bind(this);
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error(`widget "${this.props.widgetId}" crashed`, error, info);
  }

  retry() {
    this.setState({ error: null });
    this.props.onRetry?.();
  }

  render() {
    if (!this.state.error) return this.props.children;

    return (
      <div className="admin-card dash-card widget-error" role="alert">
        <div className="widget-error-head">
          <Icon name="alertTriangle" size={16} />
          <strong>{this.props.title || "Ce bloc n'a pas pu s'afficher"}</strong>
        </div>
        <p className="widget-error-msg">
          {this.state.error?.message
            ? `Erreur : ${this.state.error.message}`
            : "Une erreur inattendue est survenue pendant le rendu de ce bloc."}
        </p>
        <div className="widget-error-actions">
          <button type="button" className="admin-btn secondary small" onClick={this.retry}>
            <Icon name="refresh" size={14} /> Réessayer
          </button>
          {this.props.onDismiss && (
            <button type="button" className="admin-btn ghost small" onClick={this.props.onDismiss}>
              Masquer ce bloc
            </button>
          )}
        </div>
      </div>
    );
  }
}

// Same slab, but for a *fetch* that failed rather than a render that threw —
// the group-level error surfaced by useDashboardData. Kept next to the
// boundary so both failure modes look like one thing to the reader.
export function WidgetFetchError({ title, message, onRetry }) {
  return (
    <div className="admin-card dash-card widget-error" role="alert">
      <div className="widget-error-head">
        <Icon name="alertTriangle" size={16} />
        <strong>{title || "Données indisponibles"}</strong>
      </div>
      <p className="widget-error-msg">{message || "Le chargement de ces données a échoué."}</p>
      {onRetry && (
        <div className="widget-error-actions">
          <button type="button" className="admin-btn secondary small" onClick={onRetry}>
            <Icon name="refresh" size={14} /> Réessayer
          </button>
        </div>
      )}
    </div>
  );
}
