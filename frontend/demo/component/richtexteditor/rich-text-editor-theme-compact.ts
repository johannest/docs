import 'Frontend/demo/init'; // hidden-source-line

import { html, LitElement } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@vaadin/rich-text-editor';

import templates from '../../../../src/main/resources/data/templates.json';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('rich-text-editor-theme-compact')
export class Example extends LitElement {
  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  @state()
  private accessor richText = templates.richTextDelta;

  protected override render() {
    return html`
      <!-- tag::snippet[] -->
      <vaadin-rich-text-editor
        style="height: 400px;"
        theme="compact"
        .value="${this.richText}"
      ></vaadin-rich-text-editor>
      <!-- end::snippet[] -->
    `;
  }
}
