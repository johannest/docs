import 'Frontend/demo/init'; // hidden-source-line
import './upload-demo-helpers'; // hidden-source-line
import { css, html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';
import { Notification } from '@vaadin/notification';
import '@vaadin/upload';
import type { Upload, UploadFileRejectEvent } from '@vaadin/upload';
import { applyTheme } from 'Frontend/generated/theme';

@customElement('upload-helper')
export class Example extends LitElement {
  static override styles = css`
    h4 {
      margin-top: 0;
    }

    p {
      color: var(--lumo-secondary-text-color);
    }
  `;

  protected override createRenderRoot() {
    const root = super.createRenderRoot();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(root);
    return root;
  }

  @query('vaadin-upload')
  private accessor upload!: Upload;

  // tag::snippet[]
  protected override firstUpdated() {
    this.upload.i18n.addFiles.one = 'Upload Spreadsheet...';
    this.upload.i18n.dropFiles.one = 'Drop spreadsheet here';
    this.upload.i18n.error.incorrectFileType =
      'Provide the file in one of the supported formats (.xls, .xlsx, .csv).';
    this.upload.i18n = { ...this.upload.i18n };
  }

  protected override render() {
    // end::snippet[]
    const maxFileSizeInMB = 1;
    const maxFileSizeInBytes = maxFileSizeInMB * 1024 * 1024;
    const acceptedTypes = [
      // Microsoft Excel (.xls)
      'application/vnd.ms-excel',
      '.xls',
      // Microsoft Excel (OpenXML, .xlsx)
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      '.xlsx',
      // Comma-separated values (.csv)
      'text/csv',
      '.csv',
    ];
    // tag::snippet[]
    return html`
      <h4>Upload spreadsheet</h4>
      <p>
        File size must be less than or equal to ${maxFileSizeInMB} MB.<br />
        Only Excel and CSV files are accepted.
      </p>
      <vaadin-upload
        max-files="1"
        .maxFileSize="${maxFileSizeInBytes}"
        .accept="${acceptedTypes.join(',')}"
        @file-reject="${this.fileRejectHandler}"
      ></vaadin-upload>
    `;
  }
  // end::snippet[]

  fileRejectHandler(event: UploadFileRejectEvent) {
    Notification.show(event.detail.error);
  }
}
