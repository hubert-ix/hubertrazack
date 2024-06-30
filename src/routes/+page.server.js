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
    const resend = new Resend(PUBLIC_RESEND_KEY);
    const { data, error } = await resend.emails.send({
      from: 'Website <noreply@hubertrazack.com>',
      to: ['razack.hubert@gmail.com'],
      subject,
      html: html,
    });
    if (error) {
      console.error("ERROR SENDING EMAIL", error);
    }
    return { success: true };
  },
};