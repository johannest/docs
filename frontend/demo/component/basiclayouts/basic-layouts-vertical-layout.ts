import 'Frontend/demo/init'; // hidden-source-line
import { css, html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import { applyTheme } from 'Frontend/generated/theme';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';
import './layout-item';

import '@vaadin/vaadin-item';

@customElement('basic-layouts-vertical-layout')
export class Example extends LitElement {
  protected createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  static get styles() {
    return css`
      vaadin-vertical-layout {
        border: 1px solid var(--lumo-primary-color);
        border-radius: var(--lumo-border-radius-l);
      }
    `;
  }

  render() {
    return html`
      <!-- tag::snippet[] -->
      <vaadin-vertical-layout theme="spacing padding">
        <layout-item>Item 1</layout-item>
        <layout-item>Item 2</layout-item>
        <layout-item>Item 3</layout-item>
        <layout-item>Item 4</layout-item>
      </vaadin-vertical-layout>
      <!-- end::snippet[] -->
    `;
  }
}