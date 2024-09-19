import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  console.log("Received body:", body); // Log the request body
  let user = null;

  if (body.name && body.email && body.emp) {
    return await prisma.contact.create({
      data: {
        name: body.name,
        email: body.email,
        subject: body.subject,
        phone: body.phone,
        message: body.message,
   emp:body.emp,
      },
    });
    console.log("Created user:", user); // Log the created user
  } else {
    console.log("Name not provided in request body");
  }

  return { user };
});
