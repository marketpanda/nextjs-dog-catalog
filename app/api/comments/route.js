 
import prisma from "@/app/lib/prisma"
import { NextResponse } from "next/server"

export const dynamic = 'force-dynamic'

export async function POST(req) {
    const body = await req.json()
 
    const comment = await prisma.comments.create({
        data: body
    })
 
    return NextResponse.json(comment, {status: 200})
  
}
export async function GET() { 
 
    const comments = await prisma.comments.findMany()

    try {
        return NextResponse.json(comments, {status: 200})
    } catch (error) {
        return NextResponse.json(error, {status: 500})
    } 
  
}

 