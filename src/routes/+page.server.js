import { Resend } from 'resend';

let PUBLIC_RESEND_KEY = 're_KyHWWHi5_7pwbBMJs5ibAyMrVMBFJ6noX';

export const actions = {
  default: async ({ request }) => {

    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    let subject = "Enquiry from " + name;
    let html = '<p>From: ' + name + ' (' + email +')</p>';
    html += '<p>' + message + '</p>';
    html = nl2br(html);
    const resend = new Resend(PUBLIC_RESEND_KEY);
    const { data, error } = await resend.emails.send({
      from: 'Website <noreply@hubertrazack.com>',
      to: ['razack.hubert@gmail.com'],
      subject,
      html,
    });
    if (error) {
      console.error("ERROR SENDING EMAIL", error);
    }
    return { success: true };
  },
};

function nl2br (str, is_xhtml) {
  if (typeof str === 'undefined' || str === null) {
      return '';
  }
  var breakTag = (is_xhtml || typeof is_xhtml === 'undefined') ? '<br />' : '<br>';
  return (str + '').replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1' + breakTag + '$2');
}