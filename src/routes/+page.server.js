import { Resend } from 'resend';
import { PUBLIC_RESEND_KEY } from '$env/static/public';
import { PRIVATE_RECAPTCHA_KEY } from '$env/static/private';

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    const token = formData.get('token');
    //console.log(token, Date.now())
    // check the recaptcha token
    const res = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${PRIVATE_RECAPTCHA_KEY}&response=${token}`, { method: 'POST' });
    const data = await res.json();
    console.log(data)

    /*
    // send email
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
    }*/
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
