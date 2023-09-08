 
import prisma from "@/app/lib/prisma"
import { NextResponse } from "next/server"



export async function POST(req) {
    const body = await req.json()
 
    const comment = await prisma.comments.create({
        data: body
    })
 
    return NextResponse.json(comment, {status: 200})
  
}

 