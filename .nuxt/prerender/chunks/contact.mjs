import { defineEventHandler, readBody } from 'file://C:/projects/desix/node_modules/h3/dist/index.mjs';
import { Resend } from 'file://C:/projects/desix/node_modules/resend/dist/index.mjs';

const resend = new Resend(process.env.RESEND_API_KEY);
const contact = defineEventHandler(async (event) => {
  const { name, mail, subject, telephone, message } = await readBody(event);
  try {
    await resend.emails.send({
      // We can use one of our emails as the sender
      from: "Acme <onboarding@resend.dev>",
      // The email we want to receive the message to
      to: "barbour.hassan@gmail.com",
      // Let's add the users name and mail address as a subject
      subject: ` ${subject} from ${name}`,
      // The message content
      html: "Name:" + name + "<br>Email:" + mail + "<br>Phone:" + telephone + "<br>" + message
    });
    return {
      success: true
    };
  } catch (err) {
    return { err };
  }
});

export { contact as default };
//# sourceMappingURL=contact.mjs.map
