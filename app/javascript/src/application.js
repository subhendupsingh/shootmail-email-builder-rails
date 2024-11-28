import { ShootmailEditor } from '@shootmail/email-builder';
import '@shootmail/email-builder/dist/shootmail.css';

document.addEventListener('DOMContentLoaded', () => {
    const editor = new ShootmailEditor({
        elementId: 'shootmail-editor',
        imageServiceUrl: {
            token: "YOUR_UPLOAD_TOKEN",
            url: "YOUR_UPLOAD_URL"
        },
        settingsControl: true,
        theme: {
            borderRadius: '8',
            padding: true,
            light: {
              editorBackground: '#ffffff',
              editorBorder: '#e2e8f0',
              emailBackground: '#f8fafc'
            },
            dark: {
              editorBackground: '#1e293b', 
              editorBorder: '#334155',
              emailBackground: '#0f172a'
            }
          }
    });
});