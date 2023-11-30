"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const addtoCartAction = async (
  userId: string,
  itemId: string
): Promise<void> => {
  console.log(userId, itemId);

  let user;
  try {
    user = await prisma.user.findUnique({
      where: {
        UserId: userId,
      },
    });

    if (!user) {
      user = await prisma.user.create({
        data: {
          UserId: userId,
        },
      });
    }
    await prisma.cartItem.create({
      data: {
        ItemId: itemId,
        user: {
          connect: {
            UserId: userId,
          },
        },
      },
    });
  } catch (error) {
    console.error("Error adding cart item:", error);
  } finally {
    await prisma.$disconnect();
  }
};
