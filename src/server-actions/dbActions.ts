"use server";
import { cartItemsTypes } from "@/lib/types";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

type addToCartType = {
  itemId: string;
  price: number;
  title: string;
  imageUrl: string;
  Quantity: number;
};
export const addtoCartAction = async (
  data: addToCartType,
  userId: string
): Promise<void> => {
  const { imageUrl, price, itemId, title, Quantity } = data;

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

    const existingCartItem = await prisma.cartItem.findUnique({
      where: {
        ItemId: data.itemId,
        user: {
          UserId: userId,
        },
      },
    });

    console.log(existingCartItem);

    if (existingCartItem) {
      await prisma.cartItem.update({
        where: {
          id: existingCartItem.id,
        },
        data: {
          Quantity: existingCartItem.Quantity + Quantity,
        },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          ItemId: itemId,
          Quantity: Quantity,
          price: price,
          title: title,
          imageUrl: imageUrl,
          user: {
            connect: {
              UserId: userId,
            },
          },
        },
      });
    }
  } catch (error: any) {
    console.error(error.message);
    throw new Error("Failed to fetch cart items");
  } finally {
    await prisma.$disconnect();
  }
};

export const CartItemsFetch = async (
  userId: string
): Promise<cartItemsTypes[]> => {
  console.log(userId);

  try {
    const cartItems: cartItemsTypes[] = await prisma.cartItem.findMany({
      where: {
        user: {
          UserId: userId,
        },
      },
    });
    return cartItems;
  } catch (error: any) {
    console.error(error.message);
    throw new Error("Failed to fetch cart items");
  } finally {
    await prisma.$disconnect();
  }
};
