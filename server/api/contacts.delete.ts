import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  let deletedContact = null

  if (body.id) {
    deletedContact = await prisma.contact.delete({
      where: { id: body.id },
    })
  }

  return { contacts: deletedContact }
})