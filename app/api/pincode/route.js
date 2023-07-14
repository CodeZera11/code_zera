import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json([324006, 110003, 123456, 324007])
}